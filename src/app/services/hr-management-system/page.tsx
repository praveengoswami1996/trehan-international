import BannerImageWrapper from "@/components/services/BannerImageWrapper";
import HeroSectionWrapper from "@/components/services/HeroSectionWrapper";
import React from "react";

const HRManagementSystem = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSectionWrapper
        title="HR Management System (HRMS)"
        description="Streamline Your Workforce Management, Trehan International's HR Management System (HRMS) empowers you with a centralized platform to manage your entire workforce, from hire-to-retirement . Our comprehensive solution offers"
      />

      {/* Banner Image Section */}
      <BannerImageWrapper 
        imageURL="/services/banner-4.png"
        altText="A man and a woman looking at a laptop"
      />
    </>
  );
};

export default HRManagementSystem;
