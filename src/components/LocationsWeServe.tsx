"use client";
import Image from "next/image";
import React from "react";
import WorldMap from "./SVGs/WorldMap";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const locationsWeServe = [
  {
    id: "location_001",
    name: "Europe",
    flagUrl: "/flags/europe.png",
    altText: "Europe Flag",
  },
  {
    id: "location_002",
    name: "Russia",
    flagUrl: "/flags/russia.png",
    altText: "Russia Flag",
  },
  {
    id: "location_003",
    name: "GCC",
    flagUrl: "/flags/gcc.png",
    altText: "GCC Flag",
  },
  {
    id: "location_004",
    name: "USA",
    flagUrl: "/flags/usa.png",
    altText: "USA Flag",
  },
  {
    id: "location_005",
    name: "Japan",
    flagUrl: "/flags/japan.png",
    altText: "Japan Flag",
  },
];

const LocationsWeServe = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1279px)" });

  const sectionHeadingVariant = isTabletOrMobile
    ? {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
      }
    : {
        initial: { opacity: 0, x: 50 },
        whileInView: { opacity: 1, x: 0 },
      };

  const flagContainerVariants = {
    initial: { opacity: 1 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each word
      },
    },
  };

  const flagChildrenVariants = {
    initial: { opacity: 0, x: -10 }, // Start hidden and slightly below
    whileInView: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
  };

  return (
    <div className="w-full bg-[#1A1A1A]">
      <section className="website-container section-padding-x section-padding-y pb-12">
        <div className="flex flex-col items-center justify-between">
          <motion.h1
            className="section-title text-[#ffffff] text-center"
            variants={sectionHeadingVariant}
            initial={sectionHeadingVariant.initial}
            whileInView={sectionHeadingVariant.whileInView}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-160px" }}
          >
            Locations We Serve
          </motion.h1>

          {/* <div className="mt-12 w-full max-w-[756px] h-[10rem] md:h-[436px] relative">
            <Image
              src={"/world-map.svg"}
              alt={"World Map"}
              fill
              className="object-contain"
            />
          </div> */}

          <div className="mt-12 w-full max-w-[756px] h-[10rem] md:h-[436px] relative">
            <WorldMap className="w-full h-full" />
          </div>

          <motion.div
            className="mt-12 flex items-center justify-center flex-wrap gap-x-6 gap-y-3"
            variants={flagContainerVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-160px" }}
          >
            {locationsWeServe.map((location) => {
              return (
                <motion.div
                  key={location.id}
                  className="flex items-center gap-2"
                  variants={flagChildrenVariants}
                >
                  <div className="flex-none w-9 h-6 relative">
                    <Image
                      src={location.flagUrl}
                      alt={location.altText}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="font-sintony text-[1.125rem] font-normal text-white">
                    {location.name}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LocationsWeServe;
