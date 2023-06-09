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
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginForm>();
  const onVaild = (data: LoginForm) => {
    fetch("/api/users/enter", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.ok === true) {
          router.push("/");
        }
        if (json.ok === false && json.error === "userId") {
          setError(
            "userId",
            { message: "존재하지 않는 아이디입니다." },
            { shouldFocus: true }
          );
        }
        if (json.ok === false && json.error === "password") {
          setError(
            "password",
            { message: "비밀번호가 일치하지 않습니다." },
            { shouldFocus: true }
          );
        }
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
        <span className="text-center text-red-500">
          {errors.userId?.message}
        </span>
        <span className="text-center text-red-500">
          {errors.password?.message}
        </span>
      </form>
    </Layout>
  );
}
