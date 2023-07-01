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
  const todo = await client.todo.findUnique({
    where: { id: Number(id) },
  });
  return res.status(200).json({ ok: true, todo });
}

export default withSession(withHandler({ method: ["GET"], handler }));
