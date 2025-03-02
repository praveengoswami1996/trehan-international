import { IconProps } from "@radix-ui/react-icons/dist/types";
import React from "react";

const DoubleQuotesIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      { ...props }
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M57 78L69 54H51V18H87V54L75 78H57ZM15 78L27 54H9V18H45V54L33 78H15Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DoubleQuotesIcon;
