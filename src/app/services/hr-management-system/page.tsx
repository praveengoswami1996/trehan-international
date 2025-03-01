import WhyChooseTrehan from "@/components/AboutUs/WhyChooseTrehan";
import BannerImageWrapper from "@/components/services/BannerImageWrapper";
import BenefitsSectionWrapper from "@/components/services/BenefitsSectionWrapper";
import HeroSectionWrapper from "@/components/services/HeroSectionWrapper";
import React from "react";

const benefits = [
  {
    id: "benefits_001",
    title: "End-to-End Process Management",
    description:
      "Automate and streamline your hiring process, from candidate sourcing and onboarding to performance management and 	offboarding.",
    icon: "DesignIcon20",
  },
  {
    id: "benefits_002",
    title: "Streamlined Attendance & Leave Management",
    description:
      "Track employee attendance, leave requests, and approvals effortlessly, promoting transparency and efficiency.",
    icon: "DesignIcon21",
  }
];

const HRManagementSystem = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSectionWrapper
        title="HR Management System (HRMS)"
        description="Streamline Your Workforce Management, Trehan International's HR Management System (HRMS) empowers you with a centralized platform to manage your entire workforce, from hire-to-retirement."
      />

      {/* Banner Image Section */}
      <BannerImageWrapper 
        imageURL="/services/services-menu-3.png"
        altText="A man and a woman looking at a laptop"
      />

      {/* Benefits Section */}
      <BenefitsSectionWrapper
        benefits={benefits}
        cardContainerClasses="max-w-4xl mx-auto"
        infoPanel="Elevate your HR processes to new heights of efficiency and clarity, transforming the way you connect with your team from day one to retirement, with Trehan International's HRMS, your all-in-one solution."
      />

      {/* Why Choose Trehan Internation Section */}
      <WhyChooseTrehan backgroundColor="#C6485D" />
    </>
  );
};

export default HRManagementSystem;
