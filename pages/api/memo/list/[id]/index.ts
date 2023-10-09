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
  } = req;

  if (req.method === "POST") {
    const {
      body: { title },
    } = req;
    try {
      await client.memoList.update({
        where: { id: Number(id) },
        data: { title },
      });
      res.status(200).json({ ok: true });
    } catch (error) {
      res.status(500).json({ ok: false });
    }
  }
  if (req.method === "DELETE") {
    try {
      await client.memoList.delete({ where: { id: Number(id) } });
      res.status(200).json({ ok: true });
    } catch (error) {
      res.status(500).json({ ok: false });
    }
  }
}

export default withSession(
  withHandler({ method: ["POST", "DELETE"], handler })
);
