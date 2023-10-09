import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import useUser from "@/libs/client/useUser";
import SideBar from "@/components/SideBar/SideBar";
import CardTable from "@/components/CardTable/CardTable";
import { Todo } from "@prisma/client";

interface TodoResponse {
  ok: boolean;
  todos: Todo[];
}

export default function Home() {
  const router = useRouter();
  const { user } = useUser();
  const { data } = useSWR<TodoResponse>(
    user
      ? router.query.list
        ? `/api/todo?list=${router.query.list}`
        : "/api/todo"
      : null
  );

  return (
    <div className="grid grid-cols-[300px_1fr] ">
      <SideBar user={user} listType="todo" />
      <CardTable kind="todo" data={data} />
    </div>
  );
}
