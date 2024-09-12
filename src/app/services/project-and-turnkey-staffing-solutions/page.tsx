import BannerImageWrapper from "@/components/services/BannerImageWrapper";
import HeroSectionWrapper from "@/components/services/HeroSectionWrapper";
import React from "react";

const ProjectAndTurnkeyStaffingSolutions = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSectionWrapper
        title="Project & Turnkey Staffing Solutions"
        description="Trehan International specializes in comprehensive staffing solutions for new verticals, expansions, and various projects. We offer end-to-end support, assembling full teams under tight timelines with a focus on confidentiality and skill-specific needs. Our approach encompasses"
      />

      {/* Banner Image Section */}
      <BannerImageWrapper 
        imageURL="/services/banner-3.png"
        altText="A group of workers looking at something"
      />
    </>
  );
};

export default ProjectAndTurnkeyStaffingSolutions;
