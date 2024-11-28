import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface ImageContentPanelProps {
    imagePlacement?: "left" | "right";
    title: string;
    content: string | React.ReactNode;
    imageUrl: string;
    altText: string;
    id?: string;
}

const ImageContentPanel: React.FC<ImageContentPanelProps> = ({ title, content, imageUrl, altText, imagePlacement = "right", id }) => {
  return (
    <div id={id} className={cn("flex flex-col", imagePlacement === "left" ? "xl:flex-row-reverse" : "xl:flex-row")}>
      <div className="w-full flex flex-col justify-center items-start">
        <h1 className="section-title">
          {title}
        </h1>
        <p className="mt-2.5 paragraph">
          {content}
        </p>
      </div>

      <div className={cn("w-full flex justify-center", imagePlacement === "left" ? "xl:justify-start" : "xl:justify-end")}>
        <div className="max-xl:mt-5 lex-none w-full max-w-[31.25rem] h-[20rem] lg:h-[24rem] xl:h-[37.5rem] relative">
          <Image
            src={imageUrl}
            alt={altText}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageContentPanel;
