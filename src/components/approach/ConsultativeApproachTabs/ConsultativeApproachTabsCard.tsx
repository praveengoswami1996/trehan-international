import React from "react";

interface ConsultativeApproachTabsCardProps {
    data: {
        id: string;
        title: string;
        icon: React.ElementType;
    }
}

const ConsultativeApproachTabsCard: React.FC<ConsultativeApproachTabsCardProps> = ({ data }) => {
  return (
    <div
      key={data.id}
      className="p-5 flex gap-3 items-center bg-[#FFFFFF1A] shadow-approach-tabs-card hover:bg-[#C6485D] hover:shadow-approach-tabs-card-hover group transition-all duration-300 hover:scale-[1.02]"
    >
      <div className="flex-none rounded-full w-fit h-fit p-3 bg-white group-hover:bg-[#E2AF45]">
        <data.icon className="text-black group-hover:text-white size-8" />
      </div>
      <div className="font-sintony font-medium text-[1.125rem] leading-[1.69rem] text-white max-w-xs">
        <p>{data.title}</p>
      </div>
    </div>
  );
};

export default ConsultativeApproachTabsCard;
