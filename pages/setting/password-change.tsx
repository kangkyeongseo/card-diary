import { useRouter } from "next/router";
import { useState } from "react";

export default function PasswordChange() {
  const router = useRouter();
  return (
    <>
      <div className="w-full max-w-lg min-h-[500px] bg-slate-300 mt-16 mx-auto rounded-2xl shadow-2xl">
        <div className="grid grid-cols-3 items-center bg-blue-500 text-white rounded-t-2xl px-6 py-4">
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
          <div className="justify-self-center">
            <h3 className="text-lg font-bold">비밀번호 변경</h3>
          </div>
        </div>
        <form className="flex flex-col gap-3 px-8 mt-12">
          <div className="relative flex items-center">
            <div className="absolute left-4">
              <span className="text-gray-500">현재 비밀번호</span>
            </div>
            <input
              type="password"
              className="w-full px-28 py-2 border placeholder-gray-400 rounded-2xl shadow-md focus:outline-none"
              required
            />
          </div>
          <div className="relative flex items-center">
            <div className="absolute left-4">
              <span className="text-gray-500">새 비밀번호</span>
            </div>
            <input
              type="password"
              className="w-full px-28 py-2 border placeholder-gray-400 rounded-2xl shadow-md focus:outline-none"
              required
            />
          </div>
          <div className="relative flex items-center">
            <div className="absolute left-4">
              <span className="text-gray-500">비밀번호 확인</span>
            </div>
            <input
              type="password"
              className="w-full px-28 py-2 border placeholder-gray-400 rounded-2xl shadow-md focus:outline-none"
              required
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-2xl shadow-md py-3">
            비밀번호 변경하기
          </button>
        </form>
      </div>
    </>
  );
}
