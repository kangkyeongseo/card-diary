import Button from "@/components/Button";
import Input from "@/components/Input";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface NameChangeForm {
  userName: string;
}

export default function NameChange() {
  const { register, handleSubmit } = useForm<NameChangeForm>();
  const onValid = (data: NameChangeForm) => {};
  return (
    <Layout title="닉네임 변경" canGoBack={true}>
      <form
        className="flex flex-col gap-3 px-8 mt-12"
        onSubmit={handleSubmit(onValid)}
      >
        <Input
          label="닉네임"
          type="text"
          register={register("userName", { required: true })}
        />
        <Button text="닉네임 변경하기" color="blue" />
      </form>
    </Layout>
  );
}
