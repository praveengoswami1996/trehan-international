import React, { ComponentType } from "react";
import BenefitCard from "../BenefitCard";
import { cn } from "@/lib/utils";
import InformationPanel from "../InformationPanel";

interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}

interface BenefitsSectionWrapperProps {
  benefits: BenefitItem[];
  cardContainerClasses?: string;
  sectionTitle?: string;
  sectionSubTitle?: string;
  topPanel?: string;
  bottomPanel?: string;
}

const BenefitsSectionWrapper: React.FC<BenefitsSectionWrapperProps> = ({
  benefits,
  cardContainerClasses,
  sectionTitle,
  sectionSubTitle,
  topPanel,
  bottomPanel,
}) => {
  return (
    <div className="w-full bg-[#FAFAFA]">
      <section className="website-container section-padding-x section-padding-y">
        { sectionTitle && <h1 className="section-title text-center">
          {sectionTitle}
        </h1> }
        { sectionSubTitle && <p className="mt-3 paragraph text-center max-w-[60rem]">
          {sectionSubTitle}
        </p> }
        <div className="w-full">
          {topPanel && <InformationPanel content={topPanel} />}
        </div>
        <div
          className={cn(
            "mt-10 w-full flex justify-center flex-wrap gap-6",
            cardContainerClasses
          )}
        >
          {benefits.map((item) => {
            return (
              <BenefitCard
                key={item.id}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            );
          })}
        </div>
        <div className="w-full mt-10">
          {bottomPanel && <InformationPanel content={bottomPanel} />}
        </div>
      </section>
    </div>
  );
};

export default BenefitsSectionWrapper;
