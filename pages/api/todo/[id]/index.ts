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
      body: { title, list, content, date, importance, bgColor },
    } = req;
    await client.todo.update({
      where: { id: Number(id) },
      data: {
        title,
        content,
        date: new Date(date),
        importance: +importance,
        bgColor,
        todoList: {
          connect: {
            id: +list,
          },
        },
      },
    });
    return res.status(200).json({ ok: true });
  }
  if (req.method === "GET") {
    const todo = await client.todo.findUnique({
      where: { id: Number(id) },
    });
    return res.status(200).json({ ok: true, todo });
  }
  if (req.method === "DELETE") {
    try {
      await client.todo.delete({ where: { id: Number(id) } });
      res.status(200).json({ ok: true });
    } catch (error) {
      res.status(500).json({ ok: false });
    }
  }
}

export default withSession(
  withHandler({ method: ["GET", "POST", "DELETE"], handler })
);
