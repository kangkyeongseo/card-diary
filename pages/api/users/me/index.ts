import withHandler from "@/libs/sever/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import client from "@/libs/sever/client";
import { User } from "@prisma/client";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ ok: boolean; user?: User }>
) {
  const { session } = req;
  const user = await client.user.findUnique({ where: { id: session.user.id } });
  if (!user) return res.status(403).json({ ok: false });
  return res.status(200).json({ ok: true, user });
}

export default withIronSessionApiRoute(
  withHandler({ method: "GET", handler }),
  {
    cookieName: "carddiarysession",
    password:
      "kjspioejh290ejvnw0498th1-di9ivnb21-390th2-9ei9vn2-39rthb21-390gnv-0102jrt94-9ghn2-=e90vn1-230",
  }
);
