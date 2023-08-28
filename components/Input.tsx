import { UseFormRegisterReturn } from "react-hook-form";

interface InputProp {
  type: string;
  register: UseFormRegisterReturn;
  label?: string;
  placeholder?: string;
}

export default function Input({
  type,
  register,
  label,
  placeholder,
}: InputProp) {
  return (
    <div className="relative flex items-center">
      {label && (
        <div className="absolute left-4">
          <span className="text-gray-500">{label}</span>
        </div>
      )}
      <input
        {...register}
        type={type}
        placeholder={placeholder}
        className={[
          "w-full  py-2 border placeholder-gray-400 rounded-2xl shadow-md focus:outline-none",
          label ? "pl-28 pr-4" : "px-4",
        ].join(" ")}
      />
    </div>
  );
}
