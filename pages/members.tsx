import { useRouter } from "next/router";
import { useState } from "react";

export default function Members() {
  const router = useRouter();
  const [addMember, setAddMember] = useState(false);
  const [editName, setEditName] = useState(false);
  const [setting, setSetting] = useState(false);
  const [deleteMember, setDeleteMember] = useState(false);
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
            <h3 className="text-lg font-bold">구성원</h3>
          </div>
          <div
            className="justify-self-end cursor-pointer"
            onClick={() => setAddMember(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 hover:text-slate-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </div>
        <ul className="flex flex-col gap-2 p-4 ">
          <li className="flex justify-between px-8 py-6 border border-slate-500 bg-slate-200 shadow-sm rounded-xl  relative  ">
            <div>
              <span>김미연</span>
            </div>
            <div className="flex justify-center items-center gap-2">
              <div onClick={() => setEditName(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>
              </div>
              <div onClick={() => setSetting(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
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
              <div onClick={() => setDeleteMember(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div
        className={[
          "fixed top-0 w-full h-full bg-[rgba(0,0,0,0.8)] z-10",
          addMember ? "block" : "hidden",
        ].join(" ")}
      >
        <div className="flex flex-col max-w-md bg-slate-600 text-white  mt-64 mx-auto px-3 pt-3 pb-10 rounded-xl shadow-2xl">
          <div className="flex justify-end">
            <div className="cursor-pointer" onClick={() => setAddMember(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <div className="text-center mb-2">
            <span>구성원으로 추가 할 회원의 아이디를 검색해주세요.</span>
          </div>
          <form className="px-4">
            <input
              type="text"
              placeholder="아이디 검색"
              className="w-full px-4 py-2 text-black rounded-xl shadow-2xl focus:outline-none"
            />
          </form>
        </div>
      </div>
      <div
        className={[
          "fixed top-0 w-full h-full bg-[rgba(0,0,0,0.8)] z-10",
          editName ? "block" : "hidden",
        ].join(" ")}
      >
        <div className="flex flex-col max-w-md bg-slate-600 text-white  mt-64 mx-auto px-3 pt-3 pb-10 rounded-xl shadow-2xl">
          <div className="flex justify-end">
            <div className="cursor-pointer" onClick={() => setEditName(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <div className="text-center mb-2">
            <span>맴버의 이름을 변경해주세요.</span>
          </div>
          <form className="px-4">
            <input
              type="text"
              placeholder="변경할 이름"
              className="w-full px-4 py-2 text-black rounded-xl shadow-2xl focus:outline-none"
            />
          </form>
        </div>
      </div>
      <div
        className={[
          "fixed top-0 w-full h-full bg-[rgba(0,0,0,0.8)] z-10",
          setting ? "block" : "hidden",
        ].join(" ")}
      >
        <div className="flex flex-col max-w-md bg-slate-600 text-white  mt-64 mx-auto px-3 pt-3 pb-10 rounded-xl shadow-2xl">
          <div className="flex justify-end">
            <div className="cursor-pointer" onClick={() => setSetting(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <div className="text-center mb-8">
            <span>김미연님과 공유할 계획이 있나요?</span>
          </div>
          <form className="px-4">
            <div className="flex justify-between items-center px-2 ">
              <div>
                <h5>메인</h5>
              </div>
              <input type="checkbox" id="메인" className="hidden peer/plan" />
              <label
                htmlFor="메인"
                className="cursor-pointer border px-2 py-1 rounded-2xl text-gray-400 border-gray-400 peer-checked/plan:text-blue-500 peer-checked/plan:border-blue-500"
              >
                공유하기
              </label>
            </div>
          </form>
        </div>
      </div>
      <div
        className={[
          "fixed top-0 w-full h-full bg-[rgba(0,0,0,0.8)] z-10",
          deleteMember ? "block" : "hidden",
        ].join(" ")}
      >
        <div className="flex flex-col max-w-md bg-slate-600 text-white  mt-64 mx-auto px-3 pt-3 pb-10 rounded-xl shadow-2xl">
          <div className="text-center mt-4 mb-4">
            <span>정말 삭제하시겠습니까?</span>
          </div>
          <form className="flex justify-center gap-4">
            <input
              type="submit"
              value="취소하기"
              className="cursor-pointer px-4 py-1 rounded-2xl bg-slate-200 text-black hover:bg-slate-300"
            />
            <input
              type="submit"
              value="삭제하기"
              className="cursor-pointer px-4 py-1 rounded-2xl bg-red-500 hover:bg-red-600"
            />
          </form>
        </div>
      </div>
    </>
  );
}
