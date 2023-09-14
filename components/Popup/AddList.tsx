import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { useSWRConfig } from "swr";
import Input from "../Input";
import Button from "../Button";

interface AddListProp {
  listType: string;
  setIsPopup: Dispatch<SetStateAction<boolean>>;
}

interface AddListForm {
  title: string;
}

export default function AddList({ listType, setIsPopup }: AddListProp) {
  const { mutate } = useSWRConfig();
  const { register, handleSubmit } = useForm<AddListForm>();
  const onValid = (data: AddListForm) => {
    fetch(`/api/${listType}/list`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.ok) {
          mutate(`/api/${listType}/list`);
          setIsPopup(false);
        } else if (!json.ok) {
          console.log(json.error);
        }
      });
  };
  return (
    <div className="flex flex-col max-w-md bg-slate-600 text-white  mt-64 mx-auto px-3 pt-3 pb-10 rounded-xl shadow-2xl">
      <div className="flex justify-end">
        <div className="cursor-pointer" onClick={() => setIsPopup(false)}>
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
        <span>새로운 리스트의 이름을 적어주세요.</span>
      </div>
      <form
        className="flex flex-col gap-3 px-4 text-black"
        onSubmit={handleSubmit(onValid)}
      >
        <Input
          register={register("title", { required: true })}
          type="text"
          placeholder="새로운 리스트"
        />
        <Button text="추가하기" bgColor="bg-blue-500 hover:bg-blue-600" />
      </form>
    </div>
  );
}
