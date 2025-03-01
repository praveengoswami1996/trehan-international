"use client";
import * as React from "react";
import { PiUser } from "react-icons/pi";
import { QuotationIcon } from "./icons";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const clientOutcomes = [
  {
    id: "client_outcomes_001",
    clientComment:"Partnering with Trehan International has significantly streamlined our recruitment process. They have a unique talent for bringing the right candidates to the table, making our interviews more productive. Their expertise has helped us avoid any operational hiccups. Trehan International's dedication to understanding our needs and delivering on time has made them an invaluable partner in our talent acquisition strategy.",
    clientDesignation: "CEO",
    clientCompany: "leading Heavy Equipment leasing company",
    clientLocation: "Saudi",
  },
  {
    id: "client_outcomes_002",
    clientComment:
      "Our collaboration with Trehan International has been a game-changer. They consistently deliver candidates who not only meet our skill requirements but also fit our cultural expectations. Their approach to sourcing candidates from diverse geographies has enriched our workforce. The seamless onboarding process ensures that our operations are never disrupted. Their commitment to quality and timely delivery is unmatched.",
    clientDesignation: "Recruitment Director",
    clientCompany: "leading Construction Group",
    clientLocation: "Kuwait",
  },
  {
    id: "client_outcomes_003",
    clientComment:
      "Trehan International has been an exceptional partner in meeting our diverse recruitment needs and understanding our operational challenges and expectations. They meticulously brought in top-tier talent with specialized expertise in cranes. Their ability to source talent from all over India has significantly diversified our workforce, which has been crucial for our operations in the GCC region.",
    clientDesignation: "Operations Director",
    clientCompany: "Leading Facility Management company",
    clientLocation: "Kuwait",
  },
  {
    id: "client_outcomes_004",
    clientComment: "Trehan International ability to find candidates who are the right cultural fit and possess the necessary skills has been remarkable. They handle all aspects of the recruitment process ensuring that our new hires are ready to hit the ground running. Trehan International's professional and efficient approach has made our recruitment process smoother and more effective.",
    clientDesignation: "HR Specialist",
    clientCompany: "Leading Engineering company",
    clientLocation: "Qatar",
  },
  {
    id: "client_outcomes_005",
    clientComment: "Trehan International has a remarkable ability to source candidates from varied backgrounds who fit seamlessly into our company culture. The efficiency with which they handle the entire recruitment process, including visa and license formalities, is commendable. Thanks to Trehan International, we can focus on our operations without worrying about staffing delays.",
    clientDesignation: "HR Manager",
    clientCompany: "leading FMS company",
    clientLocation: "Kuwait",
  },
];

const TestimonialCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, playOnInit: true, stopOnInteraction: true})
  );

  return (
    <div className="w-full bg-[#FAFAFA]">
      <section className="website-container section-padding-x section-padding-y relative">
        <div className="flex flex-col xl:flex-row">
          <div className="flex-1">
            <h1 className="section-title max-xl:max-w-none xl:max-w-sm">
              Client Outcomes & Impact
            </h1>
            <p className="mt-2.5 paragraph">
              Real results. Real stories. Real impact.<br />See what our clients have achieved.
            </p>
          </div>
          <div className="h-full mt-10">
            <Carousel
              //@ts-ignore
              plugins={[plugin.current]}
              className="w-full mx-auto max-w-[37rem]"
              onMouseEnter={plugin.current.stop}
              //@ts-ignore
              onMouseLeave={plugin.current.play}
            >
              <CarouselContent>
                {clientOutcomes.map((item) => (
                  <CarouselItem key={item.id}>
                    <div
                      className="w-full max-w-[37rem] h-[27rem] mobile-lg:h-[24rem] max-sm:p-4 px-8 pt-9 pb-7 bg-white"
                      style={{ boxShadow: "0px 0px 40px 0px #0000000D" }}
                    >
                      <div className="h-full flex flex-col justify-between rounded-lg">
                        <div className="">
                          <p className="font-medium text-sm mobile-lg:text-base text-[#1A1A1A]">
                            {item.clientComment}
                          </p>
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="flex flex-col items-start mobile-lg:flex-row mobile-lg:items-center gap-3">
                            <div className="flex-none w-16 h-16 bg-[#F6F6F6] flex items-center justify-center rounded-full">
                              <PiUser className="size-8 text-[#000000]" />
                            </div>
                            <div className="flex flex-col">
                              <span className="font-medium text-xl text-[#1A1A1A]">
                                {item.clientDesignation}
                              </span>
                              <span className="font-medium text-base text-[#1A1A1A]">
                                {item.clientCompany}
                              </span>
                              <span className="text-base text-[#1A1A1A] font-light">
                                {item.clientLocation}
                              </span>
                            </div>
                          </div>

                          <div>
                            <QuotationIcon />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-black size-9 max-md:absolute max-md:top-full max-md:left-28"/>
              <CarouselNext className="border-black size-9 max-md:absolute max-md:top-full max-md:right-28"/>
            </Carousel>
          </div>
        </div>

        <div className="absolute bottom-0 max-xl:hidden">
          <Image 
            src="/half-colored-circle.svg"
            alt="Colored Ring"
            width={390}
            height={390}
          />
        </div>
      </section>
    </div>
  );
};

export default TestimonialCarousel;
