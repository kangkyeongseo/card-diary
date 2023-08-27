interface PopupProp {
  setAddList?: (value: React.SetStateAction<boolean>) => void;
  setEditList?: (value: React.SetStateAction<boolean>) => void;
  setMemberlist?: (value: React.SetStateAction<boolean>) => void;
  setAddChildList?: (value: React.SetStateAction<boolean>) => void;
  childList?: boolean;
  memberList?: boolean;
  kind?: "add" | "edit" | "delete" | "member";
}

export default function Popup({
  setAddList,
  setEditList,
  setMemberlist,
  setAddChildList,
  childList,
  memberList,
  kind = "add",
}: PopupProp) {
  return (
    <div className="fixed top-0 w-full h-full bg-[rgba(0,0,0,0.8)] z-10">
      {kind === "add" ? (
        <div className="flex flex-col max-w-md bg-slate-600 text-white  mt-64 mx-auto px-3 pt-3 pb-10 rounded-xl shadow-2xl">
          <div className="flex justify-end">
            <div
              className="cursor-pointer"
              onClick={
                childList
                  ? () => setAddChildList!(false)
                  : () => setAddList!(false)
              }
            >
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
            <span>
              {childList
                ? "하위 항목을 생성하세요."
                : memberList
                ? "새로운 맴버를 추가해주세요."
                : "새로운 리스트의 이름을 적어주세요."}
            </span>
          </div>
          <form className="px-4">
            <input
              type="text"
              placeholder={
                childList
                  ? "하위 항목 이름"
                  : memberList
                  ? "아이디 검색"
                  : "새로운 리스트"
              }
              className="w-full px-4 py-2 text-black rounded-xl shadow-2xl focus:outline-none"
            />
          </form>
        </div>
      ) : null}
      {kind === "edit" ? (
        <div className="flex flex-col max-w-md bg-slate-600 text-white  mt-64 mx-auto px-3 pt-3 pb-10 rounded-xl shadow-2xl">
          <div className="flex justify-end">
            <div className="cursor-pointer" onClick={() => setEditList!(false)}>
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
            <span>
              {memberList
                ? "맴버의 이름을 변경해주세요."
                : "리스트의 이름을 변경해주세요."}
            </span>
          </div>
          <form className="px-4">
            <input
              type="text"
              placeholder="변경할 이름"
              className="w-full px-4 py-2 text-black rounded-xl shadow-2xl focus:outline-none"
            />
          </form>
        </div>
      ) : null}
      {kind === "delete" ? (
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
      ) : null}
      {kind === "member" ? (
        <div className="flex flex-col max-w-md bg-slate-600 text-white  mt-64 mx-auto px-3 pt-3 pb-10 rounded-xl shadow-2xl">
          <div className="flex justify-end">
            <div
              className="cursor-pointer"
              onClick={() => setMemberlist!(false)}
            >
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
            <span>리스트를 맴버와 공유하세요.</span>
          </div>
          <form className="px-4">
            <div className="flex justify-between items-center px-2 ">
              <div>
                <h5>김미연</h5>
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
      ) : null}
    </div>
  );
}
