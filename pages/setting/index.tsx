import Layout from "@/components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Setting() {
  const router = useRouter();
  const onLogout = async () => {
    await fetch("/api/users/me/logout", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.ok) {
          router.push("/enter");
        }
      });
  };
  return (
    <Layout title="설정" canGoBack={true}>
      <ul className="flex flex-col justify-center items-center  gap-2 mt-8 text-gray-700">
        <li className="cursor-pointer hover:text-gray-900">
          <Link href={"/setting/name-change"}>닉네임 변경</Link>
        </li>
        <li className="cursor-pointer hover:text-gray-900">
          <Link href={"/setting/password-change"}>비밀번호 변경</Link>
        </li>
        <li className="cursor-pointer hover:text-gray-900" onClick={onLogout}>
          로그아웃
        </li>
      </ul>
    </Layout>
  );
}
