import Image from "next/image";
import React from "react";

interface BannerImageWrapperProps {
  imageURL: string;
  altText: string;
}

const BannerImageWrapper: React.FC<BannerImageWrapperProps> = ({
  imageURL,
  altText,
}) => {
  return (
    <div className="w-full">
      <div className="website-container h-72 mobile-2xl:h-80 md:h-[26rem] lg:h-[37.5rem] relative">
        <Image 
            src={imageURL}
            alt={altText}
            fill
            className="object-cover object-right-center"
            loading="lazy"
        />
      </div>
    </div>
  );
};

export default BannerImageWrapper;
