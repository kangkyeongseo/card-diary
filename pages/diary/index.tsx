import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Diary } from "@prisma/client";
import useUser from "@/libs/client/useUser";
import Card from "@/components/Card";
import SideBar from "@/components/SideBar/SideBar";

interface IDiaryResponse {
  ok: boolean;
  diarys: Diary[];
}

export default function Home() {
  const router = useRouter();
  const { user } = useUser();
  const { data } = useSWR<IDiaryResponse>(
    user
      ? router.query.list
        ? `/api/diary?list=${router.query.list}`
        : "/api/diary"
      : null
  );
  const [diarys, setDiarys] = useState<Diary[]>();

  useEffect(() => {
    if (!data) {
      return;
    }
    if (!router.query.month) {
      setDiarys(data.diarys);
    } else {
      setDiarys(
        data.diarys.filter((diary) => {
          if (
            new Date(diary.date).getMonth() ===
            Number(router.query.month) - 1
          ) {
            return diary;
          }
        })
      );
    }
  }, [data, router.query.month]);

  return (
    <div>
      <div className="grid grid-cols-[300px_1fr] ">
        <SideBar user={user} listType="diary" />
        <div className="flex flex-col p-12">
          <ul className="grid grid-cols-3 items-center w-full max-w-xl bg-slate-700 rounded-[20px] mx-auto mb-12 shadow-2xl text-white">
            <li
              className={
                router.pathname === "/"
                  ? "w-full bg-slate-500 text-center p-2 rounded-[20px] border border-white hover:text-slate-900"
                  : "text-center hover:text-slate-900"
              }
              onClick={() => router.push("/")}
            >
              계획
            </li>
            <li
              className={
                router.pathname === "/diary"
                  ? "w-full bg-slate-500 text-center p-2 rounded-[20px] border border-white hover:text-slate-900"
                  : "text-center hover:text-slate-900"
              }
              onClick={() => router.push("/diary")}
            >
              다이어리
            </li>
            <li
              className={
                router.pathname === "/memo"
                  ? "w-full bg-slate-500 text-center p-2 rounded-[20px] border border-white hover:text-slate-900"
                  : "text-center hover:text-slate-900"
              }
              onClick={() => router.push("/memo")}
            >
              메모
            </li>
          </ul>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(14rem,max-content))] justify-center items-center gap-8 ">
            {diarys &&
              diarys.map((diary) => (
                <Card
                  key={diary.id}
                  id={diary.id}
                  title={diary.title}
                  contents={diary.content}
                  date={diary.date}
                  bgColor={diary.bgColor}
                  kind="diary"
                />
              ))}
            <div
              className="flex justify-center items-center w-full max-w-[14rem] h-80 rounded-xl border border-dashed text-white hover:scale-105"
              onClick={() =>
                router.push(`/diary/add-card?list=${router.query.list}`)
              }
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
