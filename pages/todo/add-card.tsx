import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import useDate from "@/libs/client/useDate";
import usePeriod from "@/libs/client/usePeriod";
import { TodoListResponse } from "@/components/SideBar/Lists/SideBarLists";

interface AddTodoForm {
  title: string;
  list: string;
  content: string;
  date: string;
  importance: number;
  bgColor: "blue" | "green" | "yellow" | "slate" | "red";
}

export default function AddCard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const todoListId = searchParams.get("list");
  const { register, handleSubmit, watch } = useForm<AddTodoForm>({
    defaultValues: {
      title: "",
      content: "",
      date: new Date().toISOString().slice(0, 10),
      importance: 1,
      bgColor: "blue",
    },
  });
  const { data } = useSWR<TodoListResponse>("/api/todo/list");
  const [period, setPeriod] = useState(0);

  const onTodoVaild = (data: AddTodoForm) => {
    fetch("/api/todo", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.ok) {
          router.push("/");
        }
      });
  };

  useEffect(() => {
    setPeriod(usePeriod(new Date(watch("date"))));
  }, [watch("date")]);

  return (
    <div className="fixed top-0 w-full h-full bg-[rgba(0,0,0,0.8)] z-10">
      <div className="max-w-2xl bg-slate-600 mt-32 mx-auto p-8 rounded-xl shadow-2xl">
        <h3 className="text-xl font-bold text-white text-center">
          새로운 계획
        </h3>
        <div className="grid grid-cols-2 items-center mt-8">
          <div className="ml-6">
            <div
              className={[
                "flex flex-col w-56 h-80 rounded-xl shadow-2xl p-4 relative",
                `bg-${watch("bgColor")}-500`,
              ].join(" ")}
            >
              <div className="flex justify-between items-center ">
                <span className="text-xs text-white">
                  {useDate(new Date())}
                </span>
                <div className="text-xs">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={
                        +watch("importance") >= star
                          ? "text-yellow-300"
                          : "text-white"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-center text-lg font-bold text-white mt-4 break-words">
                {watch("title") === "" ? "무엇을 해야하나요?" : watch("title")}
              </div>
              <div className="text-white mt-4">
                <div className="break-words">{watch("content")}</div>
              </div>
              <div className="text-sm text-white mt-4 absolute bottom-2 right-4">
                <div>{period}일 남음</div>
              </div>
            </div>
          </div>
          <div>
            <form
              className="flex flex-col gap-2"
              onSubmit={handleSubmit(onTodoVaild)}
            >
              <div className="flex flex-col gap-2">
                <label className="text-white">제목</label>
                <input
                  {...register("title", { required: true })}
                  type="text"
                  className="px-2 py-1 border-none rounded-xl focus:outline-none"
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white">리스트</label>
                <select
                  className="px-2 py-1 border-none rounded-xl focus:outline-none"
                  {...register("list", { required: true })}
                  value={todoListId ? +todoListId : undefined}
                >
                  {data?.todoList.map((list) => (
                    <option key={list.id} value={list.id}>
                      {list.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white">내용</label>
                <input
                  {...register("content", { required: true })}
                  type="text"
                  className="px-2 py-1 border-none rounded-xl focus:outline-none"
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white">기간</label>
                <input
                  {...register("date", {
                    required: true,
                  })}
                  type="date"
                  className="px-2 py-1 border-none rounded-xl focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white">중요도</label>
                <div className="flex gap-1 text-xl">
                  <div>
                    <label
                      htmlFor="1"
                      className={
                        +watch("importance") >= 1
                          ? "text-yellow-300"
                          : "text-white"
                      }
                    >
                      ★
                    </label>
                    <input
                      {...register("importance")}
                      type="radio"
                      id="1"
                      value={1}
                      className="hidden"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="2"
                      className={
                        +watch("importance") >= 2
                          ? "text-yellow-300"
                          : "text-white"
                      }
                    >
                      ★
                    </label>
                    <input
                      {...register("importance")}
                      type="radio"
                      id="2"
                      value={2}
                      className="hidden"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="3"
                      className={
                        +watch("importance") >= 3
                          ? "text-yellow-300"
                          : "text-white"
                      }
                    >
                      ★
                    </label>
                    <input
                      {...register("importance")}
                      type="radio"
                      id="3"
                      value={3}
                      className="hidden"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="4"
                      className={
                        +watch("importance") >= 4
                          ? "text-yellow-300"
                          : "text-white"
                      }
                    >
                      ★
                    </label>
                    <input
                      {...register("importance")}
                      type="radio"
                      id="4"
                      value={4}
                      className="hidden"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="5"
                      className={
                        +watch("importance") >= 5
                          ? "text-yellow-300"
                          : "text-white"
                      }
                    >
                      ★
                    </label>
                    <input
                      {...register("importance")}
                      type="radio"
                      id="5"
                      value={5}
                      className="hidden"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white">배경색</label>
                <div className="flex gap-4">
                  <div>
                    <label htmlFor="blue">
                      <div
                        className={[
                          "w-12 h-12 rounded-lg bg-blue-500",
                          watch("bgColor") === "blue"
                            ? "border-2 border-white"
                            : "",
                        ].join(" ")}
                      ></div>
                    </label>
                    <input
                      {...register("bgColor")}
                      type="radio"
                      id="blue"
                      value={"blue"}
                      className="hidden"
                    />
                  </div>
                  <div>
                    <label htmlFor="green">
                      <div
                        className={[
                          "w-12 h-12 rounded-lg bg-green-500",
                          watch("bgColor") === "green"
                            ? "border-2 border-white"
                            : "",
                        ].join(" ")}
                      ></div>
                    </label>
                    <input
                      {...register("bgColor")}
                      type="radio"
                      id="green"
                      value={"green"}
                      className="hidden"
                    />
                  </div>
                  <div>
                    <label htmlFor="yellow">
                      <div
                        className={[
                          "w-12 h-12 rounded-lg bg-yellow-500",
                          watch("bgColor") === "yellow"
                            ? "border-2 border-white"
                            : "",
                        ].join(" ")}
                      ></div>
                    </label>
                    <input
                      {...register("bgColor")}
                      type="radio"
                      id="yellow"
                      value={"yellow"}
                      className="hidden"
                    />
                  </div>
                  <div>
                    <label htmlFor="slate">
                      <div
                        className={[
                          "w-12 h-12 rounded-lg bg-slate-500",
                          watch("bgColor") === "slate"
                            ? "border-2 border-white"
                            : "",
                        ].join(" ")}
                      ></div>
                    </label>
                    <input
                      {...register("bgColor")}
                      type="radio"
                      id="slate"
                      value={"slate"}
                      className="hidden"
                    />
                  </div>
                  <div>
                    <label htmlFor="red">
                      <div
                        className={[
                          "w-12 h-12 rounded-lg bg-red-500",
                          watch("bgColor") === "red"
                            ? "border-2 border-white"
                            : "",
                        ].join(" ")}
                      ></div>
                    </label>
                    <input
                      {...register("bgColor")}
                      type="radio"
                      id="red"
                      value={"red"}
                      className="hidden"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-between mt-8">
          <button
            className="w-72 p-2 rounded-xl bg-white hover:bg-gray-200"
            onClick={() => router.push("/")}
          >
            취소하기
          </button>
          <button
            className="w-72 p-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600"
            onClick={handleSubmit(onTodoVaild)}
          >
            생성하기
          </button>
        </div>
      </div>
    </div>
  );
}
