import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Diary } from "@prisma/client";
import useUser from "@/libs/client/useUser";
import Card from "@/components/Card";
import SideBar from "@/components/SideBar/SideBar";
import CardTable from "@/components/CardTable/CardTable";

interface DiaryResponse {
  ok: boolean;
  diarys: Diary[];
}

export default function Home() {
  const router = useRouter();
  const { user } = useUser();
  const { data } = useSWR<DiaryResponse>(
    user
      ? router.query.list
        ? `/api/diary?list=${router.query.list}`
        : "/api/diary"
      : null
  );
  const [diarys, setDiarys] = useState<DiaryResponse>();

  useEffect(() => {
    if (!data) {
      return;
    }
    if (!router.query.month) {
      setDiarys(data);
    } else {
      setDiarys({
        ok: data.ok,
        diarys: data.diarys.filter((diary) => {
          if (
            new Date(diary.date).getMonth() ===
            Number(router.query.month) - 1
          ) {
            return diary;
          }
        }),
      });
    }
  }, [data, router.query.month]);

  return (
    <div>
      <div className="grid grid-cols-[300px_1fr] ">
        <SideBar user={user} listType="diary" />
        <CardTable kind="diary" data={diarys} />
      </div>
    </div>
  );
}
