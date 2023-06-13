import { User } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useUser() {
  const router = useRouter();
  const [data, setData] = useState<{ ok: boolean; user: User }>();
  useEffect(() => {
    fetch("/api/users/me")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  useEffect(() => {
    if (data && !data.ok) {
      router.push("/enter");
    }
  }, [data]);
  return { user: data?.user };
}
