import withHandler from "@/libs/sever/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@/libs/sever/client";
import withSession from "@/libs/sever/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ ok: boolean; [key: string]: any }>
) {
  const {
    session: { user },
  } = req;
  const {
    body: { title, content, date, bgColor },
  } = req;
  if (!user) return res.status(403).json({ ok: false });
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
    },
  });
  return res.status(200).json({ ok: true });
}

export default withSession(withHandler({ method: ["POST"], handler }));
