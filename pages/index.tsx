import React, { useState } from "react";

const todos = [
  {
    id: 1,
    title: "점심 먹기",
    todo: "옥수수 스프 먹기",
    date: new Date(),
    period: 0,
    importance: 3,
    bgColor: "blue",
  },
  {
    id: 2,
    title: "점심 먹기",
    todo: "옥수수 스프 먹기",
    date: new Date(),
    period: 0,
    importance: 3,
    bgColor: "red",
  },
  {
    id: 3,
    title: "점심 먹기",
    todo: "옥수수 스프 먹기",
    date: new Date(),
    period: 0,
    importance: 3,
    bgColor: "slate",
  },
  {
    id: 4,
    title: "점심 먹기",
    todo: "옥수수 스프 먹기",
    date: new Date(),
    period: 0,
    importance: 3,
    bgColor: "green",
  },
  {
    id: 5,
    title: "점심 먹기",
    todo: "옥수수 스프 먹기",
    date: new Date(),
    period: 0,
    importance: 3,
    bgColor: "yellow",
  },
  {
    id: 6,
    title: "점심 먹기",
    todo: "옥수수 스프 먹기",
    date: new Date(),
    period: 0,
    importance: 3,
    bgColor: "yellow",
  },
];

export default function Home() {
  const getFullDate = (date: Date) => {
    const year = date.getFullYear();
    const month =
      (date.getMonth() + 1).toString.length > 1
        ? date.getMonth() + 1
        : `0${date.getMonth() + 1}`;
    const day =
      date.getDate().toString.length > 1
        ? date.getDate()
        : `0${date.getDate()}`;
    return `${year}-${month}-${day}`;
  };
  const [addCard, setAddCard] = useState(false);
  const [editCard, setEditCard] = useState(false);
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState(getFullDate(new Date()));
  const [period, setPeriod] = useState(0);
  const [importance, setImportance] = useState(1);
  const [bgColor, setBgColor] = useState("blue");
  const onTitleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTitle(value);
  };
  const onToDoChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTodo(value);
  };
  const onPeriodChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    const today = new Date();
    const lastDay = new Date(value);
    const periodDate = Math.round((+lastDay - +today) / 1000 / 3600 / 24);
    setPeriod(periodDate);
  };
  const onAddCard = () => {
    setAddCard((pre) => !pre);
  };
  const onEditCard = () => {
    setEditCard((pre) => !pre);
  };
  return (
    <div>
      <div className="grid grid-cols-[300px_1fr] ">
        <div className="grid grid-rows-[130px_1fr] bg-slate-700 min-h-screen rounded-r-[15px]  shadow-2xl">
          <div className="bg-blue-500 rounded-tr-[15px] p-4 shadow-xl">
            <div className="uppercase text-white text-md font-light text-center border-b-[0.5px] pb-2">
              card diary
            </div>
            <div className="flex flex-col items-center gap-2 p-2 text-white">
              <div className="flex gap-1 text-lg font-bold">
                <span>안녕하세요,</span>
                <span>이름</span>
              </div>
              <div className="flex gap-2">
                <div>
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
                </div>
                <div>
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
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-white p-4">
            <div className="self-end mb-4 ">
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
            <ul className="w-full p-4">
              <li className="flex justify-between group/list">
                <span>메인</span>
                <div className="hidden group-hover/list:flex items-center gap-2 ">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 hover:text-slate-900"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      />
                    </svg>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 hover:text-slate-900"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </div>
                  <div onClick={onAddCard}>
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
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col p-12">
          <ul className="grid grid-cols-3 items-center w-full max-w-xl bg-slate-700 rounded-[20px] mx-auto mb-12 shadow-2xl text-white">
            <li className="w-full bg-slate-500 text-center p-2 rounded-[20px] border border-white hover:text-slate-900">
              계획
            </li>
            <li className="text-center hover:text-slate-900">다이어리</li>
            <li className="text-center hover:text-slate-900">메모</li>
          </ul>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] gap-8 justify-items-center">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className={[
                  "flex flex-col w-full max-w-56 h-80 rounded-xl shadow-2xl p-4 relative hover:scale-105 group/card",
                  `bg-${todo.bgColor}-500`,
                ].join(" ")}
              >
                <div className="flex justify-between items-center ">
                  <span className="text-xs text-white">
                    {getFullDate(todo.date)}
                  </span>
                  <div className="text-xs">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={
                          todo.importance >= star
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
                  {todo.title.length === 0 ? "무엇을 해야하나요?" : todo.title}
                </div>
                <div className="text-white mt-4">
                  <div className="break-words">{todo.todo}</div>
                </div>
                <div className="text-sm text-white mt-4 absolute bottom-2 right-4">
                  <div>{todo.period}일 남음</div>
                </div>
                <div className="absolute top-0 left-0 rounded-xl w-full h-full bg-[rgba(0,0,0,0.5)] hidden text-white group-hover/card:flex items-end justify-center">
                  <div className="flex gap-8 mb-12">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-10 h-10 hover:text-slate-900"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div onClick={onEditCard}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-10 h-10 hover:text-slate-900"
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
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div
              className="flex justify-center items-center w-full max-w-56 h-80 rounded-xl border border-dashed text-white hover:scale-105"
              onClick={onAddCard}
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
      <div
        className={[
          "fixed top-0 w-full h-full bg-[rgba(0,0,0,0.8)] z-10",
          addCard ? "" : "hidden",
        ].join(" ")}
      >
        <div className="max-w-2xl bg-slate-600 mt-32 mx-auto p-8 rounded-xl shadow-2xl">
          <h3 className="text-xl font-bold text-white text-center">
            새로운 계획
          </h3>
          <div className="grid grid-cols-2 items-center mt-8">
            <div className="ml-6">
              <div
                className={[
                  "flex flex-col w-56 h-80 rounded-xl shadow-2xl p-4 relative",
                  `bg-${bgColor}-500`,
                ].join(" ")}
              >
                <div className="flex justify-between items-center ">
                  <span className="text-xs text-white">{date}</span>
                  <div className="text-xs">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={
                          importance >= star ? "text-yellow-300" : "text-white"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-center text-lg font-bold text-white mt-4 break-words">
                  {title.length === 0 ? "무엇을 해야하나요?" : title}
                </div>
                <div className="text-white mt-4">
                  <div className="break-words">{todo}</div>
                </div>
                <div className="text-sm text-white mt-4 absolute bottom-2 right-4">
                  <div>{period}일 남음</div>
                </div>
              </div>
            </div>
            <div>
              <form className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <label className="text-white">제목</label>
                  <input
                    type="text"
                    className="px-2 py-1 border-none rounded-xl focus:outline-none"
                    value={title}
                    onChange={onTitleChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white">내용</label>
                  <input
                    type="text"
                    className="px-2 py-1 border-none rounded-xl focus:outline-none"
                    value={todo}
                    onChange={onToDoChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white">기간</label>
                  <input
                    type="date"
                    className="px-2 py-1 border-none rounded-xl focus:outline-none"
                    onChange={onPeriodChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white">중요도</label>
                  <div className="flex gap-1 text-xl">
                    <div>
                      <label
                        htmlFor="1"
                        className={
                          importance >= 1 ? "text-yellow-300" : "text-white"
                        }
                      >
                        ★
                      </label>
                      <input
                        type="radio"
                        id="1"
                        name="star"
                        className="hidden"
                        onClick={() => setImportance(1)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="2"
                        className={
                          importance >= 2 ? "text-yellow-300" : "text-white"
                        }
                      >
                        ★
                      </label>
                      <input
                        type="radio"
                        id="2"
                        name="star"
                        className="hidden"
                        onClick={() => setImportance(2)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="3"
                        className={
                          importance >= 3 ? "text-yellow-300" : "text-white"
                        }
                      >
                        ★
                      </label>
                      <input
                        type="radio"
                        id="3"
                        name="star"
                        className="hidden"
                        onClick={() => setImportance(3)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="4"
                        className={
                          importance >= 4 ? "text-yellow-300" : "text-white"
                        }
                      >
                        ★
                      </label>
                      <input
                        type="radio"
                        id="4"
                        name="star"
                        className="hidden"
                        onClick={() => setImportance(4)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="5"
                        className={
                          importance >= 5 ? "text-yellow-300" : "text-white"
                        }
                      >
                        ★
                      </label>
                      <input
                        type="radio"
                        id="5"
                        name="star"
                        className="hidden"
                        onClick={() => setImportance(5)}
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
                            bgColor === "blue" ? "border-2 border-white" : "",
                          ].join(" ")}
                        ></div>
                      </label>
                      <input
                        type="radio"
                        id="blue"
                        name="bgColor"
                        className="hidden"
                        onClick={() => setBgColor("blue")}
                      />
                    </div>
                    <div>
                      <label htmlFor="green">
                        <div
                          className={[
                            "w-12 h-12 rounded-lg bg-green-500",
                            bgColor === "green" ? "border-2 border-white" : "",
                          ].join(" ")}
                        ></div>
                      </label>
                      <input
                        type="radio"
                        id="green"
                        name="bgColor"
                        className="hidden"
                        onClick={() => setBgColor("green")}
                      />
                    </div>
                    <div>
                      <label htmlFor="yellow">
                        <div
                          className={[
                            "w-12 h-12 rounded-lg bg-yellow-500",
                            bgColor === "yellow" ? "border-2 border-white" : "",
                          ].join(" ")}
                        ></div>
                      </label>
                      <input
                        type="radio"
                        id="yellow"
                        name="bgColor"
                        className="hidden"
                        onClick={() => setBgColor("yellow")}
                      />
                    </div>
                    <div>
                      <label htmlFor="slate">
                        <div
                          className={[
                            "w-12 h-12 rounded-lg bg-slate-500",
                            bgColor === "slate" ? "border-2 border-white" : "",
                          ].join(" ")}
                        ></div>
                      </label>
                      <input
                        type="radio"
                        id="slate"
                        name="bgColor"
                        className="hidden"
                        onClick={() => setBgColor("slate")}
                      />
                    </div>
                    <div>
                      <label htmlFor="red">
                        <div
                          className={[
                            "w-12 h-12 rounded-lg bg-red-500",
                            bgColor === "red" ? "border-2 border-white" : "",
                          ].join(" ")}
                        ></div>
                      </label>
                      <input
                        type="radio"
                        id="red"
                        name="bgColor"
                        className="hidden"
                        onClick={() => setBgColor("red")}
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
              onClick={onAddCard}
            >
              취소하기
            </button>
            <button
              className="w-72 p-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600"
              onClick={onAddCard}
            >
              생성하기
            </button>
          </div>
        </div>
      </div>
      <div
        className={[
          "fixed top-0 w-full h-full bg-[rgba(0,0,0,0.8)] z-10",
          editCard ? "" : "hidden",
        ].join(" ")}
      >
        <div className="max-w-2xl bg-slate-600 mt-32 mx-auto p-8 rounded-xl shadow-2xl">
          <h3 className="text-xl font-bold text-white text-center">
            계획 수정하기
          </h3>
          <div className="grid grid-cols-2 items-center mt-8">
            <div className="ml-6">
              <div
                className={[
                  "flex flex-col w-56 h-80 rounded-xl shadow-2xl p-4 relative",
                  `bg-${bgColor}-500`,
                ].join(" ")}
              >
                <div className="flex justify-between items-center ">
                  <span className="text-xs text-white">{date}</span>
                  <div className="text-xs">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={
                          importance >= star ? "text-yellow-300" : "text-white"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-center text-lg font-bold text-white mt-4 break-words">
                  {title.length === 0 ? "무엇을 해야하나요?" : title}
                </div>
                <div className="text-white mt-4">
                  <div className="break-words">{todo}</div>
                </div>
                <div className="text-sm text-white mt-4 absolute bottom-2 right-4">
                  <div>{period}일 남음</div>
                </div>
              </div>
            </div>
            <div>
              <form className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <label className="text-white">제목</label>
                  <input
                    type="text"
                    className="px-2 py-1 border-none rounded-xl focus:outline-none"
                    value={title}
                    onChange={onTitleChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white">내용</label>
                  <input
                    type="text"
                    className="px-2 py-1 border-none rounded-xl focus:outline-none"
                    value={todo}
                    onChange={onToDoChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white">기간</label>
                  <input
                    type="date"
                    className="px-2 py-1 border-none rounded-xl focus:outline-none"
                    onChange={onPeriodChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white">중요도</label>
                  <div className="flex gap-1 text-xl">
                    <div>
                      <label
                        htmlFor="1"
                        className={
                          importance >= 1 ? "text-yellow-300" : "text-white"
                        }
                      >
                        ★
                      </label>
                      <input
                        type="radio"
                        id="1"
                        name="star"
                        className="hidden"
                        onClick={() => setImportance(1)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="2"
                        className={
                          importance >= 2 ? "text-yellow-300" : "text-white"
                        }
                      >
                        ★
                      </label>
                      <input
                        type="radio"
                        id="2"
                        name="star"
                        className="hidden"
                        onClick={() => setImportance(2)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="3"
                        className={
                          importance >= 3 ? "text-yellow-300" : "text-white"
                        }
                      >
                        ★
                      </label>
                      <input
                        type="radio"
                        id="3"
                        name="star"
                        className="hidden"
                        onClick={() => setImportance(3)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="4"
                        className={
                          importance >= 4 ? "text-yellow-300" : "text-white"
                        }
                      >
                        ★
                      </label>
                      <input
                        type="radio"
                        id="4"
                        name="star"
                        className="hidden"
                        onClick={() => setImportance(4)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="5"
                        className={
                          importance >= 5 ? "text-yellow-300" : "text-white"
                        }
                      >
                        ★
                      </label>
                      <input
                        type="radio"
                        id="5"
                        name="star"
                        className="hidden"
                        onClick={() => setImportance(5)}
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
                            bgColor === "blue" ? "border-2 border-white" : "",
                          ].join(" ")}
                        ></div>
                      </label>
                      <input
                        type="radio"
                        id="blue"
                        name="bgColor"
                        className="hidden"
                        onClick={() => setBgColor("blue")}
                      />
                    </div>
                    <div>
                      <label htmlFor="green">
                        <div
                          className={[
                            "w-12 h-12 rounded-lg bg-green-500",
                            bgColor === "green" ? "border-2 border-white" : "",
                          ].join(" ")}
                        ></div>
                      </label>
                      <input
                        type="radio"
                        id="green"
                        name="bgColor"
                        className="hidden"
                        onClick={() => setBgColor("green")}
                      />
                    </div>
                    <div>
                      <label htmlFor="yellow">
                        <div
                          className={[
                            "w-12 h-12 rounded-lg bg-yellow-500",
                            bgColor === "yellow" ? "border-2 border-white" : "",
                          ].join(" ")}
                        ></div>
                      </label>
                      <input
                        type="radio"
                        id="yellow"
                        name="bgColor"
                        className="hidden"
                        onClick={() => setBgColor("yellow")}
                      />
                    </div>
                    <div>
                      <label htmlFor="slate">
                        <div
                          className={[
                            "w-12 h-12 rounded-lg bg-slate-500",
                            bgColor === "slate" ? "border-2 border-white" : "",
                          ].join(" ")}
                        ></div>
                      </label>
                      <input
                        type="radio"
                        id="slate"
                        name="bgColor"
                        className="hidden"
                        onClick={() => setBgColor("slate")}
                      />
                    </div>
                    <div>
                      <label htmlFor="red">
                        <div
                          className={[
                            "w-12 h-12 rounded-lg bg-red-500",
                            bgColor === "red" ? "border-2 border-white" : "",
                          ].join(" ")}
                        ></div>
                      </label>
                      <input
                        type="radio"
                        id="red"
                        name="bgColor"
                        className="hidden"
                        onClick={() => setBgColor("red")}
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
              onClick={onEditCard}
            >
              취소하기
            </button>
            <button
              className="w-72 p-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600"
              onClick={onEditCard}
            >
              수정하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
