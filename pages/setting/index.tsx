import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Setting() {
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
            <h3 className="text-lg font-bold">설정</h3>
          </div>
        </div>
        <div className="text-center font-bold text-xl mt-12">
          <h5>안녕하세요, 이름</h5>
        </div>
        <ul className="flex flex-col justify-center items-center  gap-2 mt-8 text-gray-700">
          <li className="cursor-pointer hover:text-gray-900">
            <Link href={"/setting/name-change"}>닉네임 변경</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-900">
            <Link href={"/setting/password-change"}>비밀번호 변경</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-900">로그아웃</li>
        </ul>
      </div>
    </>
  );
}
