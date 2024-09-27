"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import useMediaQuery from "@/hooks/useMediaQuery";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  return (
    <header className="py-4 border-b shadow-header fixed top-0 left-0 w-full bg-white z-50">
      <div className="website-container section-padding-x flex items-center justify-between gap-5">
        {/* Trehan International Brand Logo */}
        <div className="flex items-center justify-start gap-3 ">
          {/* Burger Menu Button */}
          <MobileNavbar />

          <div className="flex-none">
            <Link href={"/"}>
              <div className="w-[110px] h-[60px] sm:w-[153px] sm:h-[68px] relative">
                <Image
                  src={"/logo.svg"}
                  alt={"Trehan International Logo"}
                  fill
                  sizes=""
                  priority
                />
              </div>
            </Link>
          </div>
        </div>

        {/* Navigation Menu Links */}
        <div className="hidden xl:block">
          <Navbar />
        </div>

        {/* Action Buttons */}
        <Link href={"/contact-us"}>
          <Button className="max-md:px-3 max-md:py-2 max-md:text-xs">
            Contact us
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
