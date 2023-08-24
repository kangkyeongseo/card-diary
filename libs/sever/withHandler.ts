import { NextApiRequest, NextApiResponse } from "next";

type method = "GET" | "POST";

interface ConfigType {
  method: method[];
  handler: (req: NextApiRequest, res: NextApiResponse) => void;
  isPrivate?: Boolean;
}

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

export default function withHandler({
  method,
  handler,
  isPrivate = true,
}: ConfigType) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    const {
      session: { user },
    } = req;
    if (req.method && !method.includes(req.method as any)) {
      return res.status(405).end();
    }
    if (isPrivate && !user) {
      return res.status(401).json({ ok: false });
    }
    try {
      await handler(req, res);
    } catch (error) {
      console.log(error);
      return res.status(500).end();
    }
  };
}
