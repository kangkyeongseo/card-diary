import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";
import Input from "@/components/Input";
import BoxLayout from "@/components/BoxLayout";

interface LoginForm {
  userId: string;
  password: string;
}

export default function Enter() {
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
        if (json.ok === false && json.errorMessage === "userId") {
          setError(
            "userId",
            { message: "존재하지 않는 아이디입니다." },
            { shouldFocus: true }
          );
        }
        if (json.ok === false && json.errorMessage === "password") {
          setError(
            "password",
            { message: "비밀번호가 일치하지 않습니다." },
            { shouldFocus: true }
          );
        }
      });
  };
  return (
    <BoxLayout title="로그인">
      <form
        className="flex flex-col gap-3 px-8 pt-12"
        onSubmit={handleSubmit(onVaild)}
      >
        <Input
          label="아이디"
          type="string"
          register={register("userId", { required: "아이디를 입력해 주세요." })}
        />
        <Input
          label="비밀번호"
          type="password"
          register={register("password", {
            required: "비밀번호를 입력해 주세요.",
          })}
        />
        <Button bgColor="bg-blue-500 hover:bg-blue-600" text="로그인" />
      </form>
      <div className="flex flex-col gap-3 px-8 pt-3">
        <Button
          bgColor="bg-indigo-500 hover:bg-indigo-600"
          text="가입하기"
          onClick={() => router.push("/join")}
        />
        <Button
          bgColor="bg-slate-500 hover:bg-slate-600"
          text="아이디 / 비밀번호 찾기"
          onClick={() => router.push("/info-search")}
        />
        <div className="flex flex-col">
          <span className="text-center text-red-500">
            {errors.userId?.message}
          </span>
          <span className="text-center text-red-500">
            {errors.password?.message}
          </span>
        </div>
      </div>
    </BoxLayout>
  );
}
