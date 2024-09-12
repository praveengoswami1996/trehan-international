import { DesignIcon13 } from "@/components/icons";
import DesignIcon18 from "@/components/icons/DesignIcon18";
import DesignIcon19 from "@/components/icons/DesignIcon19";
import DesignIcon20 from "@/components/icons/DesignIcon20";
import BannerImageWrapper from "@/components/services/BannerImageWrapper";
import BenefitsSectionWrapper from "@/components/services/BenefitsSectionWrapper";
import HeroSectionWrapper from "@/components/services/HeroSectionWrapper";
import React from "react";

const benefits = [
  {
    id: "benefits_001",
    title: "Customized Hiring",
    description:
      "Crafting and implementing tailored recruitment strategies.",
    icon: DesignIcon18,
  },
  {
    id: "benefits_002",
    title: "Nationwide Reach",
    description:
      "Conducting recruitment drives across cities, even in remote locations.",
    icon: DesignIcon19,
  },
  {
    id: "benefits_003",
    title: "Complete Process Management",
    description:
      "From organizational structuring, JD creation, to streamlined onboarding.",
    icon: DesignIcon20,
  },
  {
    id: "benefits_004",
    title: "Expert Teams",
    description:
      "Designing recruitment processes and panels for precise skill assessment.",
    icon: DesignIcon13,
  }
];

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

      {/* Benefits Section */}
      <BenefitsSectionWrapper
        benefits={benefits}
        cardContainerClasses="max-w-4xl mx-auto"
        infoPanel="With our proven success in metros and beyond, Trehan International is your go-to partner for efficient, scalable staffing solutions that align with your project goals. Transform your staffing strategy with our expert support."
      />
    </>
  );
};

export default ContractStaffing;
