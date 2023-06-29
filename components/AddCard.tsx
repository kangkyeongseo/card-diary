import useDate from "@/libs/client/useDate";
import { useForm } from "react-hook-form";

interface AddCardProp {
  kind?: "todo" | "diary" | "memo";
  onToggle: () => void;
}

export default function AddCard({ kind = "todo", onToggle }: AddCardProp) {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      title: "",
      content: "",
      date: new Date(),
      importance: 1,
      bgColor: "blue",
    },
  });
  const onPeriodChange = (date: any) => {
    const today = new Date();
    const periodDate = Math.round((+date - +today) / 1000 / 3600 / 24);
    return periodDate;
  };
  const onTodoVaild = async (data: any) => {
    await fetch("/api/todo", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    onToggle();
  };
  const onDiaryVaild = async (data: any) => {
    await fetch("/api/diary", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    onToggle();
  };
  const onMemoVaild = async (data: any) => {
    await fetch("/api/memo", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    onToggle();
  };
  return (
    <div className="fixed top-0 w-full h-full bg-[rgba(0,0,0,0.8)] z-10">
      {kind === "todo" ? (
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
                  {watch("title") === ""
                    ? "무엇을 해야하나요?"
                    : watch("title")}
                </div>
                <div className="text-white mt-4">
                  <div className="break-words">{watch("content")}</div>
                </div>
                <div className="text-sm text-white mt-4 absolute bottom-2 right-4">
                  <div>{onPeriodChange(new Date(watch("date")))}일 남음</div>
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
                  />
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
                  <label className="text-white">기간</label>
                  <input
                    {...register("date", { required: true })}
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
              onClick={onToggle}
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
      ) : null}
      {kind === "diary" ? (
        <div className="max-w-2xl bg-slate-600 mt-32 mx-auto p-8 rounded-xl shadow-2xl">
          <h3 className="text-xl font-bold text-white text-center">
            새로운 다이어리
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
                  {watch("title") === ""
                    ? "무슨 일이 있었나요?"
                    : watch("title")}
                </div>
                <div className="text-white mt-4">
                  <div className="break-words">{watch("content")}</div>
                </div>
              </div>
            </div>
            <div>
              <form
                className="flex flex-col gap-2"
                onSubmit={handleSubmit(onDiaryVaild)}
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
                    {...register("date")}
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
              onClick={onToggle}
            >
              취소하기
            </button>
            <button
              className="w-72 p-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600"
              onClick={handleSubmit(onDiaryVaild)}
            >
              생성하기
            </button>
          </div>
        </div>
      ) : null}
      {kind === "memo" ? (
        <div className="max-w-2xl bg-slate-600 mt-32 mx-auto p-8 rounded-xl shadow-2xl">
          <h3 className="text-xl font-bold text-white text-center">
            새로운 메모
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
                  {watch("title") === "" ? "메모" : watch("title")}
                </div>
                <div className="text-white mt-4">
                  <div className="break-words">{watch("content")}</div>
                </div>
              </div>
            </div>
            <div>
              <form
                className="flex flex-col gap-2"
                onSubmit={handleSubmit(onMemoVaild)}
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
                    {...register("date")}
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
              onClick={onToggle}
            >
              취소하기
            </button>
            <button
              className="w-72 p-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600"
              onClick={handleSubmit(onMemoVaild)}
            >
              생성하기
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
