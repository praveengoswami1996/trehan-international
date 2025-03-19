import React, { ComponentType } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  DesignIcon1,
  DesignIcon2,
  DesignIcon4,
  DesignIcon5,
  DesignIcon6,
  DesignIcon9,
  DesignIcon10,
  DesignIcon11,
} from "./icons";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "./ui/button";
import IndustriesSVG from "./SVGs/IndustrySVG";
import path from "path";

interface DropdownLink {
  title: string;
  href: string;
  icon: React.FC;
}

interface ApproachDropdownLink {
  title: string;
  href: string;
  imageUrl: string;
  desc: string;
}

interface ServiceDropdownLink {
  title: string;
  href: string;
  imageUrl: string;
}

const aboutLinks: DropdownLink[] = [
  { href: "/about-us", title: "About us", icon: DesignIcon6 },
  { href: "/about-us/career", title: "Life @ Trehan", icon: DesignIcon11 },
  {
    href: "/about-us/career/our-openings",
    title: "Our Openings",
    icon: DesignIcon11,
  },
];

const serviceLinks: ServiceDropdownLink[] = [
  {
    href: "/services/bulk-hiring-solutions",
    title: "Bulk Hiring Solutions",
    imageUrl: "/services/services-menu-1.png",
  },
  {
    href: "/services/executive-search-and-selection",
    title: "Executive Search & Selection",
    imageUrl: "/services/services-menu-2.png",
  },
  {
    href: "/services/hr-management-system",
    title: "HR Management System (HRMS)",
    imageUrl: "/services/services-menu-3.png",
  },
  {
    href: "/services/project-and-turnkey-staffing-solutions",
    title: "Project & Turnkey Staffing Solutions",
    imageUrl: "/services/services-menu-4.png",
  },
];

const approachLinks: ApproachDropdownLink[] = [
  {
    href: "/approach/consultative-approach",
    title: "Consultative Approach",
    imageUrl: "/approach/approach-menu-1.png",
    desc: "At Trehan International, our Consultative Approach is more than just a methodology; it&apos;s a testament to our dedication to not only meeting but exceeding the expectations of those we serve. We pride ourselves on being not just recruiters but Trusted Advisors, committed to delivering bespoke talent solutions that drive growth, foster innovation, and cultivate lasting success.",
  },
  {
    href: "/approach/customized-solutions",
    title: "Customized Solutions",
    imageUrl: "/approach/approach-menu-2.png",
    desc: "We recognize that every organization has unique talent acquisition needs. Our customized solutions approach goes beyond a one-size-fits-all strategy. We take the time to understand your business goals, company culture, and specific hiring challenges.",
  },
  {
    href: "/approach/compliance",
    title: "Compliance",
    imageUrl: "/approach/approach-menu-3.png",
    desc: "At Trehan International, we understand the importance of adhering to all relevant laws and regulations throughout the recruitment process. We maintain a rigorous compliance framework to ensure ethical and legal practices.",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [approachMenuImageUrl, setApproachMenuImageUrl] = React.useState(
    "/approach/approach-menu-1.png"
  );
  const [approachMenuDesc, setApproachMenuDesc] = React.useState("");

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              active={pathname === "/"}
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              pathname.includes("/about-us") && "bg-[#599F99] text-white"
            )}
          >
            About Us
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-5">
              <h6 className="font-normal text-[1.125rem] leading-[1.688rem] text-[#535353]">
                About Us
              </h6>
              <ul className="mt-4 flex flex-col gap-2 w-[418px]">
                {aboutLinks.map((item, index) => {
                  return (
                    <ListItem
                      key={index}
                      href={item.href}
                      title={item.title}
                      icon={item.icon}
                      active={pathname === item.href}
                    />
                  );
                })}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              pathname.includes("/services") && "bg-[#599F99] text-white"
            )}
          >
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div
              className="w-full fixed left-0 top-[6.25rem] bg-white border-t border-[#BDBDBD] px-24 overflow-hidden"
              style={{ boxShadow: "0px 40px 40px -20px #00000026" }}
            >
              <div className="w-full h-[380px] max-w-[1440px] mx-auto py-8 relative flex gap-10">
                <div className="w-fit">
                  <h6 className="font-normal text-[1.125rem] leading-[1.688rem] text-[#535353]">
                    Our Services
                  </h6>
                  <div className="mt-4 flex gap-7">
                    {serviceLinks.map((item, index) => {
                      return (
                        <div key={index} className="flex flex-col gap-3">
                          <div className="flex flex-col gap-2">
                            <div className="w-[221px] h-[180px] relative">
                              <Image
                                src={item.imageUrl}
                                alt={item.title}
                                fill
                                className="flex-none object-cover"
                              />
                            </div>
                            <h6 className="text-base font-normal font-work-sans max-w-40">
                              {item.title}
                            </h6>
                          </div>

                          <Link href={item.href} legacyBehavior passHref>
                            <NavigationMenuLink className="flex items-center gap-2 italic text-[#C6485D] text-xs">
                              LEARN MORE
                              <span>
                                <ArrowIcon />
                              </span>
                            </NavigationMenuLink>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="w-1/5 relative">
                  <h4 className="text-xl font-sintony font-bold">
                    Our services encompass end-to-end recruitment solutions,
                    including sourcing, screening, documentation, and
                    deployment.
                  </h4>
                  <div className="absolute -right-64 -bottom-20">
                    <IndustriesSVG />
                  </div>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              pathname.includes("/approach") && "bg-[#599F99] text-white"
            )}
          >
            Approach
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div
              className="w-full fixed left-0 top-[6.25rem] bg-white border-t border-[#BDBDBD] px-24"
              style={{ boxShadow: "0px 40px 40px -20px #00000026" }}
            >
              <div className="w-full h-[436px] max-w-[1440px] flex mx-auto divide-x divide-[#BDBDBD]">
                <div className="w-2/3 px-10 py-8 pl-0">
                  <h6 className="font-normal text-[1.125rem] leading-[1.688rem] text-[#535353]">
                    Our Approach
                  </h6>
                  <div className="mt-6 flex gap-8">
                    <div className="h-[318px] w-full flex-1 relative">
                      <Image
                        src={approachMenuImageUrl}
                        alt="Approach Image"
                        fill
                        className="object-cover"
                      />

                      {/* {pathname.includes("/approach") && (
                        <div className="absolute left-5 right-5 bottom-5 bg-[#599F99] text-white p-5 text-[13px]">
                          <p className="line-clamp-2 ">{approachMenuDesc}</p>
                        </div>
                      )} */}
                    </div>
                    <ul className="flex flex-col gap-5 flex-1">
                      {approachLinks.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className={cn(
                              "border-b hover:border-b-[1.5px] hover:border-[#C6485D] pb-1.5 text-[1.125rem] leading-[1.688rem] text-[#1A1A1A] hover:text-[#C6485D] font-normal hover:font-medium group transition-all",
                              pathname === item.href &&
                                "text-[#C6485D] font-medium border-[#C6485D] border-b-[1.5px]"
                            )}
                          >
                            <Link href={item.href} legacyBehavior passHref>
                              <NavigationMenuLink
                                onClick={() => {
                                  setApproachMenuImageUrl(item.imageUrl);
                                  setApproachMenuDesc(item.desc);
                                }}
                                className="flex items-center justify-between gap-2"
                              >
                                <div>{item.title}</div>
                                <div className="hidden group-hover:block">
                                  <ArrowIcon />
                                </div>
                              </NavigationMenuLink>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="w-1/3 p-8 flex flex-col gap-6 relative">
                  <h4 className="text-xl font-sintony font-bold">
                    With a client-centric approach, we ensure personalized
                    solutions tailored to meet unique business needs, backed by
                    decades of expertise.
                  </h4>

                  <div className="absolute w-full bottom-0">
                    <IndustriesSVG />
                  </div>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/industries" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              active={pathname === "/industries"}
            >
              Industries
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/job-search" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              active={pathname === "/job-search"}
            >
              Job Search
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/resources/blogs-and-media" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              active={pathname === "/resources/blogs-and-media"}
            >
              Blogs & Media
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuViewport />
    </NavigationMenu>
  );
};

export default Navbar;

interface ListItemProps {
  href: string;
  title: string;
  icon: ComponentType<{ className?: string }> | string;
  active: boolean;
}

const ListItem: React.FC<ListItemProps> = ({ href, title, icon, active }) => {
  const Icon = icon;
  return (
    <li>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink
          className={cn(
            navigationMenuTriggerStyle(),
            "w-full rounded-none justify-between h-full hover:bg-[#E2AF45] px-1 group"
          )}
          active={active}
        >
          <div className="flex items-center justify-start gap-3">
            <div
              className={cn(
                "flex-none size-12 flex items-center justify-center rounded-full bg-[#FDF7ED] group-hover:bg-transparent shadow-[0px 0px 12px 0px #0000001] transition-all duration-300",
                active && "bg-[#e5f6f6]"
              )}
            >
              <Icon
                className={cn(
                  "size-7 text-[#E2AF45] group-hover:text-[#1A1A1A]",
                  active && "text-[#599F99]"
                )}
              />
            </div>
            <div className="text-[1.125rem] leading-[1.688rem] font-medium">
              {title}
            </div>
          </div>
        </NavigationMenuLink>
      </Link>
    </li>
  );
};

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="11"
      viewBox="0 0 16 11"
      fill="none"
    >
      <path
        d="M10.0488 1.54883L14 5.50005M14 5.50005L10.0488 9.45127M14 5.50005H0"
        stroke="#C6485D"
        stroke-width="2"
      />
    </svg>
  );
}
