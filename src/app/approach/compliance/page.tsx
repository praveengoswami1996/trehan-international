import BannerImageWrapper from "@/components/approach/BannerImageWrapper";
import BenefitsSectionWrapper from "@/components/approach/BenefitsSectionWrapper";
import HeroSectionWrapper from "@/components/approach/HeroSectionWrapper";
import {
  DesignIcon23,
  DesignIcon40,
  DesignIcon41,
  DesignIcon42,
  DesignIcon43,
  DesignIcon44,
  DesignIcon45,
} from "@/components/icons";

const benefits = [
  {
    id: "benefits_001",
    title: "Decades of Insight",
    description:
      "We are committed to conducting business ethically and with integrity throughout the recruitment process.",
    icon: DesignIcon23,
  },
  {
    id: "benefits_002",
    title: "Ensuring Legal Compliance",
    description:
      "We stay updated on the latest employment laws and regulations to ensure all our practices comply with applicable legal frameworks.",
    icon: DesignIcon40,
  },
  {
    id: "benefits_003",
    title: "Protecting Candidate Rights",
    description:
      "We ensure fair and non-discriminatory treatment of all candidates throughout the recruitment process.",
    icon: DesignIcon41,
  },
];

const keyCompliances = [
  {
    id: "key_compliance_001",
    title: "Data Privacy Regulations",
    description:
      "We adhere to data privacy regulations, to protect the privacy and security of candidate information.",
    icon: DesignIcon42,
  },
  {
    id: "key_compliance_002",
    title: "Immigration Laws",
    description:
      "We assist candidates with relevant immigration procedures to ensure they have the legal right to work in the designated location.",
    icon: DesignIcon43,
  },
  {
    id: "key_compliance_003",
    title: "Anti-Discrimination Laws",
    description:
      "We comply with all anti-discrimination laws and regulations to ensure fair and equal opportunities for all candidates, regardless of race, color, religion, gender, national origin, age, disability, or sexual orientation.",
    icon: DesignIcon44,
  },
  {
    id: "key_compliance_004",
    title: "Minimum Wage and Overtime Regulations",
    description:
      "We ensure all compensation and benefits offered to candidates comply with minimum wage and overtime regulations.",
    icon: DesignIcon45,
  },
];

const Compliance = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSectionWrapper
        title="Compliance"
        description="At Trehan International, we understand the importance of adhering to all relevant laws and regulations throughout the recruitment process. We maintain a rigorous compliance framework to ensure ethical and legal practices."
      />

      {/* Banner Image Section */}
      <BannerImageWrapper
        imageURL="/approach/banner-3.png"
        altText="Man and woman looking at something"
      />

      {/* Our Commitment Section */}
      <BenefitsSectionWrapper
        sectionTitle="Our Commitment"
        benefits={benefits}
      />

      {/* Key Compliance Areas Section */}
      <div className="w-full bg-[#C6485D]">
        <section className="website-container section-padding-x section-padding-y">
          <div>
            <h1 className="section-title text-center text-white">
              Key Compliance Areas
            </h1>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-6 px-2">
              {keyCompliances.map((item) => {
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
                      <p className="max-mobile-xl:text-center font-sintony font-bold text-lg md:text-xl text-white">{item.title}</p>
                      <p className="max-mobile-xl:text-center text-base font-normal text-white">{item.description}</p>
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

export default Compliance;
