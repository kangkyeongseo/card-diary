import Button from "@/components/Button";
import Input from "@/components/Input";
import BoxLayout from "@/components/BoxLayout";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "@/components/ErrorMessage";
import Popup from "@/components/Popup";

interface AuthSearchForm {
  email: string;
  userName?: string;
  userId?: string;
}

export default function Members() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<AuthSearchForm>();
  const [title, setTitle] = useState("아이디 찾기");
  const [find, setFind] = useState<"id" | "password">("id");
  const [searchedId, setSearchedId] = useState("");
  const [isPersonalInformationPopup, setIsPersonalInformationPopup] =
    useState(false);

  const onValid = (data: AuthSearchForm) => {
    if (find === "id") {
      fetch("/api/users/search?type=id", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((json) => {
          if (!json.ok && json.errorMessage === "email") {
            setError(
              "email",
              { message: "이메일과 일치하는 아이디가 존재하지 않습니다" },
              { shouldFocus: true }
            );
          } else if (!json.ok && json.errorMessage === "userName") {
            setError(
              "userName",
              { message: "이름이 일치하지 않습니다." },
              { shouldFocus: true }
            );
          } else if (json.ok) {
            setSearchedId(json.userId);
            setIsPersonalInformationPopup(true);
          }
        });
    }
    if (find === "password") {
      fetch("/api/users/search?type=password", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((json) => {
          if (!json.ok && json.errorMessage === "userId") {
            setError(
              "userId",
              { message: "아이디가 존재하지 않습니다" },
              { shouldFocus: true }
            );
          } else if (!json.ok && json.errorMessage === "email") {
            setError(
              "email",
              { message: "이메일이 일치하지 않습니다." },
              { shouldFocus: true }
            );
          } else if (json.ok) {
            console.log(json);
          }
        });
    }
  };
  return (
    <>
      <BoxLayout title={title} canGoBack={true}>
        <div>
          <ul className="max-w-xs grid grid-cols-2 items-center bg-slate-500 text-white uppercase text-xs mx-auto mt-12 rounded-2xl shadow-md">
            <li
              className={[
                "block text-center w-full py-2",
                find === "id" ? "bg-slate-600 rounded-2xl border-2" : "",
              ].join(" ")}
              onClick={() => {
                setTitle("아이디 찾기");
                setFind("id");
              }}
            >
              id
            </li>
            <li
              className={[
                "block text-center w-full py-2",
                find === "password" ? "bg-slate-600 rounded-2xl border-2" : "",
              ].join(" ")}
              onClick={() => {
                setTitle("비밀번호 찾기");
                setFind("password");
              }}
            >
              password
            </li>
          </ul>
        </div>
        <form
          className="flex flex-col gap-3 px-8 py-12"
          onSubmit={handleSubmit(onValid)}
        >
          {find === "id" ? (
            <>
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
              <Button text={title} bgColor="bg-blue-500 hover:bg-blue-600" />
            </>
          ) : find === "password" ? (
            <>
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
              <Button text={title} bgColor="bg-blue-500 hover:bg-blue-600" />
            </>
          ) : null}
          <ErrorMessage>
            {errors.userId?.message}
            {errors.email?.message}
            {errors.userName?.message}
          </ErrorMessage>
        </form>
      </BoxLayout>
      {isPersonalInformationPopup && (
        <Popup
          kind="personalInformation"
          setIsPersonalInformationPopup={setIsPersonalInformationPopup}
          searchedId={searchedId}
        />
      )}
    </>
  );
}
