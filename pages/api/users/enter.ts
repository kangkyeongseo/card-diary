import bcrypt from "bcrypt";
import client from "@/libs/sever/client";
import withHandler from "@/libs/sever/withHandler";
import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";

declare module "iron-session" {
  interface IronSessionData {
    user: {
      id: number;
    };
  }
}

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

export default withIronSessionApiRoute(
  withHandler({ method: ["POST"], handler }),
  {
    cookieName: "carddiarysession",
    password:
      "kjspioejh290ejvnw0498th1-di9ivnb21-390th2-9ei9vn2-39rthb21-390gnv-0102jrt94-9ghn2-=e90vn1-230",
  }
);
