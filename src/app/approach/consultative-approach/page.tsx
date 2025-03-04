import BannerImageWrapper from "@/components/approach/BannerImageWrapper";
import BenefitsSectionWrapper from "@/components/approach/BenefitsSectionWrapper";
import ConsultativeApproachTabs from "@/components/approach/ConsultativeApproachTabs";
import HeroSectionWrapper from "@/components/approach/HeroSectionWrapper";

const benefits = [
  {
    id: "benefits_001",
    title: "Decades of Insight",
    description:
      "Our extensive history across industrial verticals/sectors has provided us with a rich tapestry of knowledge, allowing us to navigate the complexities of various industries with ease and precision.",
    icon: "DesignIcon22",
  },
  {
    id: "benefits_002",
    title: "Adaptability and Evolution",
    description:
      "Reflecting on our journey since 1976, our methods have continuously evolved, embracing change and innovation to meet the shifting dynamics of the job market and client expectations.",
    icon: "DesignIcon13",
  },
  {
    id: "benefits_003",
    title: "Best Industry Practices",
    description:
      "Time and experience have honed our processes, enabling us to establish and refine best industry practices that set the standard for excellence in talent acquisition.",
    icon: "DesignIcon23",
  },
];

const ConsultativeApproach = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSectionWrapper
        title="Consultative Approach"
        description="At Trehan International, our Consultative Approach is more than just a methodology; it's a testament to our dedication to not only meeting but exceeding the expectations of those we serve. We pride ourselves on being not just recruiters but Trusted Advisors, committed to delivering bespoke talent solutions that drive growth, foster innovation, and cultivate lasting success."
      />

      {/* Banner Image Section */}
      <BannerImageWrapper
        imageURL="/approach/banner-1.png"
        altText="Two man looking at the laptop"
      />

      {/* Benefits Section */}
      <BenefitsSectionWrapper
        benefits={benefits}
        topPanel="We understand that successful Talent Acquisition is not just about filling vacancies, its about understanding the intricate needs of each business, and aligning talent strategies with overarching organizational goals, but also about forging lasting partnerships."
        bottomPanel="Central to this approach is our strategy for talent acquisition, where expertise meets agility in the art of Strategic Sourcing, Quality Screening, Structured interview, Seamless Onboarding."
      />

      {/* Consultative Approach Tabs Section */}
      <div className="w-full bg-[#C6485D]">
        <section className="website-container section-padding-x section-padding-y">
          <ConsultativeApproachTabs />
        </section>
      </div>
    </>
  );
};

export default ConsultativeApproach;
