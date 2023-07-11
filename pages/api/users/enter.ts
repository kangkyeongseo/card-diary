import bcrypt from "bcrypt";
import client from "@/libs/sever/client";
import withHandler from "@/libs/sever/withHandler";
import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import withSession from "@/libs/sever/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ ok: boolean; error?: string }>
) {
  const {
    body: { userId, password },
  } = req;
  const user = await client.user.findUnique({ where: { userId } });
  if (!user) {
    return res.status(400).json({ ok: false, error: "userId" });
  }
  const confirmPassword = await bcrypt.compare(password, user.password);
  if (confirmPassword) {
    req.session.user = { id: user.id };
    await req.session.save();
    res.status(200).json({ ok: true });
  } else {
    res.status(400).json({ ok: false, error: "password" });
  }
}

export default withSession(
  withHandler({ method: ["POST"], handler, isPrivate: false })
);
