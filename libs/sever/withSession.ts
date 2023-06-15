import { withIronSessionApiRoute } from "iron-session/next";

export default function withSession(handler: any) {
  const config = {
    cookieName: "carddiarysession",
    password:
      "kjspioejh290ejvnw0498th1-di9ivnb21-390th2-9ei9vn2-39rthb21-390gnv-0102jrt94-9ghn2-=e90vn1-230",
  };
  return withIronSessionApiRoute(handler, config);
}
