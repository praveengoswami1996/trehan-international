import FeatureSection from "@/components/FeatureSection";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import LocationsWeServe from "@/components/LocationsWeServe";
import React from "react";

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-white pt-28 md:pt-32 lg:pt-36 xl:pt-40 relative">
      {children}
      <LocationsWeServe />
      <IndustriesWeServe />
      <FeatureSection />
    </div>
  );
}
