import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSWRConfig } from "swr";
import useDate from "@/libs/client/useDate";
import usePeriod from "@/libs/client/usePeriod";

interface CardProp {
  id: number;
  title: string;
  contents: string;
  date: Date;
  importance?: number;
  bgColor: string;
  isChecked?: boolean;
  kind?: "todo" | "diary" | "memo";
}

export default function Card({
  id,
  title,
  contents,
  date,
  importance,
  bgColor,
  isChecked = false,
  kind = "todo",
}: CardProp) {
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const [period, setPeriod] = useState(0);

  const onChecked = () => {
    fetch(`/api/todo/${id}/check`, { method: "POST" })
      .then((response) => response.json())
      .then((json) => {
        if (json.ok) {
          mutate(
            router.query.list
              ? `/api/todo?list=${router.query.list}`
              : "/api/todo"
          );
        } else if (!json.ok) {
          console.log(json.error);
        }
      });
  };

  useEffect(() => {
    setPeriod(usePeriod(new Date(date)));
  }, [date]);

  return (
    <div
      key={id}
      className={[
        "flex flex-col w-full max-w-[14rem] h-80 rounded-xl shadow-2xl p-4 relative hover:scale-105 group/card",
        `bg-${bgColor}-500`,
      ].join(" ")}
    >
      {kind === "todo" ? (
        <>
          <div className="flex justify-between items-center ">
            <span className="text-xs text-white">
              {useDate(new Date(date))}
            </span>
            <div className="text-xs">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={
                    importance! >= star ? "text-yellow-300" : "text-white"
                  }
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <div className="text-center text-lg font-bold text-white mt-4 break-words">
            {title.length === 0 ? "무엇을 해야하나요?" : title}
          </div>
          <div className="text-white mt-4">
            <div className="break-words">{contents}</div>
          </div>
          <div className="text-sm text-white mt-4 absolute bottom-2 right-4">
            <div>{period}일 남음</div>
          </div>
          {isChecked && (
            <div className="absolute top-0 left-0 rounded-xl w-full h-full bg-[rgba(0,0,0,0.5)] text-white flex justify-center items-center">
              <div onClick={onChecked} className="z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-16 h-16 hover:text-slate-900"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          )}
          {isChecked ? (
            <div className="absolute top-0 left-0 rounded-xl w-full h-full  hidden text-white group-hover/card:flex items-end justify-center">
              <div className="flex items-center gap-8 mb-12">
                <Link href={`/todo/${id}/edit-card`}>
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10 hover:text-slate-900"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>
                </Link>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10 hover:text-slate-900"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ) : (
            <div className="absolute top-0 left-0 rounded-xl w-full h-full bg-[rgba(0,0,0,0.5)] hidden text-white group-hover/card:flex items-end justify-center">
              <div className="flex items-center gap-8 mb-12">
                <Link href={`/todo/${id}/edit-card`}>
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10 hover:text-slate-900"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>
                </Link>
                <div onClick={onChecked}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10 hover:text-slate-900"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </>
      ) : null}
      {kind === "diary" ? (
        <>
          <div className="flex justify-center items-center ">
            <span className="text-xs text-white">
              {useDate(new Date(date))}
            </span>
          </div>
          <div className="text-center text-lg font-bold text-white mt-4 break-words">
            {title.length === 0 ? "무슨 일이 있었나요?" : title}
          </div>
          <div className="text-white mt-4">
            <div className="break-words">{contents}</div>
          </div>
          <div className="absolute top-0 left-0 rounded-xl w-full h-full bg-[rgba(0,0,0,0.5)] hidden text-white group-hover/card:flex items-end justify-center">
            <div className="flex items-center gap-8 mb-12">
              <div>
                <Link href={`/diary/${id}/edit-card`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 hover:text-slate-900"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>
                </Link>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 hover:text-slate-900"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </div>
            </div>
          </div>
        </>
      ) : null}
      {kind === "memo" ? (
        <>
          <div className="flex justify-center items-center ">
            <span className="text-xs text-white">
              {useDate(new Date(date))}
            </span>
          </div>
          <div className="text-center text-lg font-bold text-white mt-4 break-words">
            {title.length === 0 ? "무슨 일이 있었나요?" : title}
          </div>
          <div className="text-white mt-4">
            <div className="break-words">{contents}</div>
          </div>
          <div className="absolute top-0 left-0 rounded-xl w-full h-full bg-[rgba(0,0,0,0.5)] hidden text-white group-hover/card:flex items-end justify-center">
            <div className="flex items-center gap-8 mb-12">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 hover:text-slate-900"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 hover:text-slate-900"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
