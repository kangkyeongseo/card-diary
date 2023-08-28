import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@/libs/sever/withHandler";
import withSession from "@/libs/sever/withSession";
import client from "@/libs/sever/client";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    session: { user },
  } = req;
  if (req.method === "GET") {
    try {
      const todoList = await client.todoList.findMany({
        where: { userId: user.id },
      });
      return res.status(200).json({ ok: true, todoList });
    } catch (error) {
      res.status(500).json({ ok: false, error });
    }
  }
  if (req.method === "POST") {
    const {
      body: { title },
    } = req;

    try {
      await client.todoList.create({
        data: {
          title,
          user: {
            connect: {
              id: user.id,
            },
          },
        },
      });
      return res.status(200).json({ ok: true });
    } catch (error) {
      res.status(500).json({ ok: false, error });
    }
  }
}

export default withSession(withHandler({ method: ["GET", "POST"], handler }));
