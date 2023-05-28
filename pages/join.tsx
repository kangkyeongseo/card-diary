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
  const { register, handleSubmit } = useForm<JoinForm>();
  const onValid = (data: JoinForm) => {
    console.log(data);
  };
  return (
    <>
      <div className="w-full max-w-lg min-h-[500px] bg-slate-300 mt-16 mx-auto rounded-2xl shadow-2xl">
        <div className="grid grid-cols-3 items-center bg-blue-500 text-white rounded-t-2xl px-6 py-4">
          <div onClick={() => router.back()} className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 hover:text-slate-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
          </div>
          <div className="justify-self-center">
            <h3 className="text-lg font-bold">가입하기</h3>
          </div>
        </div>
        <form
          className="flex flex-col gap-3 px-8 py-12"
          onSubmit={handleSubmit(onValid)}
        >
          <div className="relative flex items-center">
            <div className="absolute left-4">
              <span className="text-gray-500">아이디</span>
            </div>
            <input
              {...register("userId", { required: true })}
              type="text"
              className="w-full px-28 py-2 border placeholder-gray-400 rounded-2xl shadow-md focus:outline-none"
            />
          </div>
          <div className="relative flex items-center">
            <div className="absolute left-4">
              <span className="text-gray-500">이메일</span>
            </div>
            <input
              {...register("email", { required: true })}
              type="email"
              className="w-full px-28 py-2 border placeholder-gray-400 rounded-2xl shadow-md focus:outline-none"
            />
          </div>
          <div className="relative flex items-center">
            <div className="absolute left-4">
              <span className="text-gray-500">이름</span>
            </div>
            <input
              {...register("userName", { required: true })}
              type="text"
              className="w-full px-28 py-2 border placeholder-gray-400 rounded-2xl shadow-md focus:outline-none"
            />
          </div>
          <div className="relative flex items-center">
            <div className="absolute left-4">
              <span className="text-gray-500">비밀번호</span>
            </div>
            <input
              {...register("password", { required: true })}
              type="password"
              className="w-full px-28 py-2 border placeholder-gray-400 rounded-2xl shadow-md focus:outline-none"
            />
          </div>
          <div className="relative flex items-center">
            <div className="absolute left-4">
              <span className="text-gray-500">비밀번호 확인</span>
            </div>
            <input
              {...register("confirmPassword", { required: true })}
              type="password"
              className="w-full px-28 py-2 border placeholder-gray-400 rounded-2xl shadow-md focus:outline-none"
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-2xl shadow-md py-3">
            가입하기
          </button>
        </form>
      </div>
    </>
  );
}
