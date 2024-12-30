"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import {
  DesignIcon12,
  DesignIcon13,
  DesignIcon14,
  DesignIcon15,
  DesignIcon16,
  DesignIcon17,
  DesignIcon18,
  DesignIcon19,
  DesignIcon20,
  DesignIcon21,
  DesignIcon22,
  DesignIcon23,
  DesignIcon40,
  DesignIcon41,
  DesignIcon49,
  DesignIcon6,
} from "@/components/icons";

interface BenefitCardProps {
  icon: string;
  title: string;
  description?: string;
  index?: number;
}

const iconsMap = {
  DesignIcon6,
  DesignIcon12,
  DesignIcon13,
  DesignIcon14,
  DesignIcon15,
  DesignIcon16,
  DesignIcon17,
  DesignIcon18,
  DesignIcon19,
  DesignIcon20,
  DesignIcon21,
  DesignIcon22,
  DesignIcon23,
  DesignIcon40,
  DesignIcon41,
  DesignIcon49,
};

const cardColors = [
  {
    bgColor: "bg-[#E2AF45]",
    cardHoverColor: "hover:bg-[#FAEDD7]",
    iconBg: "group-hover:bg-[#E2AF45]",
  },
  {
    bgColor: "bg-[#C6485D]",
    cardHoverColor: "hover:bg-[#F9DADC]",
    iconBg: "group-hover:bg-[#C6485D]",
  },
  {
    bgColor: "bg-[#599F99]",
    cardHoverColor: "hover:bg-[#E9F7F6]",
    iconBg: "group-hover:bg-[#599F99]",
  },
];

const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  title,
  description,
  index = 0,
}) => {
  const Icon = iconsMap[icon as keyof typeof iconsMap];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 25,
        duration: 1.5,
        delay: index * 0.1,
      }}
      viewport={{ once: true, margin: "-150px" }}
      style={{ boxShadow: "0px 0px 100px 0px #0000000D" }}
      className={cn(
        "bg-white w-full max-w-[23rem] flex flex-col items-center p-4 md:py-10 md:px-8 gap-6 transform transition-transform duration-300 hover:scale-105 group",
        cardColors[index % cardColors.length].cardHoverColor
      )}
    >
      <div
        className={cn(
          "bg-[#FDF7ED] flex-none size-20 flex items-center justify-center rounded-full",
          cardColors[index % cardColors.length].iconBg
        )}
      >
        <Icon className="text-[#E2AF45] size-12 group-hover:text-white" />
      </div>
      <div className="w-full">
        <h4 className="font-sintony font-bold text-2xl leading-[2.25rem] text-center text-[#1A1A1A]">
          {title}
        </h4>
        <p className="mt-2 text-base font-normal text-center text-[#535353]">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default BenefitCard;
