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

const WhyChooseTrehan = () => {
  return (
    <div className="w-full bg-[#535353]">
      <section className="w-full max-w-[1440px] mx-auto px-2 sm:px-5 lg:px-10 xl:pl-14 2xl:px-24 pt-12 md:pt-16 xl:pt-24 pb-12 md:pb-16 xl:pb-24">
        <div>
          <div className="flex justify-between items-end">
            <h1 className="section-title text-[#ffffff]">
              Why Choose Trehan International
            </h1>
            <p className="text-base md:text-[1.125rem] md:leading-[1.69rem] font-normal text-[#ffffff] max-w-xl">
              Lorem ipsum dolor sit amet consectetur. Faucibus lectus enim
              sempersed. Tellus donec lectus at in sapien fermentum.
            </p>
          </div>

          <div className="mt-14 w-full flex">
            <div className="w-1/2 relative h-[32.5rem]">
              <Image
                src={"/why-choose-trehan.png"}
                alt="People Discussing in a meeting"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-1/2 h-[32.5rem] bg-white px-12 py-20">
              <div className="w-full h-full">
                <Accordion type="single" collapsible className="w-full">
                  {AccordionData.map((item, index) => {
                    return (
                      <AccordionItem className="border-none" key={item.id} value={`item-${index + 1}`}>
                        <AccordionTrigger className="font-sintony font-bold text-2xl leading-[2.25rem] text-[#1A1A1A] hover:no-underline">
                          {item.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-[1.125rem] leading-[1.69rem] text-[#535353]">
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
