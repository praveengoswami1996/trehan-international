import { IconProps } from "@radix-ui/react-icons/dist/types";
import React from "react";

const LeftArrowIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      width="17"
      height="12"
      viewBox="0 0 17 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      { ...props }
    >
      <path d="M6 1L1 6M1 6L6 11M1 6H16.8" stroke="currentColor" />
    </svg>
  );
};

export default LeftArrowIcon;
