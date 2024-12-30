import React, { ComponentType } from "react";
import BenefitCard from "../BenefitCard";
import { cn } from "@/lib/utils";
import InformationPanel from "../InformationPanel";
interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface BenefitsSectionWrapperProps {
  benefits: BenefitItem[];
  cardContainerClasses?: string;
  infoPanel?: string;
}

const BenefitsSectionWrapper: React.FC<BenefitsSectionWrapperProps> = ({
  benefits,
  cardContainerClasses,
  infoPanel,
}) => {
  return (
    <div className="w-full bg-[#F9F9F9]">
      <section className="website-container section-padding-x section-padding-y">
        <div
          className={cn(
            "w-full flex justify-center flex-wrap gap-6",
            cardContainerClasses
          )}
        >
          {benefits.map((item, index) => {
            return (
              <BenefitCard
                key={item.id}
                title={item.title}
                description={item.description}
                icon={item.icon}
                index={index}
              />
            );
          })}
        </div>
        <div className="w-full mt-6">
          {infoPanel && <InformationPanel content={infoPanel} />}
        </div>
      </section>
    </div>
  );
};

export default BenefitsSectionWrapper;
