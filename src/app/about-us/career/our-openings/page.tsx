import JobFilter from "@/components/AboutUs/JobFilter";
import BreadCrumbs from "@/components/BreadCrumbs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const openPositions = [
  {
    id: "open_positions_001",
    jobTitle: "Accountant and Finance Analyst",
    jobDetails: "Mumbai, India | Onsite | Marketing",
  },
  {
    id: "open_positions_002",
    jobTitle: "Tally Operator",
    jobDetails: "Mumbai, India | Onsite | Operation",
  },
  {
    id: "open_positions_003",
    jobTitle: "Assistant Manager",
    jobDetails: "Delhi, India | Onsite | Operation",
  },
  {
    id: "open_positions_004",
    jobTitle: "Accountant and Finance Analyst",
    jobDetails: "Mumbai, India | Onsite | Marketing",
  },
  {
    id: "open_positions_005",
    jobTitle: "Tally Operator",
    jobDetails: "Mumbai, India | Onsite | Operation",
  },
  {
    id: "open_positions_006",
    jobTitle: "Assistant Manager",
    jobDetails: "Delhi, India | Onsite | Operation",
  },
  {
    id: "open_positions_007",
    jobTitle: "Accountant and Finance Analyst",
    jobDetails: "Mumbai, India | Onsite | Marketing",
  },
  {
    id: "open_positions_008",
    jobTitle: "Tally Operator",
    jobDetails: "Mumbai, India | Onsite | Operation",
  },
  {
    id: "open_positions_009",
    jobTitle: "Assistant Manager",
    jobDetails: "Delhi, India | Onsite | Operation",
  },
];

const OpenOpenings = () => {
  return (
    <div className="min-h-screen bg-white pt-28 md:pt-32 lg:pt-36 xl:pt-40 relative">
      {/* Hero Section */}
      <div className="w-full">
        <section className="w-full max-w-[1440px] mx-auto px-2 sm:px-5 lg:px-10 xl:px-14 2xl:px-24">
          <div className="flex justify-center">
            <BreadCrumbs />
          </div>
        </section>
      </div>

      {/* Open Positions Section */}
      <div className="w-full border-b border-[#D9D9D9]">
        <section className="w-full max-w-[1440px] mx-auto pt-5 pb-12 md:pb-16 xl:pb-24">
          <div className="flex flex-col items-center">
            <h1 className="font-sintony text-[2.4rem] lg:text-[3.25rem] leading-[3rem] lg:leading-[4.88rem] font-bold text-center">Open Positions</h1>
            <p className="mt-4 text-[1.125rem] leading-[1.69rem] text-center text-[#535353]">
              Apply now, be a part of Our Super Team
            </p>

            <JobFilter />

            <div className="mt-10 w-full flex flex-col gap-5">
              {openPositions.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="w-full max-w-[60rem] mx-auto p-10 bg-[#FAFAFA] flex items-center justify-between"
                  >
                    <div>
                      <h4 className="font-sintony font-bold text-2xl leading-[2.25rem] text-[#1A1A1A]">
                        {item.jobTitle}
                      </h4>
                      <p className="text-base text-[#535353] font-normal">
                        {item.jobDetails}
                      </p>
                    </div>
                    <Link href={"#"}>
                      <Button type="button" variant={"outline"} className={"w-fit border-[#1A1A1A] bg-[#FAFAFA]"}>
                        Learn more & Apply
                      </Button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OpenOpenings;
