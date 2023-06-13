import AddCard from "@/components/AddCard";
import Card from "@/components/Card";
import EditCard from "@/components/EditCard";
import Popup from "@/components/Popuo";
import useDate from "@/libs/client/useDate";
import useUser from "@/libs/client/useUser";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const todos = [
  {
    id: "1",
    title: "점심 먹기",
    todo: "옥수수 스프 먹기",
    date: new Date(),
    period: 0,
    importance: 3,
    bgColor: "blue",
  },
  {
    id: "2",
    title: "점심 먹기",
    todo: "옥수수 스프 먹기",
    date: new Date(),
    period: 0,
    importance: 3,
    bgColor: "red",
  },
  {
    id: "3",
    title: "점심 먹기",
    todo: "옥수수 스프 먹기",
    date: new Date(),
    period: 0,
    importance: 3,
    bgColor: "slate",
  },
  {
    id: "4",
    title: "점심 먹기",
    todo: "옥수수 스프 먹기",
    date: new Date(),
    period: 0,
    importance: 3,
    bgColor: "green",
  },
  {
    id: "5",
    title: "점심 먹기",
    todo: "옥수수 스프 먹기",
    date: new Date(),
    period: 0,
    importance: 3,
    bgColor: "yellow",
  },
  {
    id: "6",
    title: "점심 먹기",
    todo: "옥수수 스프 먹기",
    date: new Date(),
    period: 0,
    importance: 3,
    bgColor: "yellow",
  },
];

export default function Home() {
  const router = useRouter();
  const [addCard, setAddCard] = useState(false);
  const [editCard, setEditCard] = useState(false);
  const [addList, setAddList] = useState(false);
  const [deleteList, setDeleteList] = useState(false);
  const [editList, setEditList] = useState(false);
  const [memberList, setMemberlist] = useState(false);
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState(useDate(new Date()));
  const [period, setPeriod] = useState(0);
  const [importance, setImportance] = useState(1);
  const [bgColor, setBgColor] = useState("blue");
  const { user } = useUser();
  console.log(user);
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
            <div className="self-end mb-4" onClick={() => setAddList(true)}>
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
                  <div onClick={() => setEditList(true)}>
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
                  <div onClick={() => setMemberlist(true)}>
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
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                  </div>
                  <div onClick={() => setDeleteList(true)}>
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
            <li
              className={
                router.pathname === "/"
                  ? "w-full bg-slate-500 text-center p-2 rounded-[20px] border border-white hover:text-slate-900"
                  : "text-center hover:text-slate-900"
              }
              onClick={() => router.push("/")}
            >
              계획
            </li>
            <li
              className={
                router.pathname === "/diary"
                  ? "w-full bg-slate-500 text-center p-2 rounded-[20px] border border-white hover:text-slate-900"
                  : "text-center hover:text-slate-900"
              }
              onClick={() => router.push("/diary")}
            >
              다이어리
            </li>
            <li
              className={
                router.pathname === "/memo"
                  ? "w-full bg-slate-500 text-center p-2 rounded-[20px] border border-white hover:text-slate-900"
                  : "text-center hover:text-slate-900"
              }
              onClick={() => router.push("/memo")}
            >
              메모
            </li>
          </ul>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(14rem,max-content))] justify-center gap-8">
            {todos.map((todo) => (
              <Card
                key={todo.id}
                id={todo.id}
                title={todo.title}
                contents={todo.todo}
                date={todo.date}
                period={todo.period}
                importance={todo.importance}
                bgColor={todo.bgColor}
                onEditCard={onEditCard}
              />
            ))}
            <div
              className="flex justify-center items-center w-full max-w-[14rem] h-80 rounded-xl border border-dashed text-white hover:scale-105"
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
      {/* 카드 추가하기 */}
      {addCard ? (
        <AddCard
          title={title}
          contents={todo}
          date={date}
          period={period}
          importance={importance}
          bgColor={bgColor}
          onTitleChange={onTitleChange}
          onToDoChange={onToDoChange}
          onPeriodChange={onPeriodChange}
          setImportance={setImportance}
          setBgColor={setBgColor}
          onAddCard={onAddCard}
        />
      ) : null}
      {/* 카드 수정하기 */}
      {editCard ? (
        <EditCard
          title={title}
          contents={todo}
          date={date}
          period={period}
          importance={importance}
          bgColor={bgColor}
          onTitleChange={onTitleChange}
          onContentsChange={onToDoChange}
          onPeriodChange={onPeriodChange}
          setImportance={setImportance}
          setBgColor={setBgColor}
          onEditCard={onEditCard}
        />
      ) : null}
      {/* 리스트 추가하기 */}
      {addList ? <Popup setAddList={setAddList} /> : null}
      {/* 리스트 이름 수정하기 */}
      {editList ? <Popup setEditList={setEditList} kind="edit" /> : null}
      {/* 리스트 삭제하기 */}
      {deleteList ? <Popup kind="delete" /> : null}
      {/* 리스트 맴버 관리 */}
      {memberList ? (
        <Popup setMemberlist={setMemberlist} kind="member" />
      ) : null}
    </div>
  );
}
