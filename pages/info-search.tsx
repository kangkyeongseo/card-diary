import Button from "@/components/Button";
import Input from "@/components/Input";
import BoxLayout from "@/components/BoxLayout";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface InfoSearchForm {
  email: string;
  userName?: string;
  userId?: string;
}

export default function Members() {
  const { register, handleSubmit } = useForm<InfoSearchForm>();
  const [title, setTitle] = useState("아이디 찾기");
  const [find, setFind] = useState<"id" | "password">("id");
  const onValid = (data: InfoSearchForm) => {
    console.log(data);
  };
  return (
    <BoxLayout title={title} canGoBack={true}>
      <div>
        <ul className="grid grid-cols-2 items-center bg-slate-500 text-white uppercase text-xs mx-32 mt-12 rounded-2xl shadow-md">
          <li
            className={[
              "block text-center w-full py-2",
              find === "id" ? "bg-slate-600 rounded-2xl border-2" : "",
            ].join(" ")}
            onClick={() => {
              setTitle("아이디 찾기");
              setFind("id");
            }}
          >
            id
          </li>
          <li
            className={[
              "block text-center w-full py-2",
              find === "password" ? "bg-slate-600 rounded-2xl border-2" : "",
            ].join(" ")}
            onClick={() => {
              setTitle("비밀번호 찾기");
              setFind("password");
            }}
          >
            password
          </li>
        </ul>
      </div>
      <form
        className="flex flex-col gap-3 px-8 py-12"
        onSubmit={handleSubmit(onValid)}
      >
        {find === "id" ? (
          <>
            <Input
              label="이메일"
              type="email"
              register={register("email", { required: true })}
            />
            <Input
              label="이름"
              type="text"
              register={register("userName", { required: true })}
            />
            <Button text={title} color="blue" />
          </>
        ) : find === "password" ? (
          <>
            <Input
              label="아이디"
              type="text"
              register={register("userId", { required: true })}
            />
            <Input
              label="이메일"
              type="email"
              register={register("email", { required: true })}
            />
            <Button text={title} color="blue" />
          </>
        ) : null}
      </form>
    </BoxLayout>
  );
}
