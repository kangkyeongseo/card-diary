import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";
import Input from "@/components/Input";
import BoxLayout from "@/components/BoxLayout";

interface NameChangeForm {
  userName: string;
}

export default function NameChange() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<NameChangeForm>();
  const onValid = (data: NameChangeForm) => {
    fetch("/api/users/me?type=name", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.ok) {
          router.push("/");
        }
      });
  };
  return (
    <BoxLayout title="닉네임 변경" canGoBack={true}>
      <form
        className="flex flex-col gap-3 px-8 mt-12"
        onSubmit={handleSubmit(onValid)}
      >
        <Input
          label="닉네임"
          type="text"
          register={register("userName", { required: true })}
        />
        <Button
          text="닉네임 변경하기"
          bgColor="bg-blue-500 hover:bg-blue-600"
        />
      </form>
    </BoxLayout>
  );
}
