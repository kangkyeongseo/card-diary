import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import List from "./List";
import Popup from "../Popup/Popup";
import { TodoList, User } from "@prisma/client";

interface SideBarProp {
  user: User;
}

export interface TodoListResponse {
  ok: boolean;
  todoList: TodoList[];
}

export default function SideBar({ user }: SideBarProp) {
  const searchParams = useSearchParams();
  const search = searchParams.get("list");
  const { data } = useSWR<TodoListResponse>("/api/todo/list");
  const [isAddListPopup, setIsAddListPopup] = useState(false);
  return (
    <>
      <div className="grid grid-rows-[130px_1fr] bg-slate-700 min-h-screen rounded-r-[15px] shadow-2xl">
        <div className="bg-blue-500 rounded-tr-[15px] p-4 shadow-xl">
          <div className="uppercase text-white text-md font-light text-center border-b-[0.5px] pb-2">
            card diary
          </div>
          <div className="flex flex-col items-center gap-2 p-2 text-white">
            <div className="flex gap-1 text-lg font-bold">
              <span>안녕하세요,</span>
              <span>{user?.userName}님</span>
            </div>
            <div className="flex gap-2">
              <Link href={"/members"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 hover:text-slate-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
              </Link>
              <Link href={"/setting"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 hover:text-slate-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-white p-4">
          <div
            className="self-end mb-4"
            onClick={() => setIsAddListPopup(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 hover:text-slate-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <ul className="w-full p-4 ">
            <li className="flex justify-between group/list">
              <Link href={"/"}>
                <span className={!search ? "font-bold" : "font-light"}>
                  전체
                </span>
              </Link>
            </li>
            {data?.todoList.map((list) => (
              <List
                key={list.id}
                id={list.id}
                title={list.title}
                selected={Number(search) === list.id}
              />
            ))}
          </ul>
        </div>
      </div>
      {isAddListPopup && <Popup kind="add" setIsPopup={setIsAddListPopup} />}
    </>
  );
}