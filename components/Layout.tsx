import { useRouter } from "next/router";

interface LayoutProp {
  title: string;
  canGoBack?: boolean;
  children: React.ReactNode;
}

export default function Layout({ title, canGoBack, children }: LayoutProp) {
  const router = useRouter();
  return (
    <div className="w-full max-w-lg min-h-[500px] bg-slate-300 mt-16 mx-auto rounded-2xl shadow-2xl">
      <div className="grid grid-cols-3 justify-center items-center bg-blue-500 text-white rounded-t-2xl px-6 py-4">
        {canGoBack ? (
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
        ) : null}
        <div className="col-start-2 col-end-3 justify-self-center">
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
      </div>
      {children}
    </div>
  );
}
