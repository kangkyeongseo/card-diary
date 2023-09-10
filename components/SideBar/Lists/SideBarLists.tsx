import Link from "next/link";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import SideBarList from "../List/SideBarList";
import { TodoList } from "@prisma/client";
import { listType } from "../SideBar";

interface SideBarListsProp {
  listType: listType;
}

export interface TodoListResponse {
  ok: boolean;
  todoList: TodoList[];
}

export default function SideBarLists({ listType }: SideBarListsProp) {
  const searchParams = useSearchParams();
  const search = searchParams.get("list");
  const { data } = useSWR<TodoListResponse>("/api/todo/list");
  return (
    <ul className="w-full p-4 ">
      {listType === "todo" && (
        <>
          <li className="flex justify-between group/list">
            <Link href={"/"}>
              <span className={!search ? "font-bold" : "font-light"}>전체</span>
            </Link>
          </li>
          {data?.todoList.map((list) => (
            <SideBarList
              key={list.id}
              id={list.id}
              title={list.title}
              selected={Number(search) === list.id}
            />
          ))}
        </>
      )}
    </ul>
  );
}
