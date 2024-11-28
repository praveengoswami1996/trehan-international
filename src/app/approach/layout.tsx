import WhyChooseTrehan from "@/components/AboutUs/WhyChooseTrehan";
import HowRecruitmentFlowWorks from "@/components/approach/HowRecruitmentFlowWorks";
import FeatureSection from "@/components/FeatureSection";
import React from "react";

export default function ApproachLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-white pt-28 md:pt-32 lg:pt-36 xl:pt-40 relative">
      {children}
      <HowRecruitmentFlowWorks />
      <WhyChooseTrehan backgroundColor="#000000" />
      <FeatureSection />
    </div>
  );
}
