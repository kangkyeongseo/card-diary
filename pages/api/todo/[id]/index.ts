import withHandler from "@/libs/sever/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@/libs/sever/client";
import withSession from "@/libs/sever/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ ok: boolean; [key: string]: any }>
) {
  const {
    query: { id },
    session: { user },
  } = req;
  if (req.method === "POST") {
    const {
      body: { title, content, date, importance, bgColor },
    } = req;
    await client.todo.update({
      where: { id: Number(id) },
      data: {
        title,
        content,
        date: new Date(date),
        importance: +importance,
        bgColor,
      },
    });
    return res.status(200).json({ ok: true });
  } else if (req.method === "GET") {
    const todo = await client.todo.findUnique({
      where: { id: Number(id) },
    });
    return res.status(200).json({ ok: true, todo });
  }
}

export default withSession(withHandler({ method: ["GET", "POST"], handler }));
