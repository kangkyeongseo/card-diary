import { useRouter } from "next/router";
import useSWR from "swr";
import { useSearchParams } from "next/navigation";
import Card from "../Card";
import { Todo } from "@prisma/client";
import useUser from "@/libs/client/useUser";
import CardNavigation from "./CardNavigation/CardNavigation";

interface TodoResponse {
  ok: boolean;
  todos: Todo[];
}

export default function CardTable() {
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
    <div className="flex flex-col p-12">
      <CardNavigation />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(14rem,max-content))] justify-center gap-8">
        {data?.todos?.map((todo) => (
          <Card
            key={todo.id}
            id={todo.id}
            title={todo.title}
            contents={todo.content}
            date={todo.date}
            period={1}
            importance={todo.importance}
            bgColor={todo.bgColor}
            isChecked={todo.isChecked}
          />
        ))}
        <div
          className="flex justify-center items-center w-full max-w-[14rem] h-80 rounded-xl border border-dashed text-white hover:scale-105"
          onClick={() =>
            router.push(`/todo/add-card?list=${router.query.list}`)
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
  );
}
