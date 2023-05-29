import { UseFormRegisterReturn } from "react-hook-form";

interface InputProp {
  label: string;
  type: string;
  register: UseFormRegisterReturn;
}

export default function Input({ label, type, register }: InputProp) {
  return (
    <div className="relative flex items-center">
      <div className="absolute left-4">
        <span className="text-gray-500">{label}</span>
      </div>
      <input
        {...register}
        type={type}
        className="w-full px-28 py-2 border placeholder-gray-400 rounded-2xl shadow-md focus:outline-none"
      />
    </div>
  );
}
