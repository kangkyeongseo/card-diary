import Link from "next/link";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { DiaryList, TodoList } from "@prisma/client";
import { listType } from "../SideBar";
import SideBarTodoList from "../List/SideBarTodoList";
import SideBarDiaryList from "../List/SideBarDiaryList";
import useUser from "@/libs/client/useUser";

interface SideBarListsProp {
  listType: listType;
}

export interface TodoListResponse {
  ok: boolean;
  todoList: TodoList[];
}

export interface DiaryListResponse {
  ok: boolean;
  diaryList: DiaryList[];
}

export default function SideBarLists({ listType }: SideBarListsProp) {
  const searchParams = useSearchParams();
  const search = searchParams.get("list");
  const { user } = useUser();
  const { data: todoList } = useSWR<TodoListResponse>(user && "/api/todo/list");
  const { data: diaryList } = useSWR<DiaryListResponse>(
    user && "/api/diary/list"
  );
  return (
    <ul className="w-full p-4 ">
      {listType === "todo" && (
        <>
          <li className="flex justify-between group/list">
            <Link href={"/"}>
              <span className={!search ? "font-bold" : "font-light"}>전체</span>
            </Link>
          </li>
          {todoList?.todoList.map((list) => (
            <SideBarTodoList
              key={list.id}
              id={list.id}
              title={list.title}
              selected={Number(search) === list.id}
            />
          ))}
        </>
      )}
      {listType === "diary" && (
        <>
          <li className="flex justify-between group/list">
            <Link href={"/diary"}>
              <span className={!search ? "font-bold" : "font-light"}>전체</span>
            </Link>
          </li>
          {diaryList?.diaryList.map((list) => (
            <SideBarDiaryList key={list.id} id={list.id} title={list.title} />
          ))}
        </>
      )}
    </ul>
  );
}
