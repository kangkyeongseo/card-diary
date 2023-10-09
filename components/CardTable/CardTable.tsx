import { useRouter } from "next/router";
import Card from "../Card";
import { Diary, Memo, Todo } from "@prisma/client";
import CardNavigation from "./CardNavigation/CardNavigation";

interface CardTableProp {
  kind?: "todo" | "diary" | "memo";
  data?: CardTableData;
}

interface CardTableData {
  ok: boolean;
  todos?: Todo[];
  diarys?: Diary[];
  memos?: Memo[];
}

export default function CardTable({ kind, data }: CardTableProp) {
  const router = useRouter();

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
            bgColor={todo.bgColor}
            importance={todo.importance}
            isChecked={todo.isChecked}
          />
        ))}
        {data?.diarys?.map((diary) => (
          <Card
            key={diary.id}
            id={diary.id}
            title={diary.title}
            contents={diary.content}
            date={diary.date}
            bgColor={diary.bgColor}
          />
        ))}
        {data?.memos?.map((memo) => (
          <Card
            key={memo.id}
            id={memo.id}
            title={memo.title}
            contents={memo.content}
            date={memo.date}
            bgColor={memo.bgColor}
          />
        ))}
        <div
          className="flex justify-center items-center w-full max-w-[14rem] h-80 rounded-xl border border-dashed text-white hover:scale-105"
          onClick={() =>
            router.push(`/${kind}/add-card?list=${router.query.list}`)
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
