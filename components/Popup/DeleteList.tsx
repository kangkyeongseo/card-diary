import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { useSWRConfig } from "swr";
import Input from "../Input";
import Button from "../Button";

interface DeleteListProp {
  id: number;
  title: string;
  setIsPopup: Dispatch<SetStateAction<boolean>>;
}

export default function DeleteList({ id, title, setIsPopup }: DeleteListProp) {
  const { mutate } = useSWRConfig();
  const handleDeleteBtn = () => {
    fetch(`/api/todo/list/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.ok) {
          mutate("/api/todo/list");
          setIsPopup(false);
        } else if (!json.ok) {
          console.log(json);
        }
      });
  };
  return (
    <div className="flex flex-col max-w-md bg-slate-600 text-white  mt-64 mx-auto px-3 pt-3 pb-10 rounded-xl shadow-2xl">
      <div className="text-center mt-4 mb-4">
        <span>"{title}" 리스트를 정말 삭제하시겠습니까?</span>
      </div>
      <div className="flex justify-center mx-10 gap-4">
        <Button
          text="취소하기"
          bgColor="bg-blue-500 hover:bg-blue-600"
          onClick={() => setIsPopup(false)}
        />
        <Button
          text="삭제하기"
          bgColor="bg-red-500 hover:bg-red-600"
          onClick={handleDeleteBtn}
        />
      </div>
    </div>
  );
}
