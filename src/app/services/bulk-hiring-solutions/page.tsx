import WhyChooseTrehan from "@/components/AboutUs/WhyChooseTrehan";
import BenefitCard from "@/components/BenefitCard";
import {
  DesignIcon12,
  DesignIcon13,
  DesignIcon14,
  DesignIcon15,
  DesignIcon6,
} from "@/components/icons";
import BannerImageWrapper from "@/components/services/BannerImageWrapper";
import BenefitsSectionWrapper from "@/components/services/BenefitsSectionWrapper";
import HeroSectionWrapper from "@/components/services/HeroSectionWrapper";
import React from "react";

const benefits = [
  {
    id: "benefits_001",
    title: "High-Speed Screening",
    description:
      "Utilizing cutting-edge technology and a robust IT infrastructure for efficient candidate processing",
    icon: DesignIcon12,
  },
  {
    id: "benefits_002",
    title: "Targeted Talent Acquisition",
    description:
      "Leveraging our vast networks and digital presence to attract and identify the ideal candidates for long-term and seasonal projects.",
    icon: DesignIcon13,
  },
  {
    id: "benefits_003",
    title: "Unique Referral Program",
    description:
      "Accessing over 40,000 annual interactions to pool relevant candidates quickly through our innovative referral system.",
    icon: DesignIcon14,
  },
  {
    id: "benefits_004",
    title: "Flexible Staffing",
    description:
      "Offering scalable solutions, we provide qualified personnel on a contractual or freelance basis, adapting to your project's evolving demands.",
    icon: DesignIcon6,
  },
  {
    id: "benefits_005",
    title: "Adaptable Talent Pool",
    description:
      "Our agile talent pool is ready to meet both short-term and long-term project requirements, ensuring seamless workforce scaling.",
    icon: DesignIcon15,
  },
];

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

      {/* Benefits Section */}
      <BenefitsSectionWrapper
        benefits={benefits}
      />

      {/* Why Choose Trehan International Section */}
      <WhyChooseTrehan 
        backgroundColor="#C6485D"
      />
    </>
  );
};

export default BulkHiringSolutions;
