import BannerImageWrapper from "@/components/services/BannerImageWrapper";
import HeroSectionWrapper from "@/components/services/HeroSectionWrapper";
import React from "react";

const ContractStaffing = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSectionWrapper
        title="Contract Staffing"
        description="Trehan International specializes in comprehensive contract staffing solutions for new verticals, expansions, and various projects. We offer end-to-end support, assembling full teams under tight timelines with a focus on confidentiality and skill-specific needs. Our approach encompasses"
      />

      {/* Banner Image Section */}
      <BannerImageWrapper 
        imageURL="/services/banner-1.png"
        altText="People going upstairs"
      />
    </>
  );
};

export default ContractStaffing;
