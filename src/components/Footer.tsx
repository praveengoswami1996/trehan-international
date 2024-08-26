import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MailIcon, PhoneIcon } from "./icons";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const servicesLinks = [
  { id: "services_link_001", label: "Temporary Staffing", href: "#" },
  { id: "services_link_002", label: "Direct Hire Recruiting", href: "#" },{ id: "services_link_003", label: "Executive Search", href: "#" },
  { id: "services_link_004", label: "Contract-to-Hire", href: "#" },
]

const aboutUsLinks = [
  { id: "aboutus_link_001", label: "Our Mission", href: "#" },
  { id: "aboutus_link_002", label: "Our Vision", href: "#" },{ id: "aboutus_link_003", label: "Resources", href: "#" },
  { id: "aboutus_link_004", label: "Contact", href: "#" },
]

const addresses = [
  { id: "address_001", place: "Delhi", address: "Delhi (India Head Office Address)- 103 , Raja Garden , New Delhi 110015" },
  { id: "address_002", place: "Mumbai", address: "D-109, Crystal Plaza, Opp. Infinity Mall, New Link Rd. Andheri West, Mumbai-53," },
  { id: "address_003", place: "Kuwait", address: "Salmiya Star Complex Unit 7 Floor 4 Salmiya Block 9 Salem Al Mubarak Street, Kuwait" },
]

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-24 pt-16 pb-0 flex flex-col gap-8 divide-y">
        <div className="w-full flex justify-between">
          <div>
            <Link href={"/"}>
              <Image
                src={"/logo.svg"}
                alt={"Trehan International Logo"}
                width={111}
                height={50}
                priority
              />
            </Link>
            <p className="mt-3 text-base text-[#535353] font-normal max-w-96">
              Lorem ipsum dolor sit amet consectetur. Semper arcu gravida
              pretium tincidunt.
            </p>

            <div className="mt-6 flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div>
                  <PhoneIcon className="text-[#599F99]" />
                </div>
                <span className="text-base font-medium text-[#1A1A1A]">
                  +088 (246) 642-27-10
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <MailIcon className="text-[#599F99]" />
                </div>
                <span className="text-base font-medium text-[#1A1A1A]">
                  example@mail.com
                </span>
              </div>
            </div>

            <div className="mt-5 flex w-full max-w-[24rem] p-1.5 rounded-sm bg-[#F4F4F4]">
              <Input
                type="email"
                placeholder="Enter company email"
                className="bg-[#F8F8F8] border-none outline-none bg-transparent shadow-none text-sm font-light"
              />
              <Button type="submit" className="text-sm bg-[#1A1A1A] px-5 py-6">Send a Message</Button>
            </div>
          </div>

          <div>
            <h4 className="text-[1.625rem] leading-7 font-normal text-[#646464]">Services</h4>
            <div className="mt-4 flex flex-col gap-2">
              {servicesLinks.map((item) => {
                return (
                  <Link key={item.id} href={item.href} className="text-[1.125rem] leading-7 font-medium text-[#000000]">  
                    { item.label }
                  </Link>
                )
              })}
            </div>
          </div>

          <div>
            <h4 className="text-[1.625rem] leading-7 font-normal text-[#646464]">About Us</h4>
            <div className="mt-4 flex flex-col gap-2">
              {aboutUsLinks.map((item) => {
                return (
                  <Link key={item.id} href={item.href} className="text-[1.125rem] leading-7 font-medium text-[#000000]">  
                    { item.label }
                  </Link>
                )
              })}
            </div>
          </div>

          <div>
            <h4 className="text-[1.625rem] leading-7 font-normal text-[#646464]">Contact Info</h4>
            <div className="mt-4 flex flex-col gap-5">
              {addresses.map((item) => {
                return (
                  <div key={item.id} className="flex flex-col gap-1">
                    <h5 className="text-[1.125rem] leading-7 font-medium text-[#000000]">{ item.place }</h5>
                    <p className="text-base text-[#000000] font-normal max-w-80">{ item.address }</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="w-full py-7">
          <p className="text-sm leading-6 font-normal text-[#535353] text-center">&copy; 2024 Trehan International All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
