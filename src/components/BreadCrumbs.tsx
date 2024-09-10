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

const BreadcrumbLabels = {
    '/about-us': 'About Us',
    '/career': 'Career'
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
          <BreadcrumbLink href="/" className="text-base font-normal tracking-[0.02em]">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        {urlSegments.map((segment, index) => {
          return (
            <React.Fragment key={segment}>
              <BreadcrumbItem>
                <BreadcrumbLink href={segment} className={cn("text-base font-normal tracking-[0.02em] text-[#1A1A1A]", index === urlSegments.length - 1 && "font-semibold")}>{BreadcrumbLabels[segment as BreadcrumbKeys]}</BreadcrumbLink>
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
