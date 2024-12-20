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
  return (
    <div className="w-full">
      <section className="website-container section-padding-x section-padding-y 2xl:pb-32 pt-0 relative overflow-hidden">
        <div className="flex flex-col items-center">
            <motion.div
              className="mx-auto"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
              }}
            >
              <BreadCrumbs />
            </motion.div>
          
          <div className="mt-5 w-full flex flex-col items-center">
            <motion.h2
              className="hero-text text-center mx-auto"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {title}
            </motion.h2>
            <motion.div
              className="mt-5 max-w-[52rem] mx-auto"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 1,
              }}
            >
              <p className="paragraph text-center">{description}</p>
            </motion.div>

            <div className="mt-14">
              <Link href="/contact-us">
                <Button type="button">Partner with us</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden sm:block absolute -left-60 xl:-left-52 top-56 xl:top-48 size-[33.25rem] ">
          <Image
            src="/bg-pattern-003246.svg"
            alt="Background Pattern Image"
            fill
            className="object-contain"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSectionWrapper;
