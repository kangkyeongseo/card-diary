import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Memo } from "@prisma/client";
import useUser from "@/libs/client/useUser";
import SideBar from "@/components/SideBar/SideBar";
import CardTable from "@/components/CardTable/CardTable";

interface MemoResponse {
  ok: boolean;
  memos: Memo[];
}

export default function Home() {
  const router = useRouter();
  const { user } = useUser();
  const { data } = useSWR<MemoResponse>(
    user
      ? router.query.list
        ? `/api/memo?list=${router.query.list}`
        : "/api/memo"
      : null
  );

  return (
    <div className="grid grid-cols-[300px_1fr] ">
      <SideBar user={user} listType="memo" />
      <CardTable kind="memo" data={data} />
    </div>
  );
}
