import client from "@/libs/sever/client";
import withHandler from "@/libs/sever/withHandler";
import withSession from "@/libs/sever/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    session: { user },
  } = req;
  if (req.method === "GET") {
    const memo = await client.memo.findUnique({ where: { id: Number(id) } });
    res.status(200).json({ ok: true, memo });
  } else if (req.method === "POST") {
    const {
      body: { title, content, date, bgColor },
    } = req;
    await client.memo.update({
      where: { id: Number(id) },
      data: { title, content, date: new Date(date), bgColor },
    });
    return res.status(200).json({ ok: true });
  }
}

export default withSession(withHandler({ method: ["GET", "POST"], handler }));
