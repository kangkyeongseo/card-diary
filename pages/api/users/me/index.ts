import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@/libs/sever/withHandler";
import withSession from "@/libs/sever/withSession";
import client from "@/libs/sever/client";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { session } = req;
  if (!session.user) {
    return res.status(403).json({ ok: false });
  }
  const user = await client.user.findUnique({ where: { id: session.user.id } });
  if (!user) {
    return res.status(403).json({ ok: false });
  }
  return res.status(200).json({ ok: true, user });
}

export default withSession(
  withHandler({ method: ["GET"], handler, isPrivate: false })
);
