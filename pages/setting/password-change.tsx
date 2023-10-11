import { useRouter } from "next/router";
import { set, useForm } from "react-hook-form";
import Button from "@/components/Button";
import Input from "@/components/Input";
import BoxLayout from "@/components/BoxLayout";

interface PasswordChangeForm {
  password: string;
  newPassword: string;
  confirmPassword: string;
}

export default function PasswordChange() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<PasswordChangeForm>();
  const onValid = (data: PasswordChangeForm) => {
    if (data.newPassword !== data.confirmPassword) {
      setError(
        "newPassword",
        { message: "비밀번호가 일치하지 않습니다." },
        { shouldFocus: true }
      );
    } else {
      fetch("/api/users/me?type=password", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((json) => {
          if (!json.ok) {
            setError(
              "password",
              { message: "비밀번호가 맞지 않습니다." },
              { shouldFocus: true }
            );
          } else {
            router.push("/");
          }
        });
    }
  };
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
        <Button
          text="비밀번호 변경하기"
          bgColor="bg-blue-500 hover:bg-blue-600"
        />
        <span className="text-center text-red-500">
          {errors.password?.message}
        </span>
        <span className="text-center text-red-500">
          {errors.newPassword?.message}
        </span>
      </form>
    </BoxLayout>
  );
}
