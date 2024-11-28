import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import React from "react";

interface SelectItem {
  value: string;
  label: string;
}

interface SelectFieldProps {
  placeholder?: string;
  options: SelectItem[];
}

const SelectField: React.FC<SelectFieldProps> = ({ placeholder, options }) => {
  return (
    <Select>
      <SelectTrigger className="min-w-[180px] w-full border-none outline-none rounded-none shadow-[0px_0px_40px_0px_#0000000D] bg-white text-base text-[#1A1A1A] font-medium py-2.5 px-5 placeholder:text-sm placeholder:font-light placeholder:text-[#535353]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* <SelectLabel>Fruits</SelectLabel> */}
          {options.map((option) => {
            return <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectField;
