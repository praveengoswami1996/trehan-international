import BannerImageWrapper from "@/components/approach/BannerImageWrapper";
import HeroSectionWrapper from "@/components/approach/HeroSectionWrapper";

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

      {/* Consultative Approach Tabs Section */}
      {/* <div className="w-full bg-[#C6485D]">
        <section className="website-container section-padding-x section-padding-y">
          <ConsultativeApproachTabs />
        </section>
      </div> */}
    </>
  );
};

export default CustomizedSolutions;
