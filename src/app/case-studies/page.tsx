import BreadCrumbs from "@/components/BreadCrumbs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const caseStudies = [
  {
    id: "case_study_001",
    desc: "Catering to Manpower Needs of one of the largest hypermarket chains in India Client: A Catering to",
    caseImageUrl: "/case-studies/case-1.png",
  },
  {
    id: "case_study_002",
    desc: "No. 1 sourcing partner for one of the largest payment solutions provider in India Client:...",
    caseImageUrl: "/case-studies/case-2.png",
  },
  {
    id: "case_study_003",
    desc: "FOS Program for a Leading Digital Payments Company Client: A Leading Digital Payments...",
    caseImageUrl: "/case-studies/case-3.png",
  },
  {
    id: "case_study_004",
    desc: "A third-party logistics company with three locations in DFW juggling four staffing agencies",
    caseImageUrl: "/case-studies/case-4.png",
  },
  {
    id: "case_study_005",
    desc: "An international automated warehouse technology construction company expande...",
    caseImageUrl: "/case-studies/case-5.png",
  },
  {
    id: "case_study_006",
    desc: "An industrial equipment warehouse company struggling with low hiring volumes",
    caseImageUrl: "/case-studies/case-6.png",
  },
  {
    id: "case_study_007",
    desc: "Catering to Manpower Needs of one of the largest hypermarket chains in India Client: A",
    caseImageUrl: "/case-studies/case-7.png",
  },
  {
    id: "case_study_008",
    desc: "No. 1 sourcing partner for one of the largest payment solutions provider in India Client",
    caseImageUrl: "/case-studies/case-8.png",
  },
  {
    id: "case_study_009",
    desc: "FOS Program for a Leading Digital Payments Company Client: A Leading Digital Payments",
    caseImageUrl: "/case-studies/case-9.png",
  },
  {
    id: "case_study_010",
    desc: "A third-party logistics company with three locations in DFW juggling four staffing agencies",
    caseImageUrl: "/case-studies/case-10.png",
  },
  {
    id: "case_study_011",
    desc: "An international automated warehouse technology construction company expanded",
    caseImageUrl: "/case-studies/case-11.png",
  },
  {
    id: "case_study_012",
    desc: "An industrial equipment warehouse company struggling with low hiring volumes",
    caseImageUrl: "/case-studies/case-12.png",
  },
];

const OurCaseStudies = () => {
  return (
    <div className="page">
      <div className="hidden mobile-sm:block absolute top-10 md:-top-36 lg:-top-10 left-1/2 -translate-x-1/2 size-[15rem] mobile-sm:size-[20rem] md:size-[33.25rem]">
        <Image
          src="/bg-pattern-20.svg"
          alt="Background Pattern Image"
          fill
          className="object-contain"
        />
      </div>

      {/* Hero Section */}
      <div className="w-full">
        <section className="website-container section-padding-x section-padding-bottom">
          <div className="flex flex-col items-center">
            <BreadCrumbs />
            <div className="mt-5 w-full flex flex-col items-center">
              <h1 className="font-sintony text-[2.4rem] lg:text-[3.25rem] leading-[3rem] lg:leading-[4.88rem] font-bold text-center max-w-4xl mx-auto">
                Case Studies
              </h1>
              <p className="paragraph text-center mt-5 max-w-[34rem] mx-auto">
                Lorem ipsum dolor sit amet consectetur. Sit in nec sagittis amet
                sed convallis nibh.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Case Studies */}
      <div className="w-full border-b border-[#D9D9D9]">
        <section className="website-container section-padding-x section-padding-bottom pt-0 mobile-sm:pt-16 mobile-md:pt-20">
          <div className="flex flex-col items-center">
            <div className="w-full grid justify-items-center grid-cols-1 mobile-2xl:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudies.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="w-full max-w-[24rem] h-[25.5rem] bg-[#F2F3F4] rounded-md overflow-hidden flex flex-col"
                  >
                    <div className="flex-none w-full h-[15rem] relative overflow-hidden">
                      <Image
                        src={item.caseImageUrl}
                        alt={"Case Image"}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-grow p-2 mobile-sm:p-3 mobile-md:p-5 flex flex-col items-start justify-between">
                      <div className="line-clamp-3">
                        <p className="font-sintony font-bold text-xl leading-[1.875rem]">
                          {item.desc}
                        </p>
                      </div>
                      <button
                        type="button"
                        className="font-semibold text-base text-[#2157BF] underline text-left"
                      >
                        Download PDF Case Study
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-14">
              <Button variant={"outline"} className={"w-fit border-[#1A1A1A]"}>
                Load More
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurCaseStudies;
