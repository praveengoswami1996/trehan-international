import React, { ComponentType } from "react";

interface BenefitCardProps {
    icon: ComponentType<{ className?: string }>
    title: string;
    description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  const Icon = icon;
  return (
    <div
      style={{ boxShadow: "0px 0px 100px 0px #0000000D" }}
      className="bg-white w-full max-w-[23rem] flex flex-col items-center py-10 px-8 gap-6"
    >
      <div className="bg-[#FDF7ED] flex-none size-20 flex items-center justify-center rounded-full">
        <Icon className="text-[#E2AF45] size-12" />
      </div>
      <div className="w-full">
        <h4 className="font-sintony font-bold text-2xl leading-[2.25rem] text-center text-[#1A1A1A]">
          {title}
        </h4>
        <p className="mt-2 text-base font-normal text-center text-[#535353]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BenefitCard;
