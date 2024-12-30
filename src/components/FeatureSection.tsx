"use client";
import React from "react";
import { AttestationIcon, InterHiringIcon, LocalHiringIcon } from "./icons";
import { delay, motion } from "framer-motion";

const features = [
  {
    id: "features_001",
    title: "Local Hiring",
    desc: "Hiring from GCC",
    icon: LocalHiringIcon,
  },
  {
    id: "features_002",
    title: "International Hiring",
    desc: "Government Approved Recruitment Co. To Fulfil Manpower Request, on time ",
    icon: InterHiringIcon,
  },
  {
    id: "features_003",
    title: "Attestation",
    desc: "Attest my Doc reliable partner to Attest Documentation of your workers both from Kuwait and India",
    icon: AttestationIcon,
  },
];

const FeatureSection = () => {
  const text = "A single destination to manage all things frontline";
  const words = text.split(" "); // Split the text into words

  // Variants for animation
  const containerVariantsHeroText = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each word
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 }, // Start hidden and slightly below
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }, // Animate into view
    },
  };

  const containerVariantsMainContent = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each word
      },
    },
  };

  const childrenVariantsMainContent = {
    hidden: { opacity: 0, x: 20 }, // Start hidden and slightly below
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }, // Animate into view
    },
  };

  return (
    <div className="w-full bg-[#1A1A1A]">
      <section className="website-container section-padding-x section-padding-y pb-14">
        <motion.h1
          className="section-title leading-[3rem] text-[#FFFFFF] flex flex-wrap"
          variants={containerVariantsHeroText}
          initial="hidden"
          whileInView="visible" // Trigger animation on scroll
          viewport={{ once: true, amount: 1 }} // Trigger when 50% of the container is in view
        >
          {words.map((word, index) => (
            <motion.span key={index} variants={wordVariants} className="mr-2">
              {word}
            </motion.span>
          ))}
        </motion.h1>
  
        <motion.div 
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={containerVariantsMainContent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
        >
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={item.id} 
                className="flex items-start gap-5"
                variants={childrenVariantsMainContent}
              >
                <div>
                  <Icon className="text-[#FFFFFF] size-10 md:size-12" />
                </div>
                <div>
                  <h4 className="font-sintony font-bold text-xl md:text-2xl leading-9 text-[#ffffff]">
                    {item.title}
                  </h4>
                  <p className="font-normal text-[#FFFFFF] text-base md:text-[1.125rem] md:leading-[1.688rem]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </div>
  );
};

export default FeatureSection;
