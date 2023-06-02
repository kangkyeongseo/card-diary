import Button from "@/components/Button";
import Input from "@/components/Input";
import Layout from "@/components/Layout";
import { useForm } from "react-hook-form";

interface JoinForm {
  userId: string;
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
}

export default function Members() {
  const { register, handleSubmit } = useForm<JoinForm>();
  const onValid = (data: JoinForm) => {
    console.log(data);
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
      </form>
    </Layout>
  );
}
