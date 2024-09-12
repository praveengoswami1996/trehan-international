"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

import React from "react";

const AccordionData = [
  {
    id: "accordion_001",
    title: "Experties in Varied Section",
    content:
      "Our deep industry knowledge across sectors enables us to understand and meet the nuanced demands of your projects.",
  },
  {
    id: "accordion_002",
    title: "Customized Recruitment Frameworks",
    content:
      "Our deep industry knowledge across sectors enables us to understand and meet the nuanced demands of your projects.",
  },
  {
    id: "accordion_003",
    title: "Efficient Scalability",
    content:
      "Our deep industry knowledge across sectors enables us to understand and meet the nuanced demands of your projects.",
  },
  {
    id: "accordion_004",
    title: "Proven Success",
    content:
      "Our deep industry knowledge across sectors enables us to understand and meet the nuanced demands of your projects.",
  },
];

interface WhyChooseTrehanProps {
  backgroundColor?: string;
}

const WhyChooseTrehan: React.FC<WhyChooseTrehanProps> = ({
  backgroundColor = "#535353",
}) => {
  return (
    <div className="w-full" style={{ backgroundColor }}>
      <section className="website-container section-padding-x section-padding-y">
        <div>
          <div className="flex flex-col lg:flex-row justify-between lg:items-start">
            <h1 className="section-title text-[#ffffff] max-lg:text-center">
              Why Choose Trehan International
            </h1>
            <p className="mt-3 text-base md:text-[1.125rem] md:leading-[1.69rem] text-[#ffffff] max-w-xl font-medium max-lg:text-center max-lg:mx-auto">
              Our Competitive Edge: Proven strategies for Meeting your Project Demands with Precision and Expertise through our Recruitment Solutions.
            </p>
          </div>

          <div className="mt-8 lg:mt-14 w-full flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 relative h-[20rem] sm:h-[24rem] lg:h-[32.5rem]">
              <Image
                src={"/why-choose-trehan.png"}
                alt="People Discussing in a meeting"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 lg:h-[32.5rem] bg-white px-3 lg:px-12 py-5 lg:py-20">
              <div className="w-full h-full">
                <Accordion type="single" collapsible className="w-full">
                  {AccordionData.map((item, index) => {
                    return (
                      <AccordionItem
                        className="border-none"
                        key={item.id}
                        value={`item-${index + 1}`}
                      >
                        <AccordionTrigger className="font-sintony font-bold text-base lg:text-2xl lg:leading-[2.25rem] text-[#1A1A1A] hover:no-underline text-left">
                          {item.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm lg:text-[1.125rem] lg:leading-[1.69rem] text-[#535353]">
                          {item.content}
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseTrehan;
