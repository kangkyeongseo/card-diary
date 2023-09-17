import withHandler from "@/libs/sever/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@/libs/sever/client";
import withSession from "@/libs/sever/withSession";
import { use } from "react";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ ok: boolean; [key: string]: any }>
) {
  const {
    session: { user },
  } = req;
  if (!user) return res.status(403).json({ ok: false });
  if (req.method === "POST") {
    const {
      body: { title, list, content, date, bgColor },
    } = req;
    await client.diary.create({
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
        diaryList: {
          connect: {
            id: +list,
          },
        },
      },
    });
    return res.status(200).json({ ok: true });
  } else if (req.method === "GET") {
    const diarys = await client.diary.findMany({ where: { userId: user.id } });
    console.log(diarys);
    return res.status(200).json({ ok: true, diarys });
  }
}

export default withSession(withHandler({ method: ["GET", "POST"], handler }));
