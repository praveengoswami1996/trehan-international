import React, { useEffect, useState } from "react";
import { useNavbarContext } from "@/contexts/NavbarContext";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RiMenu4Fill } from "react-icons/ri";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  DesignIcon1,
  DesignIcon10,
  DesignIcon11,
  DesignIcon2,
  DesignIcon3,
  DesignIcon4,
  DesignIcon5,
  DesignIcon6,
  DesignIcon7,
  DesignIcon8,
  DesignIcon9,
} from "./icons";
import { HiOutlineChevronRight } from "react-icons/hi2";
import { RxExternalLink } from "react-icons/rx";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import useMediaQuery from "@/hooks/useMediaQuery";

const navigationLinks = [
  {
    id: "navigation_links_001",
    label: "Home",
    href: "/",
  },
  {
    id: "navigation_links_002",
    label: "About Us",
    subLinks: [
      { id: "about_link_001", href: "/about-us", label: "About us", icon: DesignIcon6 },
      {
        id: "about_link_002",
        href: "/about-us/career",
        label: "Life @ Trehan",
        icon: DesignIcon11,
      },
      {
        id: "about_link_003",
        href: "/about-us/career/our-openings",
        label: "Our Openings",
        icon: DesignIcon11,
      },
    ],
  },
  {
    id: "navigation_links_003",
    label: "Services",
    subLinks: [
      {
        id: "service_link_001",
        href: "/services/bulk-hiring-solutions",
        label: "Bulk Hiring Solutions",
        icon: DesignIcon1,
      },
      {
        id: "service_link_002",
        href: "/services/executive-search-and-selection",
        label: "Executive Search & Selection",
        icon: DesignIcon4,
      },
      {
        id: "service_link_003",
        href: "/services/hr-management-system",
        label: "HR Management System (HRMS)",
        icon: DesignIcon2,
      },
      {
        id: "service_link_004",
        href: "/services/project-and-turnkey-staffing-solutions",
        label: "Project & Turnkey Staffing Solutions",
        icon: DesignIcon5,
      },
      {
        id: "service_link_005",
        href: "/services/contract-staffing",
        label: "Contract Staffing",
        icon: DesignIcon3,
      },
    ],
  },
  {
    id: "navigation_links_004",
    label: "Approach",
    subLinks: [
      {
        id: "approach_link_001",
        href: "/approach/consultative-approach",
        label: "Consultative Approach",
        icon: DesignIcon6,
      },
      {
        id: "approach_link_002",
        href: "/approach/customized-solutions",
        label: "Customized Solutions",
        icon: DesignIcon9,
      },
      {
        id: "approach_link_003",
        href: "/approach/quality-screening",
        label: "Quality Screening",
        icon: DesignIcon7,
      },
      {
        id: "approach_link_004",
        href: "/approach/compliance",
        label: "Compliance",
        icon: DesignIcon10,
      },
      {
        id: "approach_link_005",
        href: "/approach/recruitment-flow",
        label: "Recruitment Flow",
        icon: DesignIcon8,
      },
      {
        id: "approach_link_006",
        href: "/approach/mobilization-flow",
        label: "Mobilization Flow",
        icon: DesignIcon1,
      },
    ],
  },
  {
    id: "navigation_links_005",
    label: "Industries",
    href: "/industries",
  },
  {
    id: "navigation_links_006",
    label: "Job Search",
    href: "/job-search",
  },
  {
    id: "navigation_links_007",
    label: "Resources",
    subLinks: [
      { id: "resource_link_001", href: "/resources/blogs-and-media", label: "Blogs & Media", icon: DesignIcon1 },
      { id: "resource_link_001", href: "/resources/events", label: "Events", icon: DesignIcon11 },
    ],
  },
];

const MobileNavbar = () => {
  const { isNavbarOpen, toggleNavbar } = useNavbarContext();
  const [activeSubMenu, setActiveSubMenu] = useState<string>("");
  const screenWidth = useMediaQuery();

  useEffect(() => {
    if (isNavbarOpen && (screenWidth > 1279)) {
      toggleNavbar(); 
  }}, [isNavbarOpen, toggleNavbar, screenWidth]);

  return (
    <Sheet open={isNavbarOpen} onOpenChange={toggleNavbar}>
      <SheetTrigger asChild>
        <button
          type="button"
          className="xl:hidden"
        >
          <RiMenu4Fill size={24} />
        </button>
      </SheetTrigger>
      <SheetContent side={"left"} className="w-full max-w-lg">
        <SheetHeader className="hidden">
          <SheetTitle>Navigation Menu</SheetTitle>
          <SheetDescription>
            Navigation Menu for smaller devices such as mobile and tablets.
          </SheetDescription>
        </SheetHeader>
        <div className="h-full overflow-auto scrollbar-hide">
          <div>
            <Link href={"/"}>
              <Image
                src={"/logo.svg"}
                alt={"Trehan International Logo"}
                width={100}
                height={68}
                priority
              />
            </Link>
          </div>

          <div className="h-full mt-5 flex flex-col divide-y overflow-auto scrollbar-hide">
            {navigationLinks.map((item) => {
              return item.subLinks ? (
                <Collapsible
                  open={activeSubMenu === item.label}
                  onOpenChange={() => setActiveSubMenu(activeSubMenu !== item.label ? item.label : "")}
                  className="w-full"
                  key={item.id}
                >
                  <CollapsibleTrigger asChild>
                    <div className="py-3 flex items-center gap-3 justify-between">
                      <span>{item.label}</span>
                      <HiOutlineChevronRight />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="flex flex-col divide-y pl-5">
                        {item.subLinks.map((item) => (
                        <Link href={item.href} key={item.id} onClick={() => toggleNavbar()} className="py-2 flex gap-3 items-center">
                            {item.label}
                            <span>
                                <RxExternalLink />
                            </span>
                        </Link>
                        ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <Link href={item.href} key={item.id} onClick={() => toggleNavbar()} className="py-3">
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
