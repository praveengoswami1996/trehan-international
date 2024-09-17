import BannerImageWrapper from "@/components/approach/BannerImageWrapper";
import HeroSectionWrapper from "@/components/approach/HeroSectionWrapper";

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

      {/* Consultative Approach Tabs Section */}
      {/* <div className="w-full bg-[#C6485D]">
        <section className="website-container section-padding-x section-padding-y">
          <ConsultativeApproachTabs />
        </section>
      </div> */}
    </>
  );
};

export default Compliance;
