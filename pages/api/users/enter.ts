import client from "@/libs/sever/client";
import withHandler from "@/libs/sever/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ ok: boolean; error?: string }>
) {
  const {
    body: { userId, password },
  } = req;
  const user = await client.user.findUnique({ where: { userId } });
  if (!user) {
    res.status(400).json({ ok: false, error: "userId" });
  }
  if (user?.password === password) {
    res.status(200).json({ ok: true });
  } else {
    res.status(400).json({ ok: false, error: "password" });
  }
}

export default withHandler({ method: "POST", handler });
