import Button from "@/components/Button";
import Input from "@/components/Input";
import BoxLayout from "@/components/BoxLayout";
import { useForm } from "react-hook-form";

interface PasswordChangeForm {
  password: string;
  newPassword: string;
  confirmPassword: string;
}

export default function PasswordChange() {
  const { register, handleSubmit } = useForm<PasswordChangeForm>();
  const onValid = (data: PasswordChangeForm) => {};
  return (
    <BoxLayout title="비밀번호 변경하기" canGoBack={true}>
      <form
        className="flex flex-col gap-3 px-8 mt-12"
        onSubmit={handleSubmit(onValid)}
      >
        <Input
          label="현재 비밀번호"
          type="password"
          register={register("password", { required: true })}
        />
        <Input
          label="새 비밀번호"
          type="password"
          register={register("newPassword", { required: true })}
        />
        <Input
          label="비밀번호 확인"
          type="password"
          register={register("confirmPassword", { required: true })}
        />
        <Button text="비밀번호 변경하기" color="blue" />
      </form>
    </BoxLayout>
  );
}
