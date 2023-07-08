import client from "@/libs/sever/client";
import withHandler from "@/libs/sever/withHandler";
import withSession from "@/libs/sever/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
  } = req;
  const memo = await client.memo.findUnique({ where: { id: Number(id) } });
  res.status(200).json({ ok: true, memo });
}

export default withSession(withHandler({ method: ["GET"], handler }));
