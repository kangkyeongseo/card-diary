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
    const diary = await client.diary.findUnique({ where: { id: Number(id) } });
    return res.status(200).json({ ok: true, diary });
  } else if (req.method === "POST") {
    const {
      body: { title, list, content, date, bgColor },
    } = req;
    await client.diary.update({
      where: { id: Number(id) },
      data: {
        title,
        content,
        date: new Date(date),
        bgColor,
        diaryList: { connect: { id: +list } },
      },
    });
    return res.status(200).json({ ok: true });
  }
}

export default withSession(withHandler({ method: ["GET", "POST"], handler }));
