import {
  DesignIcon24,
  DesignIcon25,
  DesignIcon26,
  DesignIcon27,
  DesignIcon28,
  DesignIcon29,
  DesignIcon30,
  DesignIcon31,
  DesignIcon32,
  DesignIcon33,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const StrategicSourcingData = [
  {
    id: "strategic-sourcing_001",
    title: "Database Repository of Resumes",
    icon: DesignIcon24,
  },
  {
    id: "strategic-sourcing_002",
    title: "Job Portals",
    icon: DesignIcon25,
  },
  {
    id: "strategic-sourcing_003",
    title: "Social Media",
    icon: DesignIcon26,
  },
  {
    id: "strategic-sourcing_004",
    title: "Our Career Website",
    icon: DesignIcon27,
  },
  {
    id: "strategic-sourcing_005",
    title: "Employee Referral Programs",
    icon: DesignIcon28,
  },
  {
    id: "strategic-sourcing_006",
    title: "Newspaper Advertisements",
    icon: DesignIcon29,
  },
  {
    id: "strategic-sourcing_007",
    title: "Direct Sourcing or Walk-through Events",
    icon: DesignIcon30,
  },
  {
    id: "strategic-sourcing_008",
    title: "Mass Hiring Events",
    icon: DesignIcon31,
  },
  {
    id: "strategic-sourcing_009",
    title: "Campus Hiring",
    icon: DesignIcon32,
  },
  {
    id: "strategic-sourcing_010",
    title: "Recruitment Vendors",
    icon: DesignIcon33,
  },
];

const StrategicSourcing = () => {
  return (
    <div>
      <p className="text-white max-w-6xl text-base md:text-[1.125rem] md:leading-[1.69rem] font-normal">
        Mixing the Right Ingredients for Your Talent Pool. We take a
        consultative approach to understand your talent needs and build a
        strategic sourcing mix that attracts the best candidates. This approach
        goes beyond simply posting jobs on online portals. We explore various
        channels, including:
      </p>

      <div className="mt-5 md:mt-10 grid grid-cols-1 mobile-2xl:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 justify-items-center">
        {StrategicSourcingData.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="flex items-center gap-3 w-full max-w-[24.375rem] p-5 md:p-10 bg-[#FFFFFF1A] shadow-approach-tabs-card hover:bg-[#C6485D] hover:shadow-approach-tabs-card-hover group transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex-none bg-[#FDF7ED] rounded-full w-fit h-fit p-4 group-hover:bg-[#E2AF45]">
                <Icon className="size-[2.625rem] group-hover:text-white" />
              </div>
              <div className="font-sintony font-bold text-lg md:text-xl text-white">
                <p>{item.title}</p>
              </div>
            </div>
          );
        })}

        <div className="mobile-2xl:col-span-2 p-3 md:p-10 bg-[#ffffff] flex flex-col md:flex-row md:items-center w-full justify-between gap-8">
          <h4 className="font-sintony font-bold text-2xl text-[#000000] max-w-sm">
            Hey! We can help you to take your business next level
          </h4>
          <Link href="/contact-us">
            <Button type="button" className="w-fit">Partner with us</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StrategicSourcing;
