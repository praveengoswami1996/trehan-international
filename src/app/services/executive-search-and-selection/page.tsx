import { DesignIcon13 } from "@/components/icons";
import DesignIcon16 from "@/components/icons/DesignIcon16";
import DesignIcon17 from "@/components/icons/DesignIcon17";
import InformationPanel from "@/components/InformationPanel";
import BannerImageWrapper from "@/components/services/BannerImageWrapper";
import BenefitsSectionWrapper from "@/components/services/BenefitsSectionWrapper";
import HeroSectionWrapper from "@/components/services/HeroSectionWrapper";
import React from "react";

const benefits = [
  {
    id: "benefits_001",
    title: "Decades of Expertise",
    description:
      "Our consultants aren't just seasoned; they're deeply entrenched in the fabric of various industries, offering a nuanced understanding of your specific leadership needs.",
    icon: DesignIcon13,
  },
  {
    id: "benefits_002",
    title: "Unrivaled Network Reach",
    description:
      "With access to an extensive database and a global network, we're positioned to identify and engage with elite leadership talent, ensuring a perfect cultural and strategic fit.",
    icon: DesignIcon16,
  },
  {
    id: "benefits_003",
    title: "Precision in Approach",
    description:
      "Our methodology is both art and science—employing rigorous headhunting strategies informed by industry insights, we're committed to presenting candidates that not only meet but exceed your expectations.",
    icon: DesignIcon17,
  },
];

const ExecutiveSearchAndSelection = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSectionWrapper
        title="Executive Search & Selection"
        description="Leadership Tailored to Transform, In the realm of leadership, the right fit transcends qualifications—it's about vision, drive, and alignment with your organization's core values. At Trehan International, our Executive Search & Selection service is designed to pinpoint not just a leader, but the right leader for your unique trajectory."
      />

      {/* Banner Image Section */}
      <BannerImageWrapper
        imageURL="/services/banner-2.png"
        altText="Four man discussing on a table"
      />

      {/* Benefits Section */}
      <BenefitsSectionWrapper
        benefits={benefits}
        infoPanel={"Let Trehan International navigate the complexities of executive selection for you. Discover leadership that doesn’t just fill a position but propels your organization towards its vision."}
      />
    </>
  );
};

export default ExecutiveSearchAndSelection;
