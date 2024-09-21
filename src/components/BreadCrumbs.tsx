"use client";
import { usePathname } from "next/navigation";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import Link from "next/link";

const BreadcrumbLabels = {
    '/about-us': 'About Us',
    '/career': 'Career',
    '/our-openings': 'Open Positions',
    '/services': 'Services',
    '/bulk-hiring-solutions': 'Bulk Hiring Solutions',
    '/executive-search-and-selection': 'Executive Search & Selection',
    '/hr-management-system': 'HR Management System (HRMS)',
    '/project-and-turnkey-staffing-solutions': 'Project & Turnkey Staffing Solutions',
    '/contract-staffing': 'Contract Staffing',
    '/approach': 'Approach',
    '/consultative-approach': 'Consultative Approach',
    '/customized-solutions': 'Customized Solutions',
    '/quality-screening': 'Quality Screening',
    '/compliance': 'Compliance',
    '/recruitment-flow': 'Recruitment Flow',
    '/mobilization-flow': 'Mobilization Flow',
    '/industries': 'Industries',
    '/case-studies': 'Our Case Studies',
    '/resources': 'Resources',
    '/blogs-and-media': 'Our Blogs',
    '/events': 'Our Events',
} as const;

type BreadcrumbKeys = keyof typeof BreadcrumbLabels;

const BreadCrumbs = () => {
  const pathname = usePathname();
  const urlSegments = pathname
    .split("/")
    .filter(Boolean)
    .map((segment) => `/${segment}`);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/" className="text-xs md:text-base font-normal tracking-[0.02em]">
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        {urlSegments.map((segment, index) => {
          return (
            <React.Fragment key={segment}>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={segment} className={cn("text-xs md:text-base font-normal tracking-[0.02em] text-[#1A1A1A]", index === urlSegments.length - 1 && "font-semibold")}>{BreadcrumbLabels[segment as BreadcrumbKeys]}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index < urlSegments.length - 1 && (
                <BreadcrumbSeparator>
                  <SlashIcon />
                </BreadcrumbSeparator>
              )}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbs;
