import { DesignIcon54, DesignIcon55, DesignIcon56 } from "@/components/icons";
import React from "react";
import ConsultativeApproachTabsCard from "./ConsultativeApproachTabsCard";

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
        Uncovering Deep Insights. We conduct structured interviews that are
        standardized and objective, ensuring a fair and consistent evaluation
        for every candidate. This approach involves:
      </p>

      <div className="mt-5 md:mt-10 grid grid-cols-1 mobile-2xl:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
        {content.map((item) => {
          return <ConsultativeApproachTabsCard key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};

export default StructuredInterviews;
