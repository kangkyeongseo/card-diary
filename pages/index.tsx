import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import useSWR from "swr";
import { Todo } from "@prisma/client";
import useUser from "@/libs/client/useUser";
import Card from "@/components/Card";
import SideBar from "@/components/SideBar/SideBar";

interface TodoResponse {
  ok: boolean;
  todos: Todo[];
}

export default function Home() {
  const searchParams = useSearchParams();
  const search = searchParams.get("list");
  const router = useRouter();
  const { user } = useUser();
  const { data } = useSWR<TodoResponse>(
    search ? `/api/todo?list=${search}` : "/api/todo"
  );

  return (
    <div className="grid grid-cols-[300px_1fr] ">
      <SideBar user={user} />
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
        <div className="grid grid-cols-[repeat(auto-fit,minmax(14rem,max-content))] justify-center gap-8">
          {data?.todos?.map((todo) => (
            <Link href={`/todo/${todo.id}`} key={todo.id}>
              <Card
                id={todo.id}
                title={todo.title}
                contents={todo.content}
                date={todo.date}
                period={1}
                importance={todo.importance}
                bgColor={todo.bgColor}
              />
            </Link>
          ))}
          <div
            className="flex justify-center items-center w-full max-w-[14rem] h-80 rounded-xl border border-dashed text-white hover:scale-105"
            onClick={() => router.push(`/todo/add-card?list=${search}`)}
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
  );
}
