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
      <section className="website-container section-padding-x section-padding-y 2xl:pb-40 pt-0 relative overflow-hidden">
        <div className="flex flex-col gap-20">
          <div>
            <BreadCrumbs />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="hero-text">{title}</h2>
            <div className="max-w-[52rem]">
              <p className="paragraph">{description}</p>
            </div>
            <div className="mt-12">
              <Link href="/contact-us">
                <Button type="button">Partner with us</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden sm:block absolute -right-60 xl:-right-40 top-56 xl:top-60 size-[33.25rem]">
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
