import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@/libs/sever/withHandler";
import withSession from "@/libs/sever/withSession";
import client from "@/libs/sever/client";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { id },
    body: { title },
  } = req;
  try {
    await client.todoList.update({
      where: { id: Number(id) },
      data: { title },
    });
    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false });
  }
}

export default withSession(withHandler({ method: ["POST"], handler }));
