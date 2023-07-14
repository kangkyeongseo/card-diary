import client from "@/libs/sever/client";
import withHandler from "@/libs/sever/withHandler";
import withSession from "@/libs/sever/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    session: { user },
  } = req;
  if (!user) return res.status(403).json({ ok: false });
  if (req.method === "POST") {
    const {
      body: { title, content, date, bgColor },
    } = req;
    await client.memo.create({
      data: {
        title,
        content,
        date: new Date(date),
        bgColor,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });
    res.status(200).json({ ok: true });
  } else if (req.method === "GET") {
    const memos = await client.memo.findMany({ where: { userId: user.id } });
    res.status(200).json({ ok: true, memos });
  }
}

export default withSession(withHandler({ method: ["GET", "POST"], handler }));
