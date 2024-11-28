import { Input } from "@/components/ui/input";
import React from "react";

interface InputFieldProps {
    type?: string;
    placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder }) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      className="border-none outline-none rounded-none shadow-[0px_0px_40px_0px_#0000000D] bg-white text-base text-[#1A1A1A] font-medium py-2.5 px-5 placeholder:text-sm placeholder:font-light placeholder:text-[#535353]"
    />
  );
};

export default InputField;
