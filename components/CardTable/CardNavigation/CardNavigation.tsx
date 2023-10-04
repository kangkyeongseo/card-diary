import { useRouter } from "next/router";

export default function CardNavigation() {
  const router = useRouter();
  return (
    <ul className="grid grid-cols-3 items-center w-full max-w-xl bg-slate-700 rounded-[20px] mx-auto mb-12 shadow-2xl text-white">
      <li
        className={
          router.pathname === "/"
            ? "w-full bg-slate-500 text-center p-2 rounded-[20px] border border-white hover:text-slate-900"
            : "text-center hover:text-slate-900"
        }
        onClick={() => router.push("/")}
      >
        계획
      </li>
      <li
        className={
          router.pathname === "/diary"
            ? "w-full bg-slate-500 text-center p-2 rounded-[20px] border border-white hover:text-slate-900"
            : "text-center hover:text-slate-900"
        }
        onClick={() => router.push("/diary")}
      >
        다이어리
      </li>
      <li
        className={
          router.pathname === "/memo"
            ? "w-full bg-slate-500 text-center p-2 rounded-[20px] border border-white hover:text-slate-900"
            : "text-center hover:text-slate-900"
        }
        onClick={() => router.push("/memo")}
      >
        메모
      </li>
    </ul>
  );
}
