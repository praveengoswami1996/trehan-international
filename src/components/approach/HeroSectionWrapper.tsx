"use client";
import React from "react";
import BreadCrumbs from "../BreadCrumbs";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeroSectionWrapperProps {
  title: string;
  description: string;
}

const HeroSectionWrapper: React.FC<HeroSectionWrapperProps> = ({
  title,
  description,
}) => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Delay between each word
      },
    },
  };

  const childrenVariants = {
    hidden: { opacity: 0, y: 20 }, // Start hidden and slightly below
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.5,
        damping: 20,
        stiffness: 300,
      },
    },
  };

  return (
    <div className="w-full">
      <section className="website-container section-padding-x section-padding-y 2xl:pb-32 pt-0 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 3,
          }}
          className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-52 size-[33.25rem] pointer-events-none z-0"
        >
          <Image
            src="/bg-pattern-20.svg"
            alt="Background Pattern Image"
            fill
            className="object-contain"
          />
        </motion.div>
        <motion.div
          className="flex flex-col items-center gap-5 z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mx-auto" variants={childrenVariants}>
            <BreadCrumbs />
          </motion.div>
          <motion.h1 
            className="hero-text text-center mx-auto"
            variants={childrenVariants}
          >
              {title}
          </motion.h1>
          <motion.p 
            className="paragraph text-center max-w-[52rem] mx-auto"
            variants={childrenVariants}
          >
            {description}
          </motion.p>
          <motion.div 
            className="mt-9"
            variants={childrenVariants}
          >
            <Link href="/contact-us">
              <Button>Find Skilled Workforce</Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default HeroSectionWrapper;
