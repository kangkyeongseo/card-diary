import Button from "@/components/Button";
import Input from "@/components/Input";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

interface LoginForm {
  userId: string;
  password: string;
}

export default function Members() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<LoginForm>();
  const onVaild = (data: LoginForm) => {
    console.log(data);
    router.push("/");
  };
  return (
    <Layout title="로그인">
      <form
        className="flex flex-col gap-3 px-8 py-12"
        onSubmit={handleSubmit(onVaild)}
      >
        <Input
          label="아이디"
          type="string"
          register={register("userId", { required: true })}
        />
        <Input
          label="비밀번호"
          type="password"
          register={register("password", { required: true })}
        />
        <Button color="blue" text="로그인" />
        <button
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white rounded-2xl shadow-md py-3"
          onClick={() => router.push("/join")}
        >
          가입하기
        </button>
        <button
          className="w-full bg-slate-500 hover:bg-slate-600 text-white rounded-2xl shadow-md py-3"
          onClick={() => router.push("/info-search")}
        >
          아이디 / 비밀번호 찾기
        </button>
      </form>
    </Layout>
  );
}
