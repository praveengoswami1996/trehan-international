"use client";
import React from "react";
import BreadCrumbs from "../BreadCrumbs";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

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
        <div 
         
          className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-52 size-[33.25rem] pointer-events-none z-0"
        >
          <Image
            src="/bg-pattern-20.svg"
            alt="Background Pattern Image"
            fill
            className="object-contain"
          />
        </div>
        <div
          className="flex flex-col items-center gap-5 z-10"
          
        >
          <div className="mx-auto" >
            <BreadCrumbs />
          </div>
          <h1 
            className="hero-text text-center mx-auto"
          >
              {title}
          </h1>
          <p 
            className="paragraph text-center max-w-[52rem] mx-auto"
            
          >
            {description}
          </p>
          <div 
            className="mt-9"
          >
            <Link href="/contact-us">
              <Button>Find Skilled Workforce</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSectionWrapper;
