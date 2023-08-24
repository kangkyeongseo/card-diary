interface ButtonProp {
  text: string;
  bgColor: string;
  onClick?: () => void;
}

export default function Button({ text, bgColor, onClick }: ButtonProp) {
  return (
    <button
      className={["w-full text-white rounded-2xl shadow-md py-3", bgColor].join(
        " "
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
