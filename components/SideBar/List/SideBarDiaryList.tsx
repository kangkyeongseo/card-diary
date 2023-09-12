import { useState } from "react";
import Link from "next/link";
import Popup from "../../Popup/Popup";

interface DiaryListProp {
  id: number;
  title: string;
}

export default function SideBarDiaryList({ id, title }: DiaryListProp) {
  const [isDeleteListPopup, setIsDeleteListPopup] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <>
      <li className="flex flex-col group/list">
        <div className="w-full flex justify-between ">
          <div className="flex gap-1 items-center">
            <div onClick={() => setShow((pre) => !pre)}>
              {show ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </div>
            <span>{title}</span>
          </div>
          <div className="hidden group-hover/list:flex items-center gap-2 ">
            <div onClick={() => setIsDeleteListPopup(true)}>
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
          </div>
        </div>
        <ul
          className={[
            "flex-col gap-1 opacity-70 pt-2 pl-4",
            show ? "flex" : "hidden",
          ].join(" ")}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => (
            <li className="w-full flex justify-between group/datelist">
              <span>{month}월</span>
              <div className="hidden group-hover/datelist:flex items-center gap-1 ">
                <Link href={"/diary/add-card"}>
                  <div>
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
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </li>

      {isDeleteListPopup && (
        <Popup
          kind="delete"
          id={id}
          title={title}
          setIsPopup={setIsDeleteListPopup}
        />
      )}
    </>
  );
}
