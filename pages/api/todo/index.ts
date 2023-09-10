import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@/libs/sever/withHandler";
import client from "@/libs/sever/client";
import withSession from "@/libs/sever/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "POST") {
    const {
      session: { user },
    } = req;
    const {
      body: { title, list, content, date, importance, bgColor },
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
        todoList: {
          connect: {
            id: +list,
          },
        },
      },
    });
    return res.status(200).json({ ok: true });
  } else if (req.method === "GET") {
    const {
      session: { user },
      query: { list },
    } = req;
    // list가 없으면 전체 todo 데이터 불러오기
    if (!list) {
      const todos = await client.todo.findMany({ where: { userId: user.id } });
      return res.status(200).json({ ok: true, todos });
    } else {
      const todoList = await client.todoList.findUnique({
        where: { id: +list },
      });
      const todos = await client.todo.findMany({
        where: { userId: user.id, todoListId: todoList?.id },
      });
      return res.status(200).json({ ok: true, todos });
    }
  }
}

export default withSession(withHandler({ method: ["GET", "POST"], handler }));
