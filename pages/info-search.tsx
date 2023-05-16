import { useRouter } from "next/router";
import { useState } from "react";

export default function Members() {
  const router = useRouter();
  const [find, setFind] = useState<"id" | "password">("id");
  return (
    <>
      <div className="w-full max-w-lg min-h-[500px] bg-slate-300 mt-16 mx-auto rounded-2xl shadow-2xl">
        <div className="grid grid-cols-4 items-center bg-blue-500 text-white rounded-t-2xl px-6 py-4">
          <div onClick={() => router.back()} className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 hover:text-slate-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
          </div>
          <div className="col-start-2 col-end-4 justify-self-center">
            <h3 className="text-lg font-bold">아이디 / 비밀번호 찾기</h3>
          </div>
        </div>
        <div>
          <ul className="grid grid-cols-2 items-center bg-slate-500 text-white uppercase text-xs mx-32 mt-12 rounded-2xl shadow-md">
            <li
              className={[
                "block text-center w-full py-2",
                find === "id" ? "bg-slate-600 rounded-2xl border-2" : "",
              ].join(" ")}
              onClick={() => setFind("id")}
            >
              id
            </li>
            <li
              className={[
                "block text-center w-full py-2",
                find === "password" ? "bg-slate-600 rounded-2xl border-2" : "",
              ].join(" ")}
              onClick={() => setFind("password")}
            >
              password
            </li>
          </ul>
        </div>
        {find === "id" ? (
          <form className="flex flex-col gap-3 px-8 py-12">
            <div className="relative flex items-center">
              <div className="absolute left-4">
                <span className="text-gray-500">이메일</span>
              </div>
              <input
                type="email"
                className="w-full px-28 py-2 border placeholder-gray-400 rounded-2xl shadow-md focus:outline-none"
                required
              />
            </div>
            <div className="relative flex items-center">
              <div className="absolute left-4">
                <span className="text-gray-500">이름</span>
              </div>
              <input
                type="text"
                className="w-full px-28 py-2 border placeholder-gray-400 rounded-2xl shadow-md focus:outline-none"
                required
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-2xl shadow-md py-3">
              아이디 찾기
            </button>
          </form>
        ) : (
          <form className="flex flex-col gap-3 px-8 py-12">
            <div className="relative flex items-center">
              <div className="absolute left-4">
                <span className="text-gray-500">아이디</span>
              </div>
              <input
                type="text"
                className="w-full px-28 py-2 border placeholder-gray-400 rounded-2xl shadow-md focus:outline-none"
                required
              />
            </div>
            <div className="relative flex items-center">
              <div className="absolute left-4">
                <span className="text-gray-500">이메일</span>
              </div>
              <input
                type="email"
                className="w-full px-28 py-2 border placeholder-gray-400 rounded-2xl shadow-md focus:outline-none"
                required
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-2xl shadow-md py-3">
              비밀번호 찾기
            </button>
          </form>
        )}
      </div>
    </>
  );
}
