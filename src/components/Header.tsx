"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import { RiMenu4Fill } from "react-icons/ri";
import { useNavbarContext } from "@/contexts/NavbarContext";

const Header = () => {
  const { isNavbarOpen, toggleNavbar } = useNavbarContext();

  return (
    <header className="py-4 border-b shadow-header fixed top-0 left-0 w-full bg-white z-50">
      <div className="max-w-[1440px] mx-auto px-3 xl:px-20 flex items-center justify-between gap-5">
        {/* Trehan International Brand Logo */}
        <div className="flex items-center justify-start gap-3">
          {/* Burger Menu Button */}
          <button type="button" className="lg:hidden" onClick={() => toggleNavbar()}>
            <RiMenu4Fill size={24} />
          </button>

          <div className="flex-none">
            <Link href={"/"}>
              <Image
                src={"/logo.svg"}
                alt={"Trehan International Logo"}
                width={153}
                height={68}
                priority
                style={{ width: 'auto', height: 'auto' }}
              />
            </Link>
          </div>
        </div>

        {/* Navigation Menu Links */}
        <div className="hidden xl:block">
          <Navbar />
        </div>
      
        {/* Action Buttons */}
        <Button>
          Contact us
        </Button>
      </div>
    </header>
  );
};

export default Header;
