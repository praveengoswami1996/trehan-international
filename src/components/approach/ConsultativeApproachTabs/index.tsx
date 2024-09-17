import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StrategicSourcing from "./StrategicSourcing";
import QualityScreening from "./QualityScreening";
import StructuredInterviews from "./StructuredInterviews";
import SeamlessOnboarding from "./SeamlessOnboarding";

const TabsArr = [
    {
        id: "strategic-sourcing",
        value: "strategic-sourcing",
        label: "Strategic Sourcing",
    },
    {
        id: "quality-screening",
        value: "quality-screening",
        label: "Quality Screening",
    },
    {
        id: "structured-interviews",
        value: "structured-interviews",
        label: "Structured Interviews",
    },
    {
        id: "seamless-onboarding",
        value: "seamless-onboarding",
        label: "Seamless Onboarding",
    },
];

const ConsultativeApproachTabs = () => {
  return (
    <Tabs defaultValue="strategic-sourcing" className="w-full">
      <TabsList className="max-md:w-full flex-col md:flex-row gap-5 rounded-none bg-transparent">
        {TabsArr.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.value} className="w-full rounded-none px-4 py-3 text-[1.125rem] font-normal text-white data-[state=active]:bg-[#599F99] data-[state=active]:text-white">
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="strategic-sourcing" className="mt-52">
        <StrategicSourcing />
      </TabsContent>
      <TabsContent value="quality-screening" className="mt-14">
        {/* <QualityScreening /> */}
        <StrategicSourcing />
      </TabsContent>
      <TabsContent value="structured-interviews" className="mt-14">
        {/* <StructuredInterviews /> */}
        <StrategicSourcing />
      </TabsContent>
      <TabsContent value="seamless-onboarding" className="mt-14">
        {/* <SeamlessOnboarding /> */}
        <StrategicSourcing />
      </TabsContent>
    </Tabs>
  );
};

export default ConsultativeApproachTabs;
