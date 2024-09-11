import React from "react";
import { AttestationIcon, InterHiringIcon, LocalHiringIcon } from "./icons";

const features = [
  {
    id: "features_001",
    title: "Local Hiring",
    desc: "Hiring from GCC",
    icon: LocalHiringIcon,
  },
  {
    id: "features_002",
    title: "International Hiring",
    desc: "Government Approved Recruitment Co. To Fulfil Manpower Request, on time ",
    icon: InterHiringIcon,
  },
  {
    id: "features_003",
    title: "Attestation",
    desc: "Attest my Doc reliable partner to Attest Documentation of your workers both from Kuwait and India",
    icon: AttestationIcon,
  },
];

const FeatureSection = () => {
  return (
    <div className="w-full bg-[#1A1A1A]">
      <section className="website-container section-padding-x section-padding-y pb-14">
        <h1 className="section-title leading-[3rem] text-[#FFFFFF]">
          A single destination to manage all things frontline
        </h1>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="flex items-start gap-5">
                <div>
                  <Icon className="text-[#FFFFFF] size-10 md:size-12" />
                </div>
                <div>
                  <h4 className="font-sintony font-bold text-xl md:text-2xl leading-9 text-[#ffffff]">
                    {item.title}
                  </h4>
                  <p className="font-normal text-[#FFFFFF] text-base md:text-[1.125rem] md:leading-[1.688rem]">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default FeatureSection;
