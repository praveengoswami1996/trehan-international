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
    <div className="min-h-screen bg-white pt-32 relative">
      {children}
      <LocationsWeServe />
      <IndustriesWeServe />
      <FeatureSection />
    </div>
  );
}
