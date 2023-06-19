import withHandler from "@/libs/sever/withHandler";
import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ ok: boolean }>
) {
  req.session.destroy();
  return res.status(200).json({ ok: true });
}

export default withIronSessionApiRoute(
  withHandler({ method: ["POST"], handler }),
  {
    cookieName: "carddiarysession",
    password:
      "kjspioejh290ejvnw0498th1-di9ivnb21-390th2-9ei9vn2-39rthb21-390gnv-0102jrt94-9ghn2-=e90vn1-230",
  }
);
