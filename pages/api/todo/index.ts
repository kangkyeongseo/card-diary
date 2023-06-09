import withHandler from "@/libs/sever/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@/libs/sever/client";
import withSession from "@/libs/sever/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ ok: boolean; [key: string]: any }>
) {
  if (req.method === "POST") {
    const {
      session: { user },
    } = req;
    const {
      body: { title, content, date, importance, bgColor },
    } = req;
    if (!user) return res.status(403).json({ ok: false });
    await client.todo.create({
      data: {
        title,
        content,
        date: new Date(date),
        importance: +importance,
        bgColor,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });
    return res.status(200).json({ ok: true });
  } else if (req.method === "GET") {
    const {
      session: { user },
    } = req;
    const todos = await client.todo.findMany({ where: { userId: user.id } });
    return res.status(200).json({ ok: true, todos });
  }
}

export default withSession(withHandler({ method: ["GET", "POST"], handler }));
