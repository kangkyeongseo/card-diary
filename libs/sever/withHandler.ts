import { NextApiRequest, NextApiResponse } from "next";

interface ConfigProp {
  method: "GET" | "POST";
  handler: (req: NextApiRequest, res: NextApiResponse) => void;
}

export default function withHandler({ method, handler }: ConfigProp) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    if (method !== req.method) {
      return res.status(405).end();
    }
    await handler(req, res);
  };
}
