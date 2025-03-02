import { LocationIcon2 } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const jobs = [
  {
    id: "job_001",
    country: "Saudi Arab",
    jobs: "265 jobs",
    flag: "/flags/saudi-arab.png",
  },
  {
    id: "job_002",
    country: "Kuwait",
    jobs: "324 jobs",
    flag: "/flags/kuwait.png",
  },
  {
    id: "job_003",
    country: "Qatar",
    jobs: "326 jobs",
    flag: "/flags/qatar.png",
  },
  {
    id: "job_004",
    country: "Japan",
    jobs: "102 jobs",
    flag: "/flags/japan.png",
  },
  {
    id: "job_005",
    country: "Romania",
    jobs: "102 jobs",
    flag: "/flags/romania.png",
  },
  {
    id: "job_006",
    country: "Poland",
    jobs: "265 jobs",
    flag: "/flags/poland.png",
  },
];

const openings = [
  {
    id: "opening_001",
    industry: "Engineering, Infrastructure & Construction",
    vacancies: "132",
    profiles: [
      {
        id: "profile_001",
        title: "Welder Forklift Operator / Warehouse Helper",
        location: "Jeddah, Saudi Arab",
        postedAt: "10/05/2024",
        icon: "/job-icons/jobicon-1.png",
      },
      {
        id: "profile_002",
        title: "Welder Fitter",
        location: "Riyadh, Saudi Arab",
        postedAt: "10/05/2024",
        icon: "/job-icons/jobicon-2.png",
      },
      {
        id: "profile_003",
        title: "Weekend Caregiver - Mason",
        location: "Tokyo, Japan",
        postedAt: "10/05/2024",
        icon: "/job-icons/jobicon-3.png",
      },
    ],
  },
  {
    id: "opening_002",
    industry: "Oil, Gas & Energy",
    vacancies: "68",
    profiles: [
      {
        id: "profile_001",
        title: "Warehouse Worker",
        location: "Al Wafrah, Kuwait",
        postedAt: "10/05/2024",
        icon: "/job-icons/jobicon-1.png",
      },
      {
        id: "profile_002",
        title: "Welder Engineer",
        location: "Jeddah, Saudi Arab",
        postedAt: "10/05/2024",
        icon: "/job-icons/jobicon-2.png",
      },
      {
        id: "profile_003",
        title: "Welder",
        location: "Jeddah, Saudi Arab",
        postedAt: "10/05/2024",
        icon: "/job-icons/jobicon-3.png",
      },
    ],
  },
  {
    id: "opening_003",
    industry: "Retails, Food & Beverage",
    vacancies: "32",
    profiles: [
      {
        id: "profile_001",
        title: "Welder Forklift Operator / Warehouse Helper",
        location: "Jeddah, Saudi Arab",
        postedAt: "10/05/2024",
        icon: "/job-icons/jobicon-1.png",
      },
      {
        id: "profile_002",
        title: "Welder Fitter",
        location: "Riyadh, Saudi Arab",
        postedAt: "10/05/2024",
        icon: "/job-icons/jobicon-2.png",
      },
      {
        id: "profile_003",
        title: "Weekend Caregiver - Mason",
        location: "Tokyo, Japan",
        postedAt: "10/05/2024",
        icon: "/job-icons/jobicon-3.png",
      },
    ],
  },
  {
    id: "opening_004",
    industry: "Facility Management",
    vacancies: "132",
    profiles: [
      {
        id: "profile_001",
        title: "Welder Forklift Operator / Warehouse Helper",
        location: "Jeddah, Saudi Arab",
        postedAt: "10/05/2024",
        icon: "/job-icons/jobicon-1.png",
      },
      {
        id: "profile_002",
        title: "Welder Fitter",
        location: "Riyadh, Saudi Arab",
        postedAt: "10/05/2024",
        icon: "/job-icons/jobicon-2.png",
      },
      {
        id: "profile_003",
        title: "Weekend Caregiver - Mason",
        location: "Tokyo, Japan",
        postedAt: "10/05/2024",
        icon: "/job-icons/jobicon-3.png",
      },
    ],
  },
  {
    id: "opening_005",
    industry: "Logistic & Supply Chain Management",
    vacancies: "68",
    profiles: [
      {
        id: "profile_001",
        title: "Warehouse Worker",
        location: "Al Wafrah, Kuwait",
        postedAt: "10/05/2024",
        icon: "/job-icons/jobicon-1.png",
      },
      {
        id: "profile_002",
        title: "Welder Engineer",
        location: "Jeddah, Saudi Arab",
        postedAt: "10/05/2024",
        icon: "/job-icons/jobicon-2.png",
      },
      {
        id: "profile_003",
        title: "Welder",
        location: "Jeddah, Saudi Arab",
        postedAt: "10/05/2024",
        icon: "/job-icons/jobicon-3.png",
      },
    ],
  },
  {
    id: "opening_006",
    industry: "Automotive & Transportation",
    vacancies: "32",
    profiles: [
      {
        id: "profile_001",
        title: "Welder Forklift Operator / Warehouse Helper",
        location: "Jeddah, Saudi Arab",
        postedAt: "10/05/2024",
        icon: "/job-icons/jobicon-1.png",
      },
      {
        id: "profile_002",
        title: "Welder Fitter",
        location: "Riyadh, Saudi Arab",
        postedAt: "10/05/2024",
        icon: "/job-icons/jobicon-2.png",
      },
      {
        id: "profile_003",
        title: "Weekend Caregiver - Mason",
        location: "Tokyo, Japan",
        postedAt: "10/05/2024",
        icon: "/job-icons/jobicon-3.png",
      },
    ],
  },
  {
    id: "opening_007",
    industry: "Healthcare",
    vacancies: "32",
    profiles: [
      {
        id: "profile_001",
        title: "Welder Forklift Operator / Warehouse Helper",
        location: "Jeddah, Saudi Arab",
        postedAt: "10/05/2024",
        icon: "/job-icons/jobicon-1.png",
      },
      {
        id: "profile_002",
        title: "Welder Fitter",
        location: "Riyadh, Saudi Arab",
        postedAt: "10/05/2024",
        icon: "/job-icons/jobicon-2.png",
      },
      {
        id: "profile_003",
        title: "Weekend Caregiver - Mason",
        location: "Tokyo, Japan",
        postedAt: "10/05/2024",
        icon: "/job-icons/jobicon-3.png",
      },
    ],
  },
];

const JobSearch = () => {
  return (
    <div className="min-h-screen">
      <div className="w-full bg-[#C6485D] pt-28 md:pt-32 lg:pt-36 xl:pt-40 relative overflow-hidden">
        <div
          className="hidden mobile-sm:block absolute
        top-0 -right-20 size-[42.25rem]"
        >
          <Image
            src="/bg-pattern-FF9DAE.svg"
            alt="Background Pattern Image"
            fill
            className="object-contain z-0"
          />
        </div>
        <section
          aria-label="Job Search"
          className="website-container section-padding-x section-padding-bottom"
        >
          <div className="w-full md:max-w-[49.875rem] mx-auto">
            <h1 className="section-title text-white">
              Find Your Dream Jobs
            </h1>

            <div className="mt-5 flex flex-col gap-1 md:flex-row w-full p-3 rounded-sm bg-white z-10">
              <Input
                type="email"
                placeholder="Keyword, Company name, location, etc"
                className="border-none outline-none bg-transparent shadow-none text-[1.125rem] leading-[1.69rem] text-[#373737] font-normal py-3 md:py-0"
              />
              <Button
                type="submit"
                className="bg-[#E2AF45] text-[1.125rem] leading-[1.69rem] text-[#000000] font-medium font-work-sans px-10 py-6 rounded-sm"
              >
                Search Job
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Find Your Dream Job Section */}
      <div className="w-full bg-[#EFF6F5]">
        <section className="website-container section-padding-x section-padding-y">
          <div className="w-full max-w-[50rem] mx-auto">
            <h1 className="section-title">Find Your Dream Jobs</h1>

            <div className="mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8">
              {jobs.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="bg-white p-5 flex gap-4 items-center rounded-sm"
                    style={{ boxShadow: "0px 0px 40px 0px #0000000D" }}
                  >
                    <div className="flex-none w-[52px] h-[34px] relative border border-[#D7D7D7]">
                      <Image
                        src={item.flag}
                        alt={`${item.country} Flag`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="text-xl font-sintony font-bold text-[#000000]">
                        {item.country}
                      </h5>
                      <p className="text-base font-normal text-[#373737]">
                        {item.jobs}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* Job Listing Section */}
      <div className="w-full border-b border-[#D9D9D9]">
        <section className="website-container section-padding-x section-padding-y">
          <div className="w-full max-w-[50rem] mx-auto flex flex-col gap-20">
            {openings.map((item) => {
              return (
                <div key={item.id}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <h4 className="font-sintony font-bold text-2xl leading-[2.25rem]">{item.industry} <span className="text-[#373737] font-light">({item.vacancies})</span></h4>
                    <Link href={"/job-search/all-openings"} className="font-semibold text-base text-[#C6485D]">
                      View All Openings
                    </Link>
                  </div>

                  <div className="mt-5 flex flex-col gap-4">
                    {item.profiles.map((item) => {
                      return (
                        <div key={item.id} className="w-full p-2 md:p-5 bg-[#f4f4f4] flex flex-col mobile-xl:flex-row items-center mobile-xl:justify-between gap-5">
                          <div className="w-full flex items-center gap-4">
                            <div className="flex-none w-12 h-12 relative">
                              <Image 
                                src={item.icon}
                                alt="Job Icon"
                                fill
                                className="object-contain"
                              />
                            </div>
                            <div className="flex flex-col gap-1.5">
                              <p className="text-[1.125rem] leading-[1.69rem] font-medium text-[#000000]">{item.title}</p>
                              <div className="flex items-center gap-2">
                                <LocationIcon2 />
                                <p className="text-[0.9375rem] font-light text-[#000000]">{item.location}</p>
                              </div>
                            </div>
                          </div>
                          <div className="text-sm font-normal tracking-wide text-[#535353]">
                            {item.postedAt}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default JobSearch;
