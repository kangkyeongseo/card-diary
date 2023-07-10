import useDate from "@/libs/client/useDate";
import { Diary } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DiaryDetail() {
  const router = useRouter();
  const [diary, setDiary] = useState<Diary>();
  const onPeriodChange = (date: any) => {
    const today = new Date();
    const periodDate = Math.round((+date - +today) / 1000 / 3600 / 24);
    return periodDate;
  };
  const getDiary = async () => {
    const data = await (await fetch(`/api/diary/${router.query.id}`)).json();
    setDiary(data.diary);
  };
  useEffect(() => {
    if (router.query.id) {
      getDiary();
    }
  }, [router]);
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[rgba(0,0,0,0.8)]">
      {diary && (
        <div className="max-w-2xl px-8 pt-4 pb-8 flex flex-col gap-4 text-white bg-slate-600 rounded-xl shadow-2xl ">
          <div
            className="self-end cursor-pointer text-3xl"
            onClick={() => router.push("/")}
          >
            x
          </div>
          <div
            className={[
              "w-[600px] p-8 flex flex-col gap-8 rounded-xl",
              `bg-${diary.bgColor}-500`,
            ].join(" ")}
          >
            <header className="flex justify-between">
              <div>{useDate(new Date(diary.date))}</div>
            </header>
            <h1 className="text-center text-2xl font-bold">{diary.title}</h1>
            <p className="min-h-[300px]">{diary.content}</p>
            <div className="self-end">
              {onPeriodChange(new Date(diary.date))}일 남음
            </div>
          </div>
          <div className="flex justify-between">
            <button className="w-48 p-2 rounded-xl bg-red-500 hover:bg-red-600">
              삭제하기
            </button>
            <button
              className="w-48 p-2 rounded-xl bg-slate-500 hover:bg-slate-700"
              onClick={() => router.push(`/diary/${diary.id}/edit-card`)}
            >
              수정하기
            </button>
            <button className="w-48 p-2 rounded-xl bg-blue-500 hover:bg-blue-600">
              완료하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
