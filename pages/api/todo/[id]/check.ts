import client from "@/libs/sever/client";
import withHandler from "@/libs/sever/withHandler";
import withSession from "@/libs/sever/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    session: { user },
  } = req;
  try {
    const todo = await client.todo.findUnique({ where: { id: Number(id) } });
    if (todo?.userId === user.id) {
      await client.todo.update({
        where: { id: Number(id) },
        data: { isChecked: !todo?.isChecked },
      });
      return res.status(200).json({ ok: true });
    }
    return res.status(500).json({ ok: false });
  } catch (error) {
    return res.status(500).json({ ok: false });
  }
}

export default withSession(withHandler({ method: ["POST"], handler }));
