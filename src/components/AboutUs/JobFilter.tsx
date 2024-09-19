"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Option {
  value: string;
  label: string;
}

interface SelectComponentProps {
  placeholder: string;
  options: Option[];
}

const SelectComponent: React.FC<SelectComponentProps> = ({
  placeholder,
  options,
}) => {
  return (
    <Select>
      <SelectTrigger className="w-full max-w-[20rem]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.label} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

const JobFilter = () => {
  return (
    <div className="mt-7 xl:mt-14 section-padding-x w-full">
      <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5 w-full max-w-[63rem] mx-auto">
        <SelectComponent
          placeholder="All Location"
          options={[
            { value: "delhi", label: "Delhi" },
            { value: "mumbai", label: "Mumbai" },
            { value: "bangalore", label: "Bangalore" },
          ]}
        />
        <SelectComponent
          placeholder="Work Type"
          options={[
            { value: "onsite", label: "Onsite" },
            { value: "remote", label: "Remote" },
          ]}
        />
        <SelectComponent
          placeholder="Department"
          options={[
            { value: "marketing", label: "Marketing" },
            { value: "operation", label: "Operation" },
          ]}
        />
      </div>
    </div>
  );
};

export default JobFilter;
