import { useState } from "react";
import Link from "next/link";
import Popup from "../../Popup/Popup";

interface ListProp {
  id: number;
  title: string;
  selected: boolean;
}

export default function SideBarTodoList({ id, title, selected }: ListProp) {
  const [isDeleteListPopup, setIsDeleteListPopup] = useState(false);
  const [isEditListPopup, setIsEditListPopup] = useState(false);
  const [isMemberListPopup, setIsMemberListPopup] = useState(false);
  return (
    <>
      <li className="flex justify-between group/list">
        <Link href={`/?list=${id}`}>
          <span className={selected ? "font-bold" : "font-light"}>{title}</span>
        </Link>
        <div className="hidden group-hover/list:flex items-center gap-2 ">
          <div onClick={() => setIsEditListPopup(true)}>
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
          {/* <div onClick={() => setIsMemberListPopup(true)}>
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
          </div> */}
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
          <Link href={`/todo/add-card?list=${id}`}>
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

      {isEditListPopup && (
        <Popup
          kind="edit"
          listType="todo"
          id={id}
          title={title}
          setIsPopup={setIsEditListPopup}
        />
      )}
      {isDeleteListPopup && (
        <Popup
          kind="delete"
          listType="todo"
          id={id}
          title={title}
          setIsPopup={setIsDeleteListPopup}
        />
      )}
      {isMemberListPopup && (
        <Popup
          kind="member"
          listType="todo"
          setIsPopup={setIsMemberListPopup}
        />
      )}
    </>
  );
}
