import WhyChooseTrehan from "@/components/AboutUs/WhyChooseTrehan";
import FeatureSection from "@/components/FeatureSection";
import HowRecruitmentFlowWorks from "@/components/SVGs/HowRecruitmentFlowWorks";
import HowTheMobilisationProcessFlow from "@/components/SVGs/HowTheMobilisationProcessFlow";
import React from "react";

export default function ApproachLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-white pt-28 relative">
      {children}
      <WhyChooseTrehan backgroundColor="#535353" />
      <HowRecruitmentFlowWorks />
      <HowTheMobilisationProcessFlow />
      <FeatureSection />
    </div>
  );
}
