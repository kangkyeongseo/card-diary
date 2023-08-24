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
    body: { userId, password },
  } = req;
  const user = await client.user.findUnique({ where: { userId } });
  if (!user) {
    return res.status(400).json({ ok: false, errorMessage: "userId" });
  }
  const confirmPassword = await bcrypt.compare(password, user.password);
  if (confirmPassword) {
    req.session.user = { id: user.id };
    await req.session.save();
    res.status(200).json({ ok: true });
  } else {
    res.status(400).json({ ok: false, errorMessage: "password" });
  }
}

export default withSession(
  withHandler({ method: ["POST"], handler, isPrivate: false })
);
