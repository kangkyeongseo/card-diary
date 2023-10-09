import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import useSWR from "swr";
import useDate from "@/libs/client/useDate";
import { Diary } from "@prisma/client";
import { DiaryListResponse } from "@/components/SideBar/Lists/SideBarLists";

interface DiaryResponse {
  ok: boolean;
  diary: Diary;
}

interface EditDiaryForm {
  title: string;
  list: string;
  content: string;
  date: string;
  bgColor: string;
}

export default function EditCard() {
  const router = useRouter();
  const { data, error } = useSWR<DiaryResponse>(
    router.query.id && `/api/diary/${router.query.id}`
  );
  const { data: diaryListData } = useSWR<DiaryListResponse>("/api/diary/list");
  const { register, handleSubmit, watch, reset } = useForm<EditDiaryForm>();
  const onEditValid = async (data: EditDiaryForm) => {
    const response = await (
      await fetch(`/api/diary/${router.query.id}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      })
    ).json();
    if (response.ok) {
      router.push("/diary");
    }
  };

  useEffect(() => {
    if (data) {
      reset({
        title: data.diary.title,
        content: data.diary.content,
        date: data?.diary.date.toString().slice(0, 10),
        bgColor: data.diary.bgColor,
      });
    }
  }, [data]);
  return (
    <div className="fixed top-0 w-full h-full bg-[rgba(0,0,0,0.8)] z-10">
      <div className="max-w-2xl bg-slate-600 mt-32 mx-auto p-8 rounded-xl shadow-2xl">
        <h3 className="text-xl font-bold text-white text-center">
          다이어리 수정하기
        </h3>
        <div className="grid grid-cols-2 items-center mt-8">
          <div className="ml-6">
            <div
              className={[
                "flex flex-col w-56 h-80 rounded-xl shadow-2xl p-4 relative",
                `bg-${watch("bgColor")}-500`,
              ].join(" ")}
            >
              <div className="flex justify-center items-center ">
                <span className="text-sm text-white">
                  {useDate(new Date(watch("date")))}
                </span>
              </div>
              <div className="text-center text-lg font-bold text-white mt-4 break-words">
                {watch("title") === "" ? "무엇을 해야하나요?" : watch("title")}
              </div>
              <div className="text-white mt-4">
                <div className="break-words">{watch("content")}</div>
              </div>
            </div>
          </div>
          <div>
            <form
              className="flex flex-col gap-2"
              onSubmit={handleSubmit(onEditValid)}
            >
              <div className="flex flex-col gap-2">
                <label className="text-white">제목</label>
                <input
                  {...register("title", { required: true })}
                  type="text"
                  className="px-2 py-1 border-none rounded-xl focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white">리스트</label>
                <select
                  className="px-2 py-1 border-none rounded-xl focus:outline-none"
                  {...register("list", { required: true })}
                  value={data?.diary.diaryListId}
                >
                  {diaryListData?.diaryList.map((list) => (
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
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white">날짜</label>
                <input
                  {...register("date", { required: true })}
                  type="date"
                  className="px-2 py-1 border-none rounded-xl focus:outline-none"
                />
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
            onClick={router.back}
          >
            취소하기
          </button>
          <button
            className="w-72 p-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600"
            onClick={handleSubmit(onEditValid)}
          >
            수정하기
          </button>
        </div>
      </div>
    </div>
  );
}
