import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import client from "@/libs/sever/client";
import withHandler, { ResponseType } from "@/libs/sever/withHandler";
import withSession from "@/libs/sever/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    body: { userId, email, userName, password, confirmPassword },
  } = req;
  const idConfirm = await client.user.findUnique({ where: { userId } });
  const emailConfirm = await client.user.findUnique({ where: { email } });
  if (idConfirm) {
    return res.status(409).json({ ok: false, errorMessage: "userId" });
  }
  if (emailConfirm) {
    return res.status(409).json({ ok: false, errorMessage: "email" });
  }
  if (password === confirmPassword) {
    try {
      const hashPassword = await bcrypt.hash(password, 10);
      await client.user.create({
        data: { userId, email, userName, password: hashPassword },
      });
    } catch (err) {
      return res.status(500).json({ ok: false });
    }
  } else {
    return res.status(400).json({ ok: false, errorMessage: "confirmPassword" });
  }
  return res.status(200).json({ ok: true });
}

export default withSession(
  withHandler({ method: ["POST"], handler, isPrivate: false })
);
