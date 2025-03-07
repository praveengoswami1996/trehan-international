import {
  DesignIcon57,
  DesignIcon58,
  DesignIcon59,
  DesignIcon60,
  DesignIcon61,
  DesignIcon62,
} from "@/components/icons";
import React from "react";
import ConsultativeApproachTabsCard from "./ConsultativeApproachTabsCard";

const content = [
  {
    id: "tabContent_001",
    title: "Offer Letter Acceptance & Pre-Medical Test",
    icon: DesignIcon57,
  },
  {
    id: "tabContent_002",
    title: "Documents Verification for Medically Approved Candidates",
    icon: DesignIcon58,
  },
  {
    id: "tabContent_003",
    title: "PCC / Bio-Metric Appointment Assistance",
    icon: DesignIcon59,
  },
  {
    id: "tabContent_003",
    title: "Visa Information",
    icon: DesignIcon60,
  },
];

const content2 = [
  {
    id: "tabContent_001",
    title: "Medical & Visa Stamping",
    icon: DesignIcon61,
  },
];

const content3 = [
  {
    id: "tabContent_001",
    title: "Issuing Ticket & Documents",
    icon: DesignIcon62,
  },
];

const SeamlessOnboarding = () => {
  return (
    <div>
      <p className="text-white max-w-6xl text-[1.125rem] md:leading-[1.69rem] font-normal">
        A Smooth Transition. We prioritize a seamless onboarding / deployment /
        mobilization process to ensure new hires integrate smoothly into your
        organization:
      </p>

      <div className="w-full mt-5 md:mt-10 space-y-10">
        <div className="w-full space-y-5">
          <h6 className="font-sintony font-bold text-[1.125rem] leading-[1.69rem] text-white">
            Pre-Boarding
          </h6>
          <div className="grid grid-cols-1 mobile-2xl:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            {content.map((item) => {
              return <ConsultativeApproachTabsCard key={item.id} data={item} />;
            })}
          </div>
        </div>

        <div className="w-full space-y-5">
          <h6 className="font-sintony font-bold text-[1.125rem] leading-[1.69rem] text-white">
            Pre-Boarding
          </h6>
          <div className="grid grid-cols-1 mobile-2xl:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            {content2.map((item) => {
              return <ConsultativeApproachTabsCard key={item.id} data={item} />;
            })}
          </div>
        </div>

        <div className="w-full space-y-5">
          <h6 className="font-sintony font-bold text-[1.125rem] leading-[1.69rem] text-white">
            Pre-Boarding
          </h6>
          <div className="grid grid-cols-1 mobile-2xl:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            {content3.map((item) => {
              return <ConsultativeApproachTabsCard key={item.id} data={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeamlessOnboarding;
