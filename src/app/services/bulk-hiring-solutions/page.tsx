import BannerImageWrapper from "@/components/services/BannerImageWrapper";
import HeroSectionWrapper from "@/components/services/HeroSectionWrapper";
import React from "react";

const BulkHiringSolutions = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSectionWrapper
        title="Bulk Hiring Solutions"
        description="Trehan International excels in Bulk Hiring Solutions, streamlining the recruitment process to efficiently address your large-scale staffing needs. Our approach combines state-of-the-art recruitment automation with an expansive industry network, ensuring rapid and accurate candidate selection for various projects and workforce expansions."
      />

      {/* Banner Image Section */}
      <BannerImageWrapper 
        imageURL="/services/banner-1.png"
        altText="People going upstairs"
      />
    </>
  );
};

export default BulkHiringSolutions;
