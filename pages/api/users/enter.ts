import client from "@/libs/sever/client";
import withHandler from "@/libs/sever/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ ok: boolean }>
) {
  const {
    body: { userId, password },
  } = req;
  const user = await client.user.findUnique({ where: { userId } });
  if (user?.password === password) {
    res.status(200).json({ ok: true });
  } else {
    res.status(400).json({ ok: false });
  }
}

export default withHandler({ method: "POST", handler });
