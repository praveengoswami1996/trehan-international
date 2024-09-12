import BannerImageWrapper from "@/components/services/BannerImageWrapper";
import HeroSectionWrapper from "@/components/services/HeroSectionWrapper";
import React from "react";

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
    </>
  );
};

export default ExecutiveSearchAndSelection;
