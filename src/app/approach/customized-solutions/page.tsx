import BannerImageWrapper from "@/components/approach/BannerImageWrapper";
import BenefitsSectionWrapper from "@/components/approach/BenefitsSectionWrapper";
import HeroSectionWrapper from "@/components/approach/HeroSectionWrapper";
import {
  DesignIcon14,
  DesignIcon46,
  DesignIcon47,
  DesignIcon48,
} from "@/components/icons";
import Image from "next/image";

const collaboration = [
  {
    id: "commitment_001",
    title: "Identify your specific needs",
    description:
      "We delve into your current talent landscape, future talent requirements, and desired outcomes.",
    icon: "DesignIcon49",
  },
  {
    id: "commitment_002",
    title: "Develop tailored strategies",
    description:
      "We create customized recruitment plans based on your budget, timeline, and target audience.",
    icon: "DesignIcon17",
  },
  {
    id: "commitment_003",
    title: "Leverage our expertise",
    description:
      "We utilize our extensive knowledge and industry-specific insights to recommend the most effective solutions.",
    icon: "DesignIcon13",
  },
];

const deliveringValueData = [
  {
    id: "delivering_001",
    title: "Reduce time to hire",
    description:
      "We work diligently to fill your open positions quickly and efficiently.",
    icon: DesignIcon46,
  },
  {
    id: "delivering_002",
    title: "Improve candidate quality",
    description:
      "We implement rigorous screening processes to attract and identify top talent.",
    icon: DesignIcon14,
  },
  {
    id: "delivering_003",
    title: "Enhance your employer brand",
    description:
      "We help you build a strong employer brand that attracts qualified candidates and fosters a positive candidate experience.",
    icon: DesignIcon47,
  },
  {
    id: "delivering_004",
    title: "Minimize costs",
    description:
      "We offer cost-effective solutions that align with your budget constraints.",
    icon: DesignIcon48,
  },
];

const CustomizedSolutions = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSectionWrapper
        title="Customized Solutions"
        description="We recognize that every organization has unique talent acquisition needs. Our customized solutions approach goes beyond a one-size-fits-all strategy. We take the time to understand your business goals, company culture, and specific hiring challenges."
      />

      {/* Banner Image Section */}
      <BannerImageWrapper
        imageURL="/approach/banner-2.png"
        altText="Office colleagues discussing work"
      />

      {/* Collaboration is Key Section */}
      <BenefitsSectionWrapper
        sectionTitle="Collaboration is Key"
        sectionSubTitle="Through close collaboration with you, we"
        benefits={collaboration}
        containerClasses="pb-3"
      />

      {/* Flexibility & Adaptability Section */}
      <div className="w-full bg-[#FAFAFA]">
        <section className="website-container max-lg:pb-10">
          <div className="w-full h-full flex flex-col lg:flex-row lg:items-center">
            {/* Image for Smaller Screens */}
            <div className="lg:hidden overflow-hidden relative size-[15rem] mobile-sm:size-[19rem] mobile-md:size-[22rem] mobile-lg:size-[24rem] sm:size-[30rem] mx-auto flex items-center justify-center">
              <Image
                src={"/bg-pattern-20.svg"}
                alt="Background Pattern Image"
                fill
              />
              <div className="flex-none w-4/5 h-4/5 rounded-full bg-[#E1E1E1] p-2 z-10">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={"/customized-solutions.png"}
                    alt={"flexible and adaptable solutions"}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            <div className="max-lg:mt-5 flex flex-col gap-3 px-2 sm:px-5 lg:px-10 xl:px-14 2xl:px-24">
              <h1 className="section-title max-lg:text-center">Flexibility and Adaptability</h1>
              <p className="paragraph max-lg:text-center">
                We understand that your needs may evolve throughout the hiring
                process. We are flexible and adaptable, ready to adjust our
                strategies as needed to ensure we meet your evolving
                requirements.
              </p>
            </div>

            {/* Image for Larger Screens */}
            <div className="flex-none hidden lg:block w-[39.5rem] h-[39rem] xl:w-[45.5rem] xl:h-[45rem]">
              <div className="w-full h-full relative flex items-center justify-center">
                <Image
                  src={"/bg-pattern-20.svg"}
                  alt="Background Pattern Image"
                  fill
                />
                <div className="flex-none size-[24rem] xl:size-[30rem] rounded-full bg-[#E1E1E1] p-2 z-10">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={"/customized-solutions.png"}
                      alt={"flexible and adaptable solutions"}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Delivering Value Section */}
      <div className="w-full bg-[#C6485D]">
        <section className="website-container section-padding-x section-padding-y">
          <div>
            <h1 className="section-title  text-white">
              Delivering Value
            </h1>
            <p className="mt-3 paragraph max-w-[32rem] text-white">
              Our customized solutions focus on delivering tangible value to
              your organization. We aim to:
            </p>
            <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-6 px-2">
              {deliveringValueData.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="flex flex-col mobile-xl:flex-row items-center gap-3 w-full max-w-[37rem] p-5 md:p-10 bg-[#FFFFFF1A] shadow-approach-tabs-card hover:bg-[#C6485D] hover:shadow-approach-tabs-card-hover group transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="flex-none bg-[#FDF7ED] rounded-full w-fit h-fit p-4 group-hover:bg-[#E2AF45]">
                      <Icon className="size-[2.625rem] group-hover:text-white" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="max-mobile-xl:text-center font-sintony font-bold text-lg md:text-xl text-white">
                        {item.title}
                      </p>
                      <p className="max-mobile-xl:text-center text-base font-normal text-white">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CustomizedSolutions;
