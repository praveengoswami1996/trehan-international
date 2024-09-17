import React from "react";
import RecruitmentFlow from "./RecruitmentFlow";
import MobilizationProcessFlow from "./MobilizationProcessFlow";

const HowRecruitmentFlowWorks = () => {
  return (
    <div className="w-full">
      <section className="website-container section-padding-x section-padding-y">
        <RecruitmentFlow />
        <MobilizationProcessFlow />
      </section>
    </div>
  );
};

export default HowRecruitmentFlowWorks;
