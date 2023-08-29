import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { useSWRConfig } from "swr";
import Input from "../Input";
import Button from "../Button";

interface EditListProp {
  id: number;
  title: string;
  setIsPopup: Dispatch<SetStateAction<boolean>>;
}

interface EditListForm {
  title: string;
}
export default function EditList({ id, title, setIsPopup }: EditListProp) {
  const { mutate } = useSWRConfig();
  const { register, handleSubmit } = useForm<EditListForm>({
    defaultValues: { title },
  });
  const onValid = (data: EditListForm) => {
    fetch(`/api/todo/list/${id}`, {
      method: "POST",
      body: JSON.stringify(data),
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
        <span>리스트의 이름을 변경해주세요.</span>
      </div>
      <form
        onSubmit={handleSubmit(onValid)}
        className="flex flex-col gap-3 px-4 text-black"
      >
        <Input
          register={register("title", { required: true })}
          type="text"
          placeholder="변경할 이름"
        />
        <Button text="변경하기" bgColor="bg-blue-500 hover:bg-blue-600" />
      </form>
    </div>
  );
}
