import client from "@/libs/sever/client";
import withHandler from "@/libs/sever/withHandler";
import withSession from "@/libs/sever/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
  } = req;
  const diary = await client.diary.findUnique({ where: { id: Number(id) } });
  return res.status(200).json({ ok: true, diary });
}

export default withSession(withHandler({ method: ["GET"], handler }));
