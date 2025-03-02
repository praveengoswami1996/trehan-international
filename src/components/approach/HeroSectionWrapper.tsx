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
      <section className="website-container section-padding-x section-padding-y 2xl:pb-36 pt-0 relative overflow-hidden">
        <div className="hidden sm:block absolute -right-24 top-28 size-[28rem] pointer-events-none z-0">
          <Image
            src="/bg-pattern-20.svg"
            alt="Background Pattern Image"
            fill
            className="object-contain"
          />
        </div>

        <div className="flex flex-col gap-6 z-10">
          <div>
            <BreadCrumbs />
          </div>
          <div className="flex flex-col gap-3 mt-3 lg:mt-8 xl:mt-16">
            <h1 className="hero-text">{title}</h1>
            <p className="paragraph max-w-[52rem]">
              {description}
            </p>
            <div className="mt-12">
              <Link href="/contact-us">
                <Button>Find Skilled Workforce</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSectionWrapper;
