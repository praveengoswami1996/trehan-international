import React from "react";
import {
  DesignIcon34,
  DesignIcon35,
  DesignIcon36,
  DesignIcon37,
  DesignIcon38,
  DesignIcon39,
} from "../../icons";
import { cn } from "@/lib/utils";

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
        Our Recruitment Workflow
      </h2>

      <div className="w-full flex flex-col md:flex-row mt-5 md:mt-10 relative before:hidden before:md:block before:absolute before:top-14 before:left-1/2 before:-translate-x-1/2 before:w-2/3 before:border before:border-dashed before:border-[#696969]">
        {recruitmentFlow.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className={cn(
                "flex flex-row items-start md:flex-col md:items-center gap-3 md:gap-5 p-2 mobile-md:p-3 mobile-lg:p-5 relative",
                index < recruitmentFlow.length - 1 &&
                  "md:after:hidden after:z-0 after:absolute after:top-5 after:left-[2.125rem] mobile-md:after:left-12 mobile-lg:after:left-14 after:h-full after:border after:border-dashed after:border-[#696969]"
              )}
            >
              <div className="p-3 w-fit h-fit flex-none bg-[#E2AF45] rounded-full z-10">
                <Icon className="size-7 mobile-md:size-12 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-sintony font-bold text-[#000000] md:text-center">
                  {item.title}
                </h3>
                <p className="mt-1 md:mt-2 text-sm sm:text-base font-normal text-[#373737] md:text-center">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full flex flex-col md:flex-row mt-5 md:mt-10 relative before:hidden before:md:block before:absolute before:top-14 before:left-1/2 before:-translate-x-1/2 before:w-2/3 before:border before:border-dashed before:border-[#696969]">
        {recruitmentFlow2.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className={cn(
                "flex flex-row items-start md:flex-col md:items-center gap-3 md:gap-5 p-2 mobile-md:p-3 mobile-lg:p-5 relative",
                index < recruitmentFlow.length - 1 &&
                  "md:after:hidden after:z-0 after:absolute after:top-5 after:left-[2.125rem] mobile-md:after:left-12 mobile-lg:after:left-14 after:h-full after:border after:border-dashed after:border-[#696969]"
              )}
            >
              <div className="p-3 w-fit h-fit flex-none bg-[#E2AF45] rounded-full z-10">
                <Icon className="size-7 mobile-md:size-12 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-sintony font-bold text-[#000000] md:text-center">
                  {item.title}
                </h3>
                <p className="mt-1 md:mt-2 text-sm sm:text-base font-normal text-[#373737] md:text-center">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecruitmentFlow;
