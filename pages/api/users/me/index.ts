import withHandler from "@/libs/sever/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@/libs/sever/client";
import { User } from "@prisma/client";
import withSession from "@/libs/sever/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ ok: boolean; user?: User }>
) {
  const { session } = req;
  if (!session.user) return res.status(403).json({ ok: false });
  const user = await client.user.findUnique({ where: { id: session.user.id } });
  if (!user) return res.status(403).json({ ok: false });
  return res.status(200).json({ ok: true, user });
}

export default withSession(
  withHandler({ method: ["GET"], handler, isPrivate: false })
);
