import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MailIcon, PhoneIcon } from "./icons";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const servicesLinks = [
  {
    id: "services_link_001",
    label: "Bulk Hiring",
    href: "/services/bulk-hiring-solutions",
  },
  {
    id: "services_link_002",
    label: "Contract Staffing",
    href: "/services/contract-staffing",
  },
  {
    id: "services_link_003",
    label: "Executive Search",
    href: "/services/executive-search-and-selection",
  },
  {
    id: "services_link_004",
    label: "HR Management System",
    href: "/services/hr-management-system",
  },
  {
    id: "services_link_005",
    label: "Staffing Solutions",
    href: "/services/project-and-turnkey-staffing-solutions",
  },
];

const aboutUsLinks = [
  {
    id: "aboutus_link_001",
    label: "Our Mission",
    href: "/about-us#ourmission",
  },
  { id: "aboutus_link_002", label: "Our Vision", href: "/about-us#ourvision" },
  {
    id: "aboutus_link_003",
    label: "Resources",
    href: "/resources/blogs-and-media",
  },
  { id: "aboutus_link_004", label: "Contact", href: "/contact-us" },
];

const addresses = [
  {
    id: "address_001",
    place: "Delhi",
    address:
      "Delhi (India Head Office Address)- 103 , Raja Garden , New Delhi 110015",
  },
  {
    id: "address_002",
    place: "Mumbai",
    address:
      "D-109, Crystal Plaza, Opp. Infinity Mall, New Link Rd. Andheri West, Mumbai-53,",
  },
  {
    id: "address_003",
    place: "Kuwait",
    address:
      "Salmiya Star Complex Unit 7 Floor 4 Salmiya Block 9 Salem Al Mubarak Street, Kuwait",
  },
];

const socialMediaLinks = [
  {
    id: "social_001",
    label: "Facebook",
    href: "https://www.facebook.com/trehanint",
    icon: FaFacebookSquare,
    iconColor: "#3B5998",
  },
  {
    id: "social_002",
    label: "Linkedin",
    href: "https://www.linkedin.com/in/trehan-international-a3644511b/",
    icon: FaLinkedin,
    iconColor: "#0077B5",
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-2 sm:px-5 lg:px-10 xl:px-14 2xl:px-24 pt-8 md:pt-16 pb-0 flex flex-col gap-8 divide-y">
        <div className="w-full flex flex-col lg:flex-row justify-start gap-6 md:gap-10">
          <div className="flex-none">
            <Link href={"/"}>
              <Image
                src={"/logo.svg"}
                alt={"Trehan International Logo"}
                width={111}
                height={50}
                priority
              />
            </Link>
            <div className="mt-3 text-base text-[#535353] font-normal max-w-96">
              <p>We&apos;re here to help!</p>
              <p>Feel free to connect with us.</p>
            </div>
          

            <div className="mt-6 flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div>
                  <PhoneIcon className="text-[#599F99]" />
                </div>
                <span className="text-base font-medium text-[#1A1A1A]">
                  +965-98881865
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <MailIcon className="text-[#599F99]" />
                </div>
                <span className="text-base font-medium text-[#1A1A1A]">
                  info@trehanintl.com
                </span>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-1 md:flex-row w-full md:max-w-[24rem] p-1.5 rounded-sm bg-[#F4F4F4]">
              <Input
                type="email"
                placeholder="Enter company email"
                className="bg-[#F8F8F8] border-none outline-none bg-transparent shadow-none text-sm font-light py-3 md:py-0"
              />
              <Link href="/contact-us">
                <Button className="text-sm bg-[#1A1A1A] px-5 py-6">
                  Send a Message
                </Button>
              </Link>
            </div>

            <div className="mt-5 flex items-center justify-start gap-2">
              {socialMediaLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="flex-none">
                    <a
                      href={item.href}
                      style={{ color: item.iconColor }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon size={32} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full flex flex-col mobile-xl:flex-row justify-start md:justify-between lg:justify-start xl:justify-between gap-6 mobile-xl:gap-x-16 mobile-2xl:gap-x-28 md:gap-x-6 lg:gap-x-28 min-[1180px]:gap-x-6 mobile-xl:flex-wrap">
            {/* Services Links */}
            <div>
              <h4 className="text-[1.625rem] leading-7 font-normal text-[#646464]">
                Services
              </h4>
              <div className="mt-4 flex flex-col gap-2">
                {servicesLinks.map((item) => {
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="text-[1.125rem] leading-7 font-medium text-[#000000]"
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
            {/* About us Links */}
            <div>
              <h4 className="text-[1.625rem] leading-7 font-normal text-[#646464]">
                About Us
              </h4>
              <div className="mt-4 flex flex-col gap-2">
                {aboutUsLinks.map((item) => {
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="text-[1.125rem] leading-7 font-medium text-[#000000]"
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
            {/* Contact Info */}
            <div>
              <h4 className="text-[1.625rem] leading-7 font-normal text-[#646464]">
                Contact Info
              </h4>
              <div className="mt-4 flex flex-col gap-5">
                {addresses.map((item) => {
                  return (
                    <div key={item.id} className="flex flex-col gap-1">
                      <h5 className="text-[1.125rem] leading-7 font-medium text-[#000000]">
                        {item.place}
                      </h5>
                      <p className="text-base text-[#000000] font-normal max-w-80">
                        {item.address}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-7">
          <p className="text-sm leading-6 font-normal text-[#535353] text-center">
            &copy; 2024 Trehan International | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
