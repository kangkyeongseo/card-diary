import Button from "@/components/Button";
import Input from "@/components/Input";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

interface JoinForm {
  userId: string;
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
}

export default function Members() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<JoinForm>();
  const onValid = (data: JoinForm) => {
    fetch("/api/users/join", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.ok === true) {
          router.push("/enter");
        }
        if (json.ok === false && json.error === "userId") {
          setError(
            "userId",
            { message: "이미 사용중인 아이디 입니다." },
            { shouldFocus: true }
          );
        }
        if (json.ok === false && json.error === "email") {
          setError(
            "email",
            { message: "이미 사용중인 이메일 입니다." },
            { shouldFocus: true }
          );
        }
      });
  };
  return (
    <Layout title="가입하기" canGoBack={true}>
      <form
        className="flex flex-col gap-3 px-8 py-12"
        onSubmit={handleSubmit(onValid)}
      >
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
        <Input
          label="이름"
          type="text"
          register={register("userName", { required: true })}
        />
        <Input
          label="비밀번호"
          type="password"
          register={register("password", { required: true })}
        />
        <Input
          label="비밀번호 확인"
          type="password"
          register={register("confirmPassword", { required: true })}
        />
        <Button text="가입하기" color="blue" />
        <span className="text-center text-red-500">
          {errors.userId?.message}
        </span>
        <span className="text-center text-red-500">
          {errors.email?.message}
        </span>
      </form>
    </Layout>
  );
}
