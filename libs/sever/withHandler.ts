import { NextApiRequest, NextApiResponse } from "next";

type method = "GET" | "POST";

interface ConfigProp {
  method: method[];
  handler: (req: NextApiRequest, res: NextApiResponse) => void;
}

export default function withHandler({ method, handler }: ConfigProp) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method && !method.includes(req.method as any)) {
      return res.status(405).end();
    }
    try {
      await handler(req, res);
    } catch (error) {
      console.log(error);
      return res.status(500).end();
    }
  };
}
