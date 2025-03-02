'use client';
import BreadCrumbs from "@/components/BreadCrumbs";
import { SearchIcon } from "@/components/icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const JobsFilterAccordion = [
  {
    id: "search_by_category",
    filterType: "Search by Category",
    filters: [
      {
        id: "eic",
        label: "Engineering, Infrastructure & Construction",
        openings: 132,
      },
      {
        id: "oge",
        label: "Oil, Gas & Energy",
        openings: 68,
      },
      {
        id: "rfb",
        label: "Retails, Food & Beverage",
        openings: 32,
      },
      {
        id: "fm",
        label: "Facility Management",
        openings: 32,
      },
      {
        id: "lscm",
        label: "Logistic & Supply Chain Management",
        openings: 10,
      },
      {
        id: "im",
        label: "Industrial Manufacturing",
        openings: 54,
      },
      {
        id: "ant",
        label: "Automotive & Transportation",
        openings: 20,
      },
      {
        id: "hc",
        label: "Healthcare",
        openings: 14,
      },
    ],
  },
  {
    id: "search_by_location",
    filterType: "Search by Location",
    filters: [
      {
        id: "saudi_arab",
        label: "Saudi Arab",
        openings: 265,
      },
      {
        id: "kuwait",
        label: "Kuwait",
        openings: 324,
      },
      {
        id: "qatar",
        label: "Qatar",
        openings: 164,
      },
      {
        id: "japan",
        label: "Japan",
        openings: 26,
      },
      {
        id: "romania",
        label: "Romania",
        openings: 102,
      },
      {
        id: "poland",
        label: "Poland",
        openings: 10,
      },
    ],
  },
];

const allOpeningsList = [
  {
    id: "opening_001",
    jobTitle: "Welder Forklift Operator / Warehouse Helper",
    location: "Jeddah, Saudi Arab",
    datePosted: "10/05/2024",
    icon: "/job-icons/jobicon-1.png",
  },
  {
    id: "opening_002",
    jobTitle: "Welder Forklift Operator / Warehouse Helper",
    location: "Al Jahra, Kuwait",
    datePosted: "10/05/2024",
    icon: "/job-icons/jobicon-2.png",
  },
  {
    id: "opening_003",
    jobTitle: "Welder Fitter",
    location: "Riyadh, Saudi Arab",
    datePosted: "10/05/2024",
    icon: "/job-icons/jobicon-3.png",
  },
  {
    id: "opening_004",
    jobTitle: "Welder",
    location: "Jeddah, Saudi Arab",
    datePosted: "10/05/2024",
    icon: "/job-icons/jobicon-4.png",
  },
  {
    id: "opening_005",
    jobTitle: "Welder",
    location: "Buraydah, Saudi Arab",
    datePosted: "10/05/2024",
    icon: "/job-icons/jobicon-5.png",
  },
  {
    id: "opening_006",
    jobTitle: "Welder Engineer",
    location: "Al Wafrah, Kuwait",
    datePosted: "10/05/2024",
    icon: "/job-icons/jobicon-6.png",
  },
  {
    id: "opening_007",
    jobTitle: "Weekend Caregiver - Mason",
    location: "Tokyo, Japan",
    datePosted: "10/05/2024",
    icon: "/job-icons/jobicon-7.png",
  },
  {
    id: "opening_008",
    jobTitle: "Warehouse / Driver",
    location: "Jeddah, Saudi Arab",
    datePosted: "10/05/2024",
    icon: "/job-icons/jobicon-8.png",
  },
  {
    id: "opening_009",
    jobTitle: "Warehouse Worker",
    location: "Riyadh, Saudi Arab",
    datePosted: "10/05/2024",
    icon: "/job-icons/jobicon-9.png",
  },
  {
    id: "opening_010",
    jobTitle: "Warehouse Worker",
    location: "Jeddah, Saudi Arab",
    datePosted: "10/05/2024",
    icon: "/job-icons/jobicon-1.png",
  },
  {
    id: "opening_011",
    jobTitle: "Warehouse Team Lead",
    location: "Buraydah, Saudi Arab",
    datePosted: "10/05/2024",
    icon: "/job-icons/jobicon-3.png",
  },
  {
    id: "opening_012",
    jobTitle: "Warehouse Team Lead",
    location: "Jeddah, Saudi Arab",
    datePosted: "10/05/2024",
    icon: "/job-icons/jobicon-2.png",
  },
];

const SearchAllOpenings = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen">
      <div className="w-full bg-[#EFF6F5] pt-28 md:pt-32 lg:pt-36 xl:pt-40 relative overflow-hidden">
        <section className="website-container section-padding-x section-padding-bottom">
          <div className="w-full flex flex-col max-w-3xl mx-auto">
            <BreadCrumbs customSegment={["/job-search"]} />
            <h1 className="mt-7 font-bold text-5xl md:text-6xl text-[#000000]">
              Job Search
            </h1>
            <p className="mt-5 text-[1.125rem] leading-[1.69rem] font-normal text-[#000000]">
              Find your next opportunity here.
            </p>

            <div className="mt-6 md:mt-12 w-full flex flex-col mobile-2xl:flex-row mobile-2xl:items-center gap-3">
              <Input
                type="text"
                placeholder="Enter Job Title"
                className="border-none outline-none bg-white shadow-none text-base text-[#373737] font-normal py-4 px-5"
              />
              <Input
                type="text"
                placeholder="Enter Location"
                className="border-none outline-none bg-white shadow-none text-base text-[#373737] font-normal py-4 px-5"
              />
              <Button
                size={"icon"}
                className="flex-none w-full mobile-2xl:w-[3.5rem] h-[3.5rem] bg-[#C6485D] rounded-sm"
              >
                <SearchIcon className="text-white" />
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Job Filter Section */}
      <div className="w-full border-b border-[#D9D9D9]">
        <div className="website-container section-padding-x section-padding-y flex flex-col md:flex-row gap-8 overflow-auto">
          <aside>
            <Accordion
              type="multiple"
              className="w-full md:w-[16rem] lg:w-[21rem] flex flex-col gap-6"
              defaultValue={["search_by_category", "search_by_location"]}
            >
              {JobsFilterAccordion.map((item, index) => {
                return (
                  <AccordionItem
                    className="border-none"
                    key={item.id}
                    value={item.id}
                  >
                    <AccordionTrigger className="text-2xl leading-none text-[#1A1A1A] hover:no-underline text-left max-w-[16.875rem] p-0">
                      {item.filterType}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm lg:text-[1.125rem] lg:leading-[1.69rem] text-[#535353]">
                      <div className="mt-3 flex flex-col gap-5">
                        {item.filters.map((item) => {
                          return (
                            <div
                              key={item.id}
                              className="flex items-start gap-3"
                            >
                              <Checkbox
                                key={item.id}
                                className="mt-1.5 size-5"
                              />
                              <label className="text-base font-medium text-[#000000]">
                                {item.label}{" "}
                                <span className="font-light">
                                  ({item.openings})
                                </span>
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </aside>
          <section className="max-md:w-[832px] lg:flex-1 overflow-auto">
            <Table className="overflow-auto">
              <TableHeader>
                <TableRow className="bg-[#F6F6F6] rounded-sm text-[13px] text-[#707070] font-medium border-none">
                  <TableHead>Job Title</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Date Posted</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allOpeningsList.map((item) => {
                  return (
                    <TableRow key={item.id} className="h-[5.5rem] cursor-pointer" onClick={() => router.push(`/job-search/all-openings/${item.id}`)}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-3">
                          <div className="flex-none">
                            <Image 
                              src={item.icon}
                              alt={"Job Icon"}
                              width={48}
                              height={48}
                              className="object-contain"
                            />
                          </div>
                          <p className="text-base font-medium text-[#000000]">{item.jobTitle}</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-base font-medium text-[#000000]">{item.location}</TableCell>
                      <TableCell>{item.datePosted}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SearchAllOpenings;
