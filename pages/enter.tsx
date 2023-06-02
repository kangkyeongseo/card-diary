import Button from "@/components/Button";
import Input from "@/components/Input";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { json } from "stream/consumers";

interface LoginForm {
  userId: string;
  password: string;
}

export default function Members() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<LoginForm>();
  const onVaild = (data: LoginForm) => {
    fetch("/api/users/enter", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
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
        <Button
          color="indigo"
          text="가입하기"
          onClick={() => router.push("/join")}
        />
        <Button
          color="slate"
          text="아이디 / 비밀번호 찾기"
          onClick={() => router.push("/info-search")}
        />
      </form>
    </Layout>
  );
}
