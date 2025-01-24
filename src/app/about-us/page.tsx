"use client";
import IntroVideo from "@/components/AboutUs/IntroVideo";
import WhyChooseTrehan from "@/components/AboutUs/WhyChooseTrehan";
import BreadCrumbs from "@/components/BreadCrumbs";
import FeatureSection from "@/components/FeatureSection";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import ImageContentPanel from "@/components/ImageContentPanel";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

interface StoryContentItem {
  id: string;
  storyTitle: string;
  year: string;
  description: string;
  imageURL: string;
}

interface TimeLineProps {
  storyContent: StoryContentItem[];
}

interface DirectorMessageParagraphProps {
  text: string;
}

const AboutData = [
  {
    id: "about_001",
    title: "2 Million+",
    subtitle: "Candidates in our database",
  },
  {
    id: "about_002",
    title: "45 Years+",
    subtitle: "Trusted since 1976",
  },
  {
    id: "about_003",
    title: "1,00,000+",
    subtitle: "Social media followers",
  },
  {
    id: "about_004",
    title: "100+",
    subtitle: "Clients across 6 industries",
  },
  {
    id: "about_005",
    title: "5+",
    subtitle: "Cities with pan-india presence",
  },
  {
    id: "about_006",
    title: "50+",
    subtitle: "Resources nationwide",
  },
];

const ourStoryData = [
  {
    id: "story_001",
    title: "Before Technology",
    timeSpan: "1976 - 1986",
  },
  {
    id: "story_002",
    title: "With Technology",
    timeSpan: "1987 - 2001",
  },
  {
    id: "story_003",
    title: "Digital Era",
    timeSpan: "2003 & Beyond",
  },
];

const storyContent = [
  {
    id: "story_001_001",
    storyTitle: "Inception",
    year: "1976",
    description:
      "Trehan International was established in Delhi, India, registered with the Ministry of Labour and Employment, Government of India.",
    imageURL: "/story-1.png",
  },
  {
    id: "story_001_002",
    storyTitle: "Partnership",
    year: "1980",
    description:
      "Partnership with M/s. Adam Dad Mohammed Al Raisi Trading in Muscat.",
    imageURL: "/story-2.png",
  },
  {
    id: "story_001_003",
    storyTitle: "Meeting for skilled manpower",
    year: "1986",
    description:
      "Meeting the demand for skilled manpower during the economic boom in the Middle East.",
    imageURL: "/story-3.png",
  },
];

const ourBrands = [
  {
    id: "our_brands_001",
    brandName: "Frontline Express",
    brandDescription:
      "FLEX is a dynamic brand that embodies a result-oriented approach to recruitment, managing our clients’ hiring needs from sourcing to onboarding. Whether it’s bulk hiring or niche talent acquisition, FLEX ensures timely delivery with unmatched quality, aligning perfectly with the unique needs of every industry.",
    brandImageURL: "/our-brands-1.png",
  },
  {
    id: "our_brands_002",
    brandName: "Attest My Doc",
    brandDescription:
      "AMD is our dedicated business vertical that provides comprehensive attestation and documentation solutions, ensuring seamless processing of all your legal and administrative requirements. From degree attestation to visa stamping, we offer end-to-end services, ensuring accuracy, timeliness, and peace of mind for our clients.",
    brandImageURL: "/our-brands-2.png",
  },
];

const ourPartners = [
  {
    id: "our_partners_001",
    brandImageURL: "/partners/fawaz.png",
    alt: "Fawaz Trading & Engineering Services Co. Brand Logo",
  },
  {
    id: "our_partners_002",
    brandImageURL: "/partners/rt.png",
    alt: "Refreshment Trading Co. Brand Logo",
  },
  {
    id: "our_partners_003",
    brandImageURL: "/partners/jtc.png",
    alt: "JTC Brand Logo",
  },
  {
    id: "our_partners_004",
    brandImageURL: "/partners/al-ahlia.png",
    alt: "Al-ahlia Integrated General Trading & Contracting Co. Brand Logo",
  },
  {
    id: "our_partners_005",
    brandImageURL: "/partners/alghanim.png",
    alt: "Alghanim Engineering Brand Logo",
  },
  {
    id: "our_partners_006",
    brandImageURL: "/partners/gulf.png",
    alt: "Gulf Engineering Co. Brand Logo",
  },
  {
    id: "our_partners_007",
    brandImageURL: "/partners/ues.png",
    alt: "UES Mechanical Brand Logo",
  },
  {
    id: "our_partners_008",
    brandImageURL: "/partners/kptc.png",
    alt: "KPTC Brand Logo",
  },
  {
    id: "our_partners_009",
    brandImageURL: "/partners/heisco.png",
    alt: "HEISCO Brand Logo",
  },
  {
    id: "our_partners_010",
    brandImageURL: "/partners/galfar.png",
    alt: "Galfar brand Logo",
  },
  {
    id: "our_partners_011",
    brandImageURL: "/partners/asco.png",
    alt: "ASCO Brand Logo",
  },
  {
    id: "our_partners_012",
    brandImageURL: "/partners/krh.png",
    alt: "KRH Brand Logo",
  },
];

const TimeLineMobile: React.FC<TimeLineProps> = ({ storyContent }) => {
  return (
    <div className="flex flex-col md:hidden">
      {storyContent.map((item, index) => {
        return (
          <div
            key={item.id}
            className="ml-2 mobile-xl:ml-5 pl-5 mobile-xl:pl-10 pb-8 border-l-2 border-[#E2C886] relative"
          >
            <div className="flex-none w-full max-w-[17.125rem] h-[10.5rem] relative rounded-lg overflow-hidden">
              <Image
                src={item.imageURL}
                alt="a typewriter"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-2">
              <h5
                className={
                  "font-sintony font-bold text-white text-xl leading-[1.875rem]"
                }
              >
                {item.storyTitle}
              </h5>
              <p className={"text-[1.125rem] text-white leading-7 font-medium"}>
                {item.year}
              </p>
              <p className={"mt-3 text-base text-white font-normal"}>
                {item.description}
              </p>
            </div>

            <div className="size-[17px] bg-[#E2AF45] rounded-full absolute -top-2 -left-2.5" />
          </div>
        );
      })}
    </div>
  );
};

const TimeLine: React.FC<TimeLineProps> = ({ storyContent }) => {
  return (
    <div className="hidden md:flex flex-col">
      {storyContent.map((item, index) => {
        const isOddItem = index % 2 !== 0;
        return (
          <div
            key={item.id}
            className={cn(
              "w-full flex flex-row justify-center",
              isOddItem && "flex-row-reverse"
            )}
          >
            <div
              className={cn(
                "flex flex-1",
                isOddItem ? "pl-10 justify-start" : "pr-10 justify-end"
              )}
            >
              <div className="flex-none w-[17.125rem] h-[10.5rem] relative rounded-lg overflow-hidden">
                <Image
                  src={item.imageURL}
                  alt="a typewriter"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-[2px] bg-[#E2C886] items-stretch" />
            <div
              className={cn(
                "flex-1 pl-10 pb-24 relative",
                isOddItem && "pl-0 pr-10"
              )}
            >
              <h5
                className={cn(
                  "font-sintony font-bold text-white text-xl leading-[1.875rem]",
                  isOddItem && "text-right"
                )}
              >
                {item.storyTitle}
              </h5>
              <p
                className={cn(
                  "text-[1.125rem] text-white leading-7 font-medium",
                  isOddItem && "text-right"
                )}
              >
                {item.year}
              </p>
              <p
                className={cn(
                  "mt-3 text-base text-white font-normal",
                  isOddItem && "text-right"
                )}
              >
                {item.description}
              </p>

              <div
                className={cn(
                  "size-[17px] bg-[#E2AF45] rounded-full absolute -top-2",
                  isOddItem ? "-right-2.5" : "-left-2.5"
                )}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const DirectorMessageParagraph: React.FC<DirectorMessageParagraphProps> = ({
  text,
}) => {
  return (
    <div className="max-xl:ml-2 pl-4 py-0 relative before:absolute before:w-[5px] before:h-[95%] before:left-0 before:top-1/2 before:-translate-y-1/2 before:bg-amber-500">
      <p className="text-sm md:text-base lg:text-[1.125rem] lg:leading-[1.69rem] font-normal text-[#535353]">
        {text}
      </p>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="page">
      {/* About Data Section */}
      <div className="w-full">
        <section className="website-container section-padding-x section-padding-bottom">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center gap-5">
              <div className="mx-auto">
                <BreadCrumbs />
              </div>

              <h1 className="hero-text mt-3 text-center max-w-2xl lg:max-w-4xl mx-auto">
                Pioneering Human Mobility and Client Success
              </h1>
              <p className="paragraph text-center max-w-[52rem] mx-auto">
                At Trehan International, our vision is to redefine the landscape
                of global recruitment by empowering human mobility, thus
                unlocking economic opportunities and facilitating cultural
                exchange. We aim to create a world where talent knows no
                borders, and every individual can thrive in a global community
                enriched with diverse skills and perspectives.
              </p>
            </div>

            {/* About Us Stats */}
            <div className="mt-8 lg:mt-16 w-full grid grid-cols-1 mobile-2xl:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
              {AboutData.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="border border-[#C5C5C5] p-4 flex flex-col items-center justify-center bg-[#FDFDFD] hover:bg-[#000000] rounded-full group transform transition-all duration-500 hover:scale-110"
                  >
                    <h3 className="font-sintony font-bold text-[2rem] leading-[3rem] text-center text-[#000000] group-hover:text-white">
                      {item.title}
                    </h3>
                    <p className="paragraph text-center max-w-48 group-hover:text-white">
                      {item.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-7 lg:mt-14">
              <Link href="/contact-us">
                <Button type="submit">Unlock Talent Supply</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Sample Video Section */}
      <div className="h-[28rem] lg:h-screen w-full relative">
        <section className="website-container section-padding-x h-full relative z-[1]">
          <IntroVideo />
        </section>
        <div className="absolute w-full h-1/2 bg-[#FFFFFF] top-0 left-0" />
        <div className="absolute w-full h-1/2 bg-[#FAFAFA] bottom-0 left-0" />
      </div>

      {/* Director's Message Section */}
      <div className="w-full bg-[#FAFAFA]">
        <section className="xl:min-h-screen website-container section-padding-x max-lg:section-padding-y section-padding-top relative">
          <div className="w-full h-full flex flex-col xl:flex-row">
            <div className="hidden xl:block flex-1" />

            {/* Director's Image for Smaller Screens */}
            <div className="xl:hidden overflow-hidden relative size-[15rem] mobile-sm:size-[19rem] mobile-md:size-[22rem] mobile-lg:size-[24rem] sm:size-[30rem] mx-auto flex items-center justify-center">
              <Image
                src={"/bg-pattern.svg"}
                alt="Background Pattern Image"
                fill
              />
              <div className="flex-none w-4/5 h-4/5 rounded-full bg-[#E1E1E1] p-2 z-10">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={"/director.png"}
                    alt={"Director of Trehan International"}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            <div className="max-xl:mt-3 flex-1 flex flex-col gap-6 xl:gap-12 justify-center">
              <div className="flex flex-col gap-3">
                <h1 className="section-title xl:-ml-8 min">
                  Director&apos;s Message
                </h1>
                <DirectorMessageParagraph
                  text="In 1976, I established TI in a modest, single-room office in
                    New Delhi with one clear objective: to bring the right
                    people together. Over the last four decades, we have grown
                    from those humble beginnings into a dynamic, global
                    operation—successfully placing more than 150,000
                    professionals across the GCC. Through every milestone, we
                    have upheld our guiding belief: that our clients and
                    candidates deserve nothing but the very best."
                />
                <DirectorMessageParagraph text="Our journey has been shaped by the passion, skill, and dedication of every individual who has joined hands with us. Today, TI stands as a testament to our core values—trust, integrity, compassion, and excellence—which continue to inform each of our decisions and every single placement. By understanding the unique needs of employers, be they Hiring Managers, CEOs, or COOs, and aligning these with the aspirations of talented professionals, we aim to foster meaningful relationships that drive growth and success on both sides." />
              </div>
            </div>
          </div>

          {/* Director's Image for Larger Screens */}
          <div className="hidden xl:block absolute w-1/2 h-full left-0 top-1/2 -translate-y-1/2 mt-10">
            <div className="w-full h-full relative flex items-center justify-center">
              <Image
                src={"/bg-pattern.svg"}
                alt="Background Pattern Image"
                fill
              />
              <div className="flex-none size-[24rem] xl:size-[30rem] rounded-full bg-[#E1E1E1] p-2 z-10">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={"/director.png"}
                    alt={"Director of Trehan International"}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="pt-0 xl:pt-10 section-padding-x bg-[#FAFAFA]">
        <DirectorMessageParagraph text="As we look to the future, we remain committed to the same spirit that sparked our beginnings. We will continue to evolve, embracing new technologies and practices, while never losing sight of what truly matters: genuine care for the people we serve. Whether you are seeking to build a high-performing team or explore new career horizons, know that TI stands ready to walk with you—offering unwavering support, expertise, and a dedication to helping you achieve your greatest goals." />
        <br />
        <DirectorMessageParagraph text="We invite you to be part of this legacy, one built on the belief that success is best shared. Let us work together to make lasting contributions that bring about a brighter future for all. Remember: our greatest wealth lies not just in numbers or achievements, but in the lives we touch and the opportunities we create for others." />

        <div className="mt-5">
          <p className="font-normal text-[1.125rem] leading-[1.69rem] text-gray-400">
            --From my heart to yours
          </p>
          <div className="mt-3">
            <h4 className="font-sintony font-bold text-2xl leading-[2.25rem] text-[#1A1A1A]">
              Mr. Satish Trehan
            </h4>
            <p className="font-normal text-[1.125rem] leading-[1.69rem] text-[#535353]">
              Founding Father
            </p>
          </div>
        </div>
      </div>

      {/* Our Vision/Our Mission Section */}
      <div className="bg-[#FAFAFA] lg:pt-20">
        <div className="w-full bg-[#ffffff]">
          <section className="website-container section-padding-x section-padding-y relative overflow-hidden">
            <div className="hidden xl:block absolute -left-[18.5rem] -bottom-32 size-[45rem]">
              <Image
                src={"/bg-pattern.svg"}
                alt="Background Pattern Image"
                fill
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="flex flex-col gap-10 xl:gap-20">
              <ImageContentPanel
                id="ourvision"
                title={"Our Vision"}
                content={
                  <>
                    To emerge as the foremost global partner for organizations
                    in pursuit of Top-tier manpower, distinguished by our
                    unwavering commitment to integrity, expertise, and the
                    success of our clients.
                    <br />
                    <br /> Through seamless mobility, we strive to foster
                    economic growth, personal development, and a deeper
                    cross-cultural understanding, contributing to a more
                    connected and prosperous world.
                  </>
                }
                imageUrl="/our-vision.png"
                altText="A hand holding a puzzle piece"
              />

              <ImageContentPanel
                id="ourmission"
                title={"Our Mission"}
                content={
                  <>
                    To revolutionize the recruitment industry by prioritizing
                    our client&apos;s interests, connecting global businesses
                    with Exceptional talent pool, from South East Asian
                    countries, India, Nepal, Sri Lanka, Bangladesh, Pakistan,
                    Bhutan. <br />
                    <br />
                    We are dedicated to delivering innovative recruitment
                    solutions and forging partnerships that are mutually
                    beneficial, ensuring the success of our clients and the
                    professional growth of our candidates.
                  </>
                }
                imageUrl="/our-mission.png"
                altText="A hand holding a puzzle piece"
                imagePlacement="left"
              />
            </div>
          </section>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="w-full bg-[#000000]">
        <section className="min-h-screen website-container px-2 sm:px-5 lg:px-10 xl:px-14 2xl:px-36 pt-16 pb-0 relative overflow-hidden">
          <div className="hidden xl:block absolute size-[45rem] -right-[6rem] -top-[30rem]">
            <Image
              src={"/bg-pattern-black.svg"}
              alt={"Background Pattern Image"}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="section-title text-[#ffffff]">Our Story</h1>
            <h4 className="text-2xl leading-[2rem] font-sintony font-bold text-[#ffffff]">
              Pioneering Excellence in Talent Acquisition
            </h4>

            <div className="mt-7 xl:mt-14 flex flex-col xl:flex-row xl:items-start gap-10">
              <div className="flex-none flex flex-col gap-5">
                {ourStoryData.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="w-full mobile-xl:w-[18.75rem] bg-[#373737] relative before:absolute before:top-0 before:left-0 before:h-full before:w-[7px] before:bg-[#599F99] p-3 pl-8"
                      role="button"
                    >
                      <p className="text-[1.125rem] leading-7 text-white font-medium">
                        {item.title}
                      </p>
                      <p className="text-2xl leading-[2.25rem] text-[#599F99] font-bold">
                        {item.timeSpan}
                      </p>
                    </div>
                  );
                })}
              </div>

              <TimeLineMobile storyContent={storyContent} />
              <TimeLine storyContent={storyContent} />
            </div>
          </div>
        </section>
      </div>

      {/* Our Brands Section */}
      <div className="w-full bg-[#C6485D]">
        <section className="website-container section-padding-x  section-padding-y">
          <div className="flex flex-col items-center">
            <h1 className="section-title text-[#ffffff] text-center">
              Our Brands
            </h1>
            <div className="w-full mt-10 grid justify-items-center grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16">
              {ourBrands.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="w-full max-w-[35.75rem] bg-white flex flex-col"
                  >
                    <div className="flex-none w-full h-[15rem] bg-[#000000] relative flex">
                      <Image
                        src={item.brandImageURL}
                        alt={item.brandName}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-grow p-3 sm:p-6 flex flex-col justify-between items-start">
                      <h4 className="font-sintony font-bold text-2xl leading-[2.25rem] text-[#000000]">
                        {item.brandName}
                      </h4>
                      <p className="font-normal text-base text-[#000000]">
                        {item.brandDescription}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* Companies We've Worked Section */}
      <div className="w-full">
        <section className="website-container section-padding-x section-padding-y">
          <div className="flex flex-col items-center">
            <h5 className="font-sintony font-bold text-xl leading-[1.875rem] text-center text-[#535353]">
              Companies We&apos;ve Worked With
            </h5>
            <div className="w-full mt-8 md:mt-16 grid justify-items-center grid-cols-1 mobile-sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-8 md:gap-16">
              {ourPartners.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="relative flex-none w-[10rem] h-[3.7rem] bg-white"
                  >
                    <Image
                      src={item.brandImageURL}
                      alt={item.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* Why Choose Trehan Internation Section */}
      <WhyChooseTrehan />

      {/* Feature Section */}
      <FeatureSection />
    </div>
  );
};

export default AboutUs;
