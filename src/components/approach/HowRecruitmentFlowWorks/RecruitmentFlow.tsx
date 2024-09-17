import React from "react";
import { DesignIcon34, DesignIcon35, DesignIcon36, DesignIcon37, DesignIcon38, DesignIcon39 } from "../../icons";

const recruitmentFlow = [
  {
    id: "recruitment_flow_001",
    title: "Job Requirement",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
    icon: DesignIcon34,
  },
  {
    id: "recruitment_flow_002",
    title: "Multichannel Sourcing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
    icon: DesignIcon35,
  },
  {
    id: "recruitment_flow_003",
    title: "Auto Screening Application handpicked by AI Filters",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
    icon: DesignIcon36,
  },
];

const recruitmentFlow2 = [
  {
    id: "recruitment_flow_001",
    title: "Dedicated Industry team screening by in-house recruiters",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
    icon: DesignIcon37,
  },
  {
    id: "recruitment_flow_002",
    title: "Shortlisted Screened Application",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
    icon: DesignIcon38,
  },
  {
    id: "recruitment_flow_003",
    title: "Automated Interview calling & attendance marking via Exotel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
    icon: DesignIcon39,
  },
];

const RecruitmentFlow = () => {
  return (
    <div className="w-full max-w-[68rem] mx-auto">
      <h2 className="section-title text-center">
        How the Recruitment Flow Works?
      </h2>

      <div className="w-full flex flex-wrap mt-10 relative before:absolute before:top-14 before:left-1/2 before:-translate-x-1/2 before:w-2/3 before:border before:border-dashed before:border-[#69696]">
        {recruitmentFlow.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="flex flex-row md:flex-col items-center gap-5 p-2 md:p-5 relative"
            >
              <div className="p-3 flex-none bg-[#E2AF45] rounded-full">
                <Icon className="size-12 text-white" />
              </div>
              <div className="">
                <h3 className="text-xl font-sintony font-bold text-[#000000] text-center">
                  {item.title}
                </h3>
                <p className="mt-2 text-center">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap mt-5 relative before:absolute before:top-14 before:left-1/2 before:-translate-x-1/2 before:w-2/3 before:border before:border-dashed before:border-[#69696]">
        {recruitmentFlow2.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="flex flex-col items-center gap-5 p-5 relative"
            >
              <div className="p-3 flex-none bg-[#E2AF45] rounded-full">
                <Icon className="size-12 text-white" />
              </div>
              <div className="">
                <h3 className="text-xl font-sintony font-bold text-[#000000] text-center">
                  {item.title}
                </h3>
                <p className="mt-2 text-center">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecruitmentFlow;
