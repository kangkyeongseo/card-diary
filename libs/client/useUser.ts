import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function useUser() {
  const router = useRouter();
  const { data } = useSWR("/api/users/me");
  useEffect(() => {
    if (data && !data.ok) {
      router.push("/enter");
    }
  }, [data]);
  return { user: data?.user };
}
