import Link from "next/link";
import { useRouter } from "next/router";

export default function Enter() {
  const router = useRouter();
  const onLogin = () => {
    router.push("/");
  };
  return (
    <div className="max-w-md mx-auto mt-16 px-4">
      <h3 className="text-3xl text-center font-bold text-white uppercase">
        card diary
      </h3>
      <form className="flex flex-col mt-8 space-y-4">
        <input
          type="text"
          placeholder="ID"
          className="px-4 py-2 border placeholder-gray-400 rounded-md shadow-sm focus:outline-none"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-2 border placeholder-gray-400 rounded-md shadow-sm focus:outline-none"
          required
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow-sm py-3"
          onClick={onLogin}
        >
          Login
        </button>
      </form>
      <div className="text-center mt-4">
        <Link
          href="/join"
          className="block bg-gray-500 hover:bg-gray-600 text-white rounded-md shadow-sm py-3 cursor-pointer"
        >
          Join
        </Link>
      </div>
    </div>
  );
}
