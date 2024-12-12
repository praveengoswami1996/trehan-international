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

interface DropdownLink {
  title: string;
  href: string;
  icon: React.FC;
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

const serviceLinks: DropdownLink[] = [
  {
    href: "/services/bulk-hiring-solutions",
    title: "Bulk Hiring Solutions",
    icon: DesignIcon1,
  },
  {
    href: "/services/executive-search-and-selection",
    title: "Executive Search & Selection",
    icon: DesignIcon4,
  },
  {
    href: "/services/hr-management-system",
    title: "HR Management System (HRMS)",
    icon: DesignIcon2,
  },
  {
    href: "/services/project-and-turnkey-staffing-solutions",
    title: "Project & Turnkey Staffing Solutions",
    icon: DesignIcon5,
  },
];

const approachLinks: DropdownLink[] = [
  {
    href: "/approach/consultative-approach",
    title: "Consultative Approach",
    icon: DesignIcon6,
  },
  {
    href: "/approach/customized-solutions",
    title: "Customized Solutions",
    icon: DesignIcon9,
  },
  { 
    href: "/approach/compliance", 
    title: "Compliance", 
    icon: DesignIcon10 
  },
];

// const resourceLinks: DropdownLink[] = [
//   {
//     href: "/resources/blogs-and-media",
//     title: "Blogs & Media",
//     icon: DesignIcon1,
//   },
//   { href: "/resources/events", title: "Events", icon: DesignIcon11 },
// ];

const Navbar = () => {
  const pathname = usePathname();

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
            className={cn(pathname.includes("/about-us") && "bg-[#599F99] text-white")}>About Us</NavigationMenuTrigger>
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
          <NavigationMenuTrigger className={cn(pathname.includes("/services") && "bg-[#599F99] text-white")}>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-5">
              <h6 className="font-normal text-[1.125rem] leading-[1.688rem] text-[#535353]">
                Our Services
              </h6>
              <ul className="mt-4 grid grid-cols-2 gap-3 w-[799px]">
                {serviceLinks.map((item, index) => {
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
          <NavigationMenuTrigger className={cn(pathname.includes("/approach") && "bg-[#599F99] text-white")}>Approach</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-5">
              <h6 className="font-normal text-[1.125rem] leading-[1.688rem] text-[#535353]">
                Our Approach
              </h6>
              <ul className="mt-4 grid grid-cols-1 gap-3 w-[418px]">
                {approachLinks.map((item, index) => {
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

        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-5">
              <h6 className="font-normal text-[1.125rem] leading-[1.688rem] text-[#535353]">Resources</h6>
              <ul className="mt-4 flex flex-col gap-2 w-[418px]">
                {resourceLinks.map((item, index) => {
                  return (
                    <ListItem key={index} href={item.href} title={item.title} icon={item.icon} />
                  )
                })}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem> */}

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
  icon: ComponentType<{ className?: string }>;
  active: boolean
}

const ListItem: React.FC<ListItemProps> = ({ href, title, icon, active }) => {
  const Icon = icon;
  return (
    <li>
      <Link 
        href={href} 
        legacyBehavior 
        passHref
      >
        <NavigationMenuLink
          className={cn(
            navigationMenuTriggerStyle(),
            "w-full rounded-none justify-between h-full hover:bg-[#E2AF45] px-1 group"
          )}
          active={active}
        >
          <div className="flex items-center justify-start gap-3">
            <div className={cn("flex-none size-12 flex items-center justify-center rounded-full bg-[#FDF7ED] group-hover:bg-transparent shadow-[0px 0px 12px 0px #0000001] transition-all duration-300", active && "bg-[#e5f6f6]")}>
              <Icon
                className={cn("size-7 text-[#E2AF45] group-hover:text-[#1A1A1A]", active && "text-[#599F99]")}
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
