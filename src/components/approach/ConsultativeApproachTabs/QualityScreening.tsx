import { DesignIcon13, DesignIcon50, DesignIcon51, DesignIcon52, DesignIcon53  } from "@/components/icons";
import React from "react";

const content = [
  {
    id: "tabContent_001",
    title: "Pre-screening/Filtration",
    icon: DesignIcon50,
  },
  {
    id: "tabContent_002",
    title: "Orientation (Pre & Post Interviews)",
    icon: DesignIcon51,
  },
  {
    id: "tabContent_003",
    title: "Hand-holding Candidates",
    icon: DesignIcon13,
  },
  {
    id: "tabContent_004",
    title: "Assessments (Soft and Hard/Technical Skills)",
    icon: DesignIcon52,
  },
  {
    id: "tabContent_005",
    title: "Scheduling for Interviews/Assessments",
    icon: DesignIcon53,
  },
];


const QualityScreening = () => {
  return (
    <div>
      <p className="text-white max-w-6xl text-[1.125rem] md:leading-[1.69rem] font-normal">
      Identifying the Right Fit. Once we source a diverse pool of candidates, we implement a rigorous quality
      screening process to ensure they possess the necessary skills and qualifications:
      </p>

      <div className="mt-5 md:mt-10 grid grid-cols-1 mobile-2xl:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-9">
        {content.map((item) => {
          return (
            <div key={item.id} className="flex gap-3 items-center">
              <div className="flex-none">
                <item.icon className="text-white size-8"/>
              </div>
              <div className="font-sintony font-medium text-[1.125rem] leading-[1.69rem] text-white max-w-sm">
                <p>{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QualityScreening;
