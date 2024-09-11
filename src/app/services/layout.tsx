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
    <>
      { children }
      <LocationsWeServe />
      <IndustriesWeServe />
      <FeatureSection />
    </>
  );
}
