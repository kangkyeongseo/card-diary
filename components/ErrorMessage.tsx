interface ErrorMessageProp {
  children?: React.ReactNode;
}

export default function ErrorMessage({ children }: ErrorMessageProp) {
  return <span className="text-center text-red-500">{children}</span>;
}
