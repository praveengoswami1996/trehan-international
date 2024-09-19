import TeamCelebration from "@/components/AboutUs/TeamCelebration";
import BenefitCard from "@/components/BenefitCard";
import BreadCrumbs from "@/components/BreadCrumbs";
import {
  DesignIcon12,
  DesignIcon13,
  DesignIcon14,
  DesignIcon15,
  DesignIcon6,
} from "@/components/icons";
import ImageContentPanel from "@/components/ImageContentPanel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const benefits = [
  {
    id: "benefits_001",
    title: "Friendly Environment",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vitae purus volutpat rhoncus eu mattis",
    icon: DesignIcon12,
  },
  {
    id: "benefits_002",
    title: "Interest-based work",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vitae purus volutpat rhoncus eu mattis",
    icon: DesignIcon13,
  },
  {
    id: "benefits_003",
    title: "Work ownerships",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vitae purus volutpat rhoncus eu mattis",
    icon: DesignIcon14,
  },
  {
    id: "benefits_004",
    title: "Idea Tanks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vitae purus volutpat rhoncus eu mattis",
    icon: DesignIcon6,
  },
  {
    id: "benefits_005",
    title: "Exciting and varied domains",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vitae purus volutpat rhoncus eu mattis",
    icon: DesignIcon15,
  },
];

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
];

const Career = () => {
  return (
    <div className="page">
      <div className="hidden lg:block absolute -top-40 left-1/2 -translate-x-1/2 size-[50.125rem]">
        <Image
          src="/bg-pattern-10.svg"
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
                Life{" "}
                <span className="text-[#E2AF45]">@Trehan International</span>
              </h1>
              <p className="paragraph text-center mt-5 max-w-[52rem] mx-auto">
                At Trehan International, our vision is to redefine the landscape
                of global recruitment by empowering human mobility, thus
                unlocking economic opportunities and facilitating cultural
                exchange. We aim to create a world where talent knows no
                borders, and every individual can thrive in a global community
                enriched with diverse skills and perspectives.
              </p>

              <div className="mt-7 xl:mt-14">
                <Button type="submit">See Our Vacancies</Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Benefits Section */}
      <div className="w-full">
        <section className="website-container section-padding-x pt-12 section-padding-bottom">
          <div className="flex flex-col items-center">
            <h1 className="section-title text-center">Benefits</h1>
            <p className="mt-2.5 paragraph text-center max-w-2xl">
              Lorem ipsum dolor sit amet consectetur. Faucibus lectus enim
              semper sed. Tellus donec lectus at in sapien fermentum.
            </p>

            <div className="w-full mt-10 flex justify-center flex-wrap gap-6">
              {benefits.map((item) => {
                return (
                  <BenefitCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* Our Mission/Our Vision Section */}
      <div className="w-full bg-[#FAFAFA]">
        <section className="website-container section-padding-x section-padding-y">
          <div className="flex flex-col gap-10 xl:gap-20">
            <ImageContentPanel
              title={"Our Mission"}
              content={
                <>
                  To revolutionize the recruitment industry by prioritizing our
                  client&apos;s interests, connecting global businesses with
                  Exceptional talent pool, from South East Asian countries,
                  India, Nepal, Sri Lanka, Bangladesh, Pakistan, Bhutan. <br />
                  <br />
                  We are dedicated to delivering innovative recruitment
                  solutions and forging partnerships that are mutually
                  beneficial, ensuring the success of our clients and the
                  professional growth of our candidates.
                </>
              }
              imageUrl="/our-mission-2.png"
              altText="A corporate office"
              imagePlacement="left"
            />

            <ImageContentPanel
              title={"Our Vision"}
              content={
                <>
                  To emerge as the foremost global partner for organizations in
                  pursuit of Top-tier manpower, distinguished by our unwavering
                  commitment to integrity, expertise, and the success of our
                  clients. <br />
                  <br />
                  Through seamless mobility, we strive to foster economic
                  growth, personal development, and a deeper cross-cultural
                  understanding, contributing to a more connected and prosperous
                  world.
                </>
              }
              imageUrl="/our-vision-2.png"
              altText="People holding hands"
            />
          </div>
        </section>
      </div>

      {/* Team Celebration Section */}
      <TeamCelebration />

      {/* Open Positions Section */}
      <div className="w-full">
        <section className="website-container pt-12 pb-12 section-padding-x">
          <div className="flex flex-col items-center">
            <h1 className="section-title text-center">Open Positions</h1>
            <div className="mt-8 w-full flex flex-col gap-5">
              {openPositions.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="w-full max-w-4xl mx-auto p-3 mobile-lg:p-5 md:p-10 bg-[#FAFAFA] flex flex-col gap-5 md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <h4 className="font-sintony font-bold text-2xl leading-[2.25rem] text-[#1A1A1A]">
                        {item.jobTitle}
                      </h4>
                      <p className="text-base text-[#535353] font-normal">
                        {item.jobDetails}
                      </p>
                    </div>
                    <Link
                      href={"/about-us/career/our-openings"}
                      className="font-sintony font-bold text-base text-[#599F99]"
                    >
                      Learn more & Apply
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className="mt-10">
              <Link href={"/about-us/career/our-openings"}>
                <Button
                  type="button"
                  variant={"outline"}
                  className={"w-fit border-[#1A1A1A]"}
                >
                  View All Openings
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Career;
