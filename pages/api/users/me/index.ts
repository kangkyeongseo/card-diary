import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@/libs/sever/withHandler";
import withSession from "@/libs/sever/withSession";
import client from "@/libs/sever/client";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { session } = req;
  const user = await client.user.findUnique({ where: { id: session.user.id } });
  if (req.method === "GET") {
    if (!user) {
      return res.status(403).json({ ok: false });
    }
    return res.status(200).json({ ok: true, user });
  } else if (req.method === "POST") {
    const {
      query: { type },
      body,
    } = req;
    if (type === "name") {
      await client.user.update({
        where: { id: session.user.id },
        data: { userName: body.userName },
      });
    }
    return res.status(200).json({ ok: true });
  }
}

export default withSession(withHandler({ method: ["GET", "POST"], handler }));
