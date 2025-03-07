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
import React from "react";
import ConsultativeApproachTabsCard from "./ConsultativeApproachTabsCard";

const content = [
  {
    id: "tabContent_001",
    title: "Database Repository of Resumes",
    icon: DesignIcon24,
  },
  {
    id: "tabContent_002",
    title: "Job Portals",
    icon: DesignIcon25,
  },
  {
    id: "tabContent_003",
    title: "Social Media",
    icon: DesignIcon26,
  },
  {
    id: "tabContent_004",
    title: "Our Career Website",
    icon: DesignIcon27,
  },
  {
    id: "tabContent_005",
    title: "Employee Referral Programs",
    icon: DesignIcon28,
  },
  {
    id: "tabContent_006",
    title: "Newspaper Advertisements",
    icon: DesignIcon29,
  },
  {
    id: "tabContent_007",
    title: "Recruitment Vendors",
    icon: DesignIcon33,
  },
  {
    id: "tabContent_008",
    title: "Mass Hiring Events",
    icon: DesignIcon31,
  },
  {
    id: "tabContent_009",
    title: "Campus Hiring",
    icon: DesignIcon32,
  },
  {
    id: "tabContent_010",
    title: "Direct Sourcing or Walk-through Events",
    icon: DesignIcon30,
  },
];

const StrategicSourcing = () => {
  return (
    <div>
      <p className="text-white max-w-6xl text-[1.125rem] md:leading-[1.69rem] font-normal">
        Mixing the Right Ingredients for Your Talent Pool. We take a
        consultative approach to understand your talent needs and build a
        strategic sourcing mix that attracts the best candidates. This approach
        goes beyond simply posting jobs on online portals. We explore various
        channels, including:
      </p>

      <div className="mt-5 md:mt-10 grid grid-cols-1 mobile-2xl:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
        {content.map((item) => {
          return <ConsultativeApproachTabsCard key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};

export default StrategicSourcing;
