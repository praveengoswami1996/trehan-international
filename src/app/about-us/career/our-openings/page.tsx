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
    <div className="page pt-28">
      {/* Open Positions Section */}
      <div className="w-full border-b border-[#D9D9D9]">
        <div className="max-w-[63rem] w-full mx-auto max-sm:px-3 max-lg:px-5 max-xl:px-10">
          <BreadCrumbs />
        </div>
        <section className="website-container pt-5 pb-12 md:pb-16 xl:pb-24">
          <div className="flex flex-col">
            <div className="w-full max-w-[63rem] mx-auto mt-3 lg:mt-8 max-sm:px-3 max-lg:px-5 max-xl:px-10">
              <h1 className="font-sintony text-[2.4rem] lg:text-[3.25rem] leading-[3rem] lg:leading-[4.88rem] font-bold">
                Open Positions
              </h1>
              <p className="mt-4 paragraph">
                Apply now, be a part of Our Super Team
              </p>
            </div>

            <JobFilter />

            <div className="mt-10 w-full flex flex-col gap-5 section-padding-x">
              {openPositions.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="w-full max-w-[63rem] mx-auto p-5 md:p-10 bg-[#FAFAFA] flex flex-col gap-5 md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <h4 className="font-sintony font-bold text-2xl leading-[2.25rem] text-[#1A1A1A]">
                        {item.jobTitle}
                      </h4>
                      <p className="text-base text-[#535353] font-normal">
                        {item.jobDetails}
                      </p>
                    </div>
                    <Link href={"/contact-us"}>
                      <Button
                        type="button"
                        variant={"outline"}
                        className={"w-fit border-[#1A1A1A] bg-[#FAFAFA]"}
                      >
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
