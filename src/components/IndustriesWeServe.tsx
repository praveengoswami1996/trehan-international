'use client';
import React, { ComponentType } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import {
  ANTIcon,
  EICIcon,
  FMIcon,
  HCIcon,
  IMIcon,
  LSCMIcon,
  OGEIcon,
  RFBIcon,
} from "./icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const industriesWeServe = [
  {
    id: "industry_001",
    icon: EICIcon,
    label: "Engineering, Infrastructure and Construction",
  },
  {
    id: "industry_002",
    icon: OGEIcon,
    label: "Oil, Gas and Energy",
  },
  {
    id: "industry_003",
    icon: FMIcon,
    label: "Facility Management",
  },
  {
    id: "industry_004",
    icon: IMIcon,
    label: "Industrial Manufacturing",
  },
  {
    id: "industry_005",
    icon: HCIcon,
    label: "Healthcare",
  },
  {
    id: "industry_006",
    icon: ANTIcon,
    label: "Automotive and Transportation",
  },
  {
    id: "industry_007",
    icon: LSCMIcon,
    label: "Logistic & Supply Chain Management",
  },
  {
    id: "industry_008",
    icon: RFBIcon,
    label: "Retail, Food and Beverage",
  },
];

interface IndustryItemProps {
  icon: ComponentType<{ className?: string }>;
  label: string;
  position: string;
  labelClasses: string;
  onClick?: () => void;
}

const IndustryItem: React.FC<IndustryItemProps> = ({
  icon,
  label,
  position,
  labelClasses,
  onClick
}) => {
  const Icon = icon;

  return (
    <div className={cn("absolute", position)} onClick={onClick}>
      <div
        className="flex-none p-5 rounded-full bg-[#E2AF45] flex items-center justify-center relative size-[6.25rem] shadow-industry transform transition-transform duration-150 hover:scale-110 cursor-pointer  hover:shadow-glow-gold"
      >
        <Icon className="text-white" />
        <h5
          className={cn(
            "absolute text-xl text-center font-sintony font-bold",
            labelClasses
          )}
        >
          {label}
        </h5>
      </div>
    </div>
  );
};

const IndustriesWeServe = () => {
  const router = useRouter();

  return (
    <div className="w-full bg-[#F2F3F4]">
      <section className="website-container section-padding-x section-padding-y min-h-screen">
        <div className="flex flex-col items-center">
          <h1 className="section-title text-center">
            Industries We Serve
          </h1>
          <p className="mt-3 paragraph text-center max-w-[60rem]">
            Trehan International is a recruitment consultancy with a focus on revolutionizing the field of recruitment. Over the past four decades, Trehan International has transformed into a prominent and highly respected recruitment consultancy in India and Southeast Asia.
          </p>

          {/* Image - for smaller screens */}
          <div className="lg:hidden overflow-hidden relative size-[15rem]  mobile-sm:size-[19rem] mobile-md:size-[22rem] mobile-lg:size-[24rem] sm:size-[30rem] mx-auto flex items-center justify-center mt-10">
            <Image
              src={"/bg-pattern.svg"}
              alt="Background Pattern Image"
              fill
            />
            <div className="w-4/5 h-4/5 rounded-full relative overflow-hidden">
              <Image
                src={"/industries.png"}
                alt={"Industries Representation Image"}
                fill
                className="object-cover object-left"
              />
            </div>
          </div>

          {/* industries cards - for smaller screens */}
          <div className="mt-10 w-full grid grid-cols-1 sm:grid-cols-2 gap-5 lg:hidden">
            {industriesWeServe.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="flex flex-col items-center gap-2 bg-white p-5 rounded-md shadow-sm"
                  onClick={() => router.push(`/industries#industry_00${index + 1}`)}
                >
                  <div
                    className="flex-none p-5 rounded-full bg-[#E2AF45] flex items-center justify-center relative size-[6.25rem]"
                    style={{ boxShadow: "0px 0px 60px 0px #00000026" }}
                  >
                    <Icon className="text-white" />
                  </div>
                  <p className="font-sintony font-bold text-xl text-center">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* industries circular wheel - for larger screens */}
          <div className="hidden mt-28 w-full lg:flex justify-center">
            <div className="size-[34rem] xl:size-[37.5rem] relative flex items-center justify-center p-8 mx-auto">
              <Image
                src={"/bg-pattern.svg"}
                alt="Background Pattern Image"
                fill
              />
              <div className="w-full h-full rounded-full border border-[#599F99] relative p-[4.5rem]">
                <Image
                  src={"/bg-star.svg"}
                  alt={"Background Pattern Image"}
                  fill
                />
                <div className="w-full h-full rounded-full relative overflow-hidden">
                  <Image
                    src={"/industries.png"}
                    alt={"Industries Representation Image"}
                    fill
                    className="object-cover object-left"
                  />
                </div>

                <IndustryItem
                  icon={EICIcon}
                  label={"Engineering, Infrastructure and Construction"}
                  position="-top-12 left-1/2 -translate-x-1/2"
                  labelClasses="bottom-full mb-2 w-[20rem]"
                  onClick={() => router.push("/industries#industry_001")}
                />
                <IndustryItem
                  icon={OGEIcon}
                  label={"Oil, Gas and Energy"}
                  position="top-[5rem] left-7 -translate-y-1/2"
                  labelClasses="top-1/2 -translate-y-1/2 right-full mr-2 w-[8rem] text-right"
                  onClick={() => router.push("/industries#industry_002")}
                />
                <IndustryItem
                  icon={FMIcon}
                  label={"Facility Management"}
                  position="top-1/2 -translate-y-1/2 -left-12"
                  labelClasses="top-1/2 -translate-y-1/2 right-full mr-2 w-[8.5rem] text-right"
                  onClick={() => router.push("/industries#industry_004")}
                />
                <IndustryItem
                  icon={IMIcon}
                  label={"Industrial Manufacturing"}
                  position="bottom-9 left-7"
                  labelClasses="top-1/2 -translate-y-1/2 right-full mr-2 w-[9.5rem] text-right"
                  onClick={() => router.push("/industries#industry_006")}
                />
                <IndustryItem
                  icon={HCIcon}
                  label={"Healthcare"}
                  position="-bottom-12 left-1/2 -translate-x-1/2"
                  labelClasses="top-full mt-2 w-[10rem]"
                  onClick={() => router.push("/industries#industry_008")}
                />
                <IndustryItem
                  icon={ANTIcon}
                  label={"Automotive and Transportation"}
                  position="bottom-9 right-7"
                  labelClasses="top-1/2 -translate-y-1/2 left-full ml-2 w-[10rem] text-left"
                  onClick={() => router.push("/industries#industry_007")}
                />
                <IndustryItem
                  icon={LSCMIcon}
                  label={"Logistic & Supply Chain Management"}
                  position="top-1/2 -translate-y-1/2 -right-12"
                  labelClasses="top-1/2 -translate-y-1/2 left-full ml-2 w-[13rem] text-left"
                  onClick={() => router.push("/industries#industry_005")}
                />
                <IndustryItem
                  icon={RFBIcon}
                  label={"Retail, Food and Beverage"}
                  position="top-[5rem] right-7 -translate-y-1/2"
                  labelClasses="top-1/2 -translate-y-1/2 left-full ml-2 w-[9rem] text-left"
                  onClick={() => router.push("/industries#industry_003")}
                />
              </div>
            </div>
          </div>

          {/* CTA button - navigates to Industries Page */}
          <div className="mt-10 lg:mt-28">
            <Link href={"/industries"}>
              <Button
                variant={"outline"}
                className={"w-fit border-[#1A1A1A] bg-[#F2F3F4]"}
              >
                Explore All
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesWeServe;
