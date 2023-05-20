import useDate from "@/libs/client/useDate";

interface CardProp {
  id: string;
  title: string;
  todo: string;
  date: Date;
  period: number;
  importance: number;
  bgColor: string;
  onEditCard: () => void;
}

export default function Card(prop: CardProp) {
  return (
    <div
      key={prop.id}
      className={[
        "flex flex-col w-full max-w-[14rem] h-80 rounded-xl shadow-2xl p-4 relative hover:scale-105 group/card",
        `bg-${prop.bgColor}-500`,
      ].join(" ")}
    >
      <div className="flex justify-between items-center ">
        <span className="text-xs text-white">{useDate(prop.date)}</span>
        <div className="text-xs">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={
                prop.importance >= star ? "text-yellow-300" : "text-white"
              }
            >
              ★
            </span>
          ))}
        </div>
      </div>
      <div className="text-center text-lg font-bold text-white mt-4 break-words">
        {prop.title.length === 0 ? "무엇을 해야하나요?" : prop.title}
      </div>
      <div className="text-white mt-4">
        <div className="break-words">{prop.todo}</div>
      </div>
      <div className="text-sm text-white mt-4 absolute bottom-2 right-4">
        <div>{prop.period}일 남음</div>
      </div>
      <div className="absolute top-0 left-0 rounded-xl w-full h-full bg-[rgba(0,0,0,0.5)] hidden text-white group-hover/card:flex items-end justify-center">
        <div className="flex items-center gap-8 mb-12">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 hover:text-slate-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div onClick={prop.onEditCard}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 hover:text-slate-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
