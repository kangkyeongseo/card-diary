import client from "@/libs/sever/client";
import withHandler from "@/libs/sever/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ ok: boolean }>
) {
  const {
    body: { userId, email, userName, password, confirmPassword },
  } = req;
  const idConfirm = await client.user.findUnique({ where: { userId } });
  const emailConfirm = await client.user.findUnique({ where: { email } });

  if (idConfirm || emailConfirm) {
    return res.status(409).json({ ok: false });
  }

  if (password === confirmPassword) {
    try {
      await client.user.create({ data: { userId, email, userName, password } });
    } catch (err) {
      return res.status(500).json({ ok: false });
    }
  } else {
    return res.status(400).json({ ok: false });
  }

  return res.status(200).json({ ok: true });
}

export default withHandler({ method: "POST", handler });
