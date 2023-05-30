interface ButtonProp {
  text: string;
  color: string;
  onClick?: () => void;
}

export default function Button({ text, color, onClick }: ButtonProp) {
  return (
    <button
      className={[
        "w-full text-white rounded-2xl shadow-md py-3",
        `bg-${color}-500 hover:bg-${color}-600`,
      ].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
