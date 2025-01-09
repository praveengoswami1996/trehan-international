"use client";
import React from "react";
import BenefitCard from "../BenefitCard";
import { cn } from "@/lib/utils";
import InformationPanel from "../InformationPanel";
import { motion } from "framer-motion";

interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface BenefitsSectionWrapperProps {
  benefits: BenefitItem[];
  cardContainerClasses?: string;
  containerClasses?: string;
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
  containerClasses,
}) => {
  return (
    <div className="w-full bg-[#FAFAFA]">
      <section className={cn("website-container section-padding-x section-padding-y", containerClasses)}>
        { sectionTitle && <h1 className="section-title text-center">
          {sectionTitle}
        </h1> }
        { sectionSubTitle && <p className="mt-3 paragraph text-center max-w-[60rem] mx-auto">
          {sectionSubTitle}
        </p> }
        <motion.div 
          className="w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-160px" }}
        >
          {topPanel && <InformationPanel content={topPanel} />}
        </motion.div>
        <div
          className={cn(
            "mt-10 w-full flex justify-center flex-wrap gap-6",
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
        <motion.div 
          className="w-full mt-10"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-160px" }}
        >
          {bottomPanel && <InformationPanel content={bottomPanel} />}
        </motion.div>
      </section>
    </div>
  );
};

export default BenefitsSectionWrapper;
