import { NextApiRequest, NextApiResponse } from "next";
import client from "@/libs/sever/client";
import withHandler, { ResponseType } from "@/libs/sever/withHandler";
import withSession from "@/libs/sever/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    body: { email, userName, userId },
    query: { type },
  } = req;
  if (type === "id") {
    const emailConfirm = await client.user.findUnique({ where: { email } });
    if (!emailConfirm) {
      res.status(401).json({
        ok: false,
        errorMessage: "email",
      });
    } else if (emailConfirm.userName !== userName) {
      res.status(401).json({
        ok: false,
        errorMessage: "userName",
      });
    } else {
      res.status(200).json({
        ok: true,
        userId: emailConfirm.userId,
      });
    }
  }
  if (type === "password") {
    const userIdConfirm = await client.user.findUnique({ where: { userId } });
    if (!userIdConfirm) {
      res.status(401).json({
        ok: false,
        errorMessage: "userId",
      });
    } else if (userIdConfirm.email !== email) {
      res.status(401).json({
        ok: false,
        errorMessage: "email",
      });
    } else {
      res.status(200).json({
        ok: true,
      });
    }
  }
  res.end();
}

export default withSession(
  withHandler({ method: ["POST"], handler, isPrivate: false })
);
