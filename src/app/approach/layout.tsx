import WhyChooseTrehan from "@/components/AboutUs/WhyChooseTrehan";
import FeatureSection from "@/components/FeatureSection";
import React from "react";
import OurRecruitmentWorkflow from "@/components/SVGs/OurRecruitmentWorkflow";
import OurDeploymentWorkflow from "@/components/SVGs/OurDeploymentWorkflow";
import {
  DesignIcon34,
  DesignIcon35,
  DesignIcon36,
  DesignIcon38,
  DesignIcon39,
  DesignIcon58,
  DesignIcon63,
  DesignIcon64,
  DesignIcon65,
  DesignIcon66,
  DesignIcon67,
  DesignIcon68,
} from "@/components/icons";

const ourRecruitmentWorkflow = [
  {
    id: "orw_001",
    title: "Job Requirement",
    icon: DesignIcon34,
    primaryColor: "#E2AF45",
    secondaryColor: "#FDF7ED",
  },
  {
    id: "orw_002",
    title: "Multichannel Sourcing",
    icon: DesignIcon35,
    primaryColor: "#599F99",
    secondaryColor: "#EFF6F5",
  },
  {
    id: "orw_003",
    title: "Auto-Screening Application handpicked by AI Filters",
    icon: DesignIcon36,
    primaryColor: "#1A1A1A",
    secondaryColor: "#F4F4F4",
  },
  {
    id: "orw_004",
    title: "Automated Interview calling & attendance marking via Exotel",
    icon: DesignIcon39,
    primaryColor: "#E2AF45",
    secondaryColor: "#FDF7ED",
  },
  {
    id: "orw_005",
    title: "Shortlisted Screened Application",
    icon: DesignIcon38,
    primaryColor: "#1A1A1A",
    secondaryColor: "#F4F4F4",
  },
  {
    id: "orw_006",
    title: "Dedicated Industry team screening by in-house recruiters",
    icon: DesignIcon34,
    primaryColor: "#C6485D",
    secondaryColor: "#FAEDEF",
  },
];

const ourDeployementWorkflow = [
  {
    id: "odw_001",
    title: "Flight scheduled—gearing up for departure",
    icon: DesignIcon64,
    color: "#599F99",
  },
  {
    id: "odw_002",
    title: "Fast-tracking approvals for deployment through Visa Stamping",
    icon: DesignIcon65,
    color: "#E2AF45",
  },
  {
    id: "odw_003",
    title: "Visa received! Time for the GAMCA fitness check",
    icon: DesignIcon66,
    color: "#C6485D",
  },
  {
    id: "odw_004",
    title:
      "PCC & Fingerprint Assistance, ensuring timely clearance for smooth processing",
    icon: DesignIcon67,
    color: "#599F99",
  },
  {
    id: "odw_005",
    title: "Document verification– Only the fit move forward",
    icon: DesignIcon58,
    color: "#E2AF45",
  },
  {
    id: "odw_006",
    title: "Sealing the deal with an offer & a pre-medical check",
    icon: DesignIcon68,
    color: "#C6485D",
  },
];

export default function ApproachLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-white pt-28 relative">
      {children}
      <WhyChooseTrehan backgroundColor="#535353" />

      <div className="md:hidden w-full section-padding-y section-padding-x">
        <h1 className="section-title">Our Recruitment Workflow</h1>
        <div className="mt-5 flex flex-col gap-3">
          {ourRecruitmentWorkflow.map((item) => {
            return (
              <div
                key={item.id}
                style={{ background: item.secondaryColor }}
                className="flex items-center gap-3 p-5 rounded-full hover:scale-[1.02] transition-all duration-300"
              >
                <div
                  style={{ background: item.primaryColor }}
                  className="p-4 rounded-full"
                >
                  <item.icon className="size-[3rem] text-white" />
                </div>
                <div>{item.title}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-md:hidden website-container">
        <OurRecruitmentWorkflow />
      </div>

      <div className="md:hidden w-full section-padding-y section-padding-x bg-[#FDF7ED]">
        <h1 className="section-title">Our Deployment Workflow</h1>
        <div className="mt-5 flex flex-col gap-3">
          {ourDeployementWorkflow.map((item) => {
            return (
              <div
                key={item.id}
                className="flex items-center gap-3 p-3 rounded-full hover:scale-[1.02] transition-all duration-300"
              >
                <item.icon
                  style={{ color: item.color }}
                  className="size-[3rem]"
                />
                <div>{item.title}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-md:hidden website-container">
        <OurDeploymentWorkflow />
      </div>

      <FeatureSection />
    </div>
  );
}
