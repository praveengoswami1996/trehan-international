"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  QualityScreeningIcon,
  SeamlessOnboardingIcon,
  StrategicSourcingIcon,
  StructuredInterviewsIcon,
} from "@/components/icons";
import StrategicSourcing from "./StrategicSourcing";
import QualityScreening from "./QualityScreening";
import StructuredInterviews from "./StructuredInterviews";
import SeamlessOnboarding from "./SeamlessOnboarding";
import { cn } from "@/lib/utils";

const TabsArr = [
  {
    id: "strategic-sourcing",
    value: "strategic-sourcing",
    label: "STRATEGIC SOURCING",
    icon: StrategicSourcingIcon,
  },
  {
    id: "quality-screening",
    value: "quality-screening",
    label: "QUALITY SCREENING",
    icon: QualityScreeningIcon,
  },
  {
    id: "structured-interviews",
    value: "structured-interviews",
    label: "STRUCTURED INTERVIEWS",
    icon: StructuredInterviewsIcon,
  },
  {
    id: "seamless-onboarding",
    value: "seamless-onboarding",
    label: "SEAMLESS ONBOARDING",
    icon: SeamlessOnboardingIcon,
  },
];

const ConsultativeApproachTabs = () => {
  const [activeTab, setActiveTab] = React.useState("strategic-sourcing");

  return (
    <Tabs defaultValue="strategic-sourcing" className="w-full" value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 bg-transparent">
        {TabsArr.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.value}
            className="w-full rounded-none px-5 py-5 text-base font-normal text-white data-[state=active]:bg-white data-[state=active]:text-[#000000] bg-white bg-opacity-10 inline-flex items-center justify-start gap-4"
          >
            <span className={cn("p-1.5 bg-white bg-opacity-20 rounded-xl", activeTab === tab.value && "bg-[#599F99] bg-opacity-100")}>
              <tab.icon className="size-6 text-white" />
            </span>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent
        value="strategic-sourcing"
        className="mt-[19rem] sm:mt-40 xl:mt-20"
      >
        <StrategicSourcing />
      </TabsContent>
      <TabsContent
        value="quality-screening"
        className="mt-[19rem] sm:mt-40 xl:mt-20"
      >
        <QualityScreening />
      </TabsContent>
      <TabsContent
        value="structured-interviews"
        className="mt-[19rem] sm:mt-40 xl:mt-20"
      >
        <StructuredInterviews />
      </TabsContent>
      <TabsContent
        value="seamless-onboarding"
        className="mt-[19rem] sm:mt-40 xl:mt-20"
      >
        <SeamlessOnboarding />
      </TabsContent>
    </Tabs>
  );
};

export default ConsultativeApproachTabs;
