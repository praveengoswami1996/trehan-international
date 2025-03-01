import { DesignIcon54, DesignIcon55, DesignIcon56  } from "@/components/icons";
import React from "react";

const content = [
  {
    id: "tabContent_001",
    title: "Developing a structured interview guide",
    icon: DesignIcon54,
  },
  {
    id: "tabContent_002",
    title: "Utilizing a panel of interviewers",
    icon: DesignIcon55,
  },
  {
    id: "tabContent_003",
    title: "Maintaining consistent scoring methods",
    icon: DesignIcon56,
  },
];


const StructuredInterviews = () => {
  return (
    <div>
      <p className="text-white max-w-6xl text-[1.125rem] md:leading-[1.69rem] font-normal">
      Uncovering Deep Insights. We conduct structured interviews that are standardized and objective, ensuring a
      fair and consistent evaluation for every candidate. This approach involves:
      </p>

      <div className="mt-5 md:mt-10 grid grid-cols-1 mobile-2xl:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-9">
        {content.map((item) => {
          return (
            <div key={item.id} className="flex gap-3 items-center">
              <div className="flex-none">
                <item.icon className="text-white size-8"/>
              </div>
              <div className="font-sintony font-medium text-[1.125rem] leading-[1.69rem] text-white max-w-xs">
                <p>{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StructuredInterviews;
