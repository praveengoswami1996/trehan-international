import Image from "next/image";
import React from "react";

const mobilisationProcessFlow = [
  {
    id: "mobilisation_flow_001",
    title: "Offer Letter Acceptance with Premedical Test",
    count: "/approach/step1.png",
  },
  {
    id: "mobilisation_flow_002",
    title: "Documents Verification for Medical Approved candidates",
    count: "/approach/step2.png",
  },
  {
    id: "mobilisation_flow_003",
    title: "Assisting Candidates for PCC Appointment on time",
    count: "/approach/step3.png",
  },
  {
    id: "mobilisation_flow_004",
    title: "Inform to candidates for Visa received",
    count: "/approach/step4.png",
  },
  {
    id: "mobilisation_flow_005",
    title: "GAMCA Fit, All docs send to Visa Stamping",
    count: "/approach/step5.png",
  },
  {
    id: "mobilisation_flow_006",
    title: "Finally gives Ticket & other documents to candidates",
    count: "/approach/step6.png",
  },
];

const MobilizationProcessFlow = () => {
  return (
    <div className="mt-12 md:mt-24 flex flex-col md:flex-row w-full max-w-[68rem] mx-auto">
      <div className="flex-1">
        <h2 className="section-title max-md:text-center">
          How the Mobilisation Process Flow?
        </h2>
        <p className="text-base md:text-[1.125rem] md:leading-[1.69rem] font-normal text-[#373737] max-md:text-center mt-3">
          Lorem ipsum dolor sit amet consectetur. Risus sapien pharetra lobortis nisl fames eget. Mi nec at in viverra.
        </p>
      </div>
      <div className="flex-1 pl-2 md:pl-10">
        {mobilisationProcessFlow.map((item, index) => {
          return (
            <div
              key={item.id}
              className="flex flex-col md:flex-row gap-8 md:items-center pl-8 md:pl-16 pb-10 border-l border-[#C9C9C9] relative"
            >
              <div className="flex-none">
                <Image
                  src={item.count}
                  alt={`Process Flow Step ${index + 1}`}
                  width={89}
                  height={74}
                  className="object-contain"
                />
              </div>
              <div>
                <h5 className="font-sintony font-bold text-xl text-[#272727] max-w-80">
                  {item.title}
                </h5>
              </div>

              <div className="size-4 border border-[#08065F] rounded-full absolute -left-2 top-7 flex items-center justify-center bg-white">
                <div className="size-2 bg-[#E2AF45] rounded-full" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobilizationProcessFlow;
