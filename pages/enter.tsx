import Input from "@/components/Input";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

interface LoginForm {
  userId: string;
  password: string;
}

export default function Members() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<LoginForm>();
  const onVaild = (data: LoginForm) => {
    console.log(data);
    router.push("/");
  };
  return (
    <>
      <div className="w-full max-w-lg min-h-[500px] bg-slate-300 mt-16 mx-auto rounded-2xl shadow-2xl">
        <div className="grid justify-center items-center bg-blue-500 text-white rounded-t-2xl px-6 py-4">
          <div>
            <h3 className="text-lg font-bold">로그인</h3>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-8">
          <form
            className="flex flex-col gap-3 pt-12"
            onSubmit={handleSubmit(onVaild)}
          >
            <Input
              label="아이디"
              type="string"
              register={register("userId", { required: true })}
            />
            <div className="relative flex items-center">
              <div className="absolute left-4">
                <span className="text-gray-500">비밀번호</span>
              </div>
              <input
                {...register("password", { required: true })}
                type="password"
                className="w-full px-28 py-2 border placeholder-gray-400 rounded-2xl shadow-md focus:outline-none"
                required
              />
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-2xl shadow-md py-3">
              가입하기
            </button>
          </form>
          <button
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white rounded-2xl shadow-md py-3"
            onClick={() => router.push("/join")}
          >
            가입하기
          </button>
          <button
            className="w-full bg-slate-500 hover:bg-slate-600 text-white rounded-2xl shadow-md py-3"
            onClick={() => router.push("/info-search")}
          >
            아이디 / 비밀번호 찾기
          </button>
        </div>
      </div>
    </>
  );
}
