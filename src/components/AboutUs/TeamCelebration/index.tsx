import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";


const carouselData = [
    {
        id: "carousel_001",
        imageURL: "/celebrations/cele-1.png",
        alt: "people celebrating together"
    },
    {
        id: "carousel_002",
        imageURL: "/celebrations/cele-2.png",
        alt: "people celebrating together"
    },
    {
        id: "carousel_003",
        imageURL: "/celebrations/cele-3.png",
        alt: "people celebrating together"
    },
    {
        id: "carousel_004",
        imageURL: "/celebrations/cele-4.png",
        alt: "people celebrating together"
    },
    {
        id: "carousel_005",
        imageURL: "/celebrations/cele-1.png",
        alt: "people celebrating together"
    },
    {
        id: "carousel_006",
        imageURL: "/celebrations/cele-2.png",
        alt: "people celebrating together"
    },
    {
        id: "carousel_007",
        imageURL: "/celebrations/cele-3.png",
        alt: "people celebrating together"
    },
    {
        id: "carousel_008",
        imageURL: "/celebrations/cele-4.png",
        alt: "people celebrating together"
    },
    {
        id: "carousel_009",
        imageURL: "/celebrations/cele-1.png",
        alt: "people celebrating together"
    },
    {
        id: "carousel_010",
        imageURL: "/celebrations/cele-2.png",
        alt: "people celebrating together"
    },
    {
        id: "carousel_011",
        imageURL: "/celebrations/cele-3.png",
        alt: "people celebrating together"
    },
    {
        id: "carousel_012",
        imageURL: "/celebrations/cele-4.png",
        alt: "people celebrating together"
    },
    {
        id: "carousel_013",
        imageURL: "/celebrations/cele-1.png",
        alt: "people celebrating together"
    },
    {
        id: "carousel_014",
        imageURL: "/celebrations/cele-2.png",
        alt: "people celebrating together"
    },
    {
        id: "carousel_015",
        imageURL: "/celebrations/cele-3.png",
        alt: "people celebrating together"
    },
    {
        id: "carousel_016",
        imageURL: "/celebrations/cele-4.png",
        alt: "people celebrating together"
    },
]

const TeamCelebration = () => {
  return (
    <div className="w-full">
      <section className="w-full max-w-[1440px] mx-auto pt-12 md:pt-16 xl:pt-24 pb-12 md:pb-16 xl:pb-24">
        <div className="flex flex-col items-center">
          <h1 className="section-title text-center">Team Celebration</h1>
          <p className="mt-2.5 text-base md:text-[1.125rem] md:leading-[1.69rem] font-regular text-center max-w-2xl">
            Lorem ipsum dolor sit amet consectetur. Faucibus lectus enim semper
            sed. Tellus donec lectus at in sapien fermentum.
          </p>

          <Carousel 
            className="mt-12 w-full"
          >
            <CarouselContent className="-ml-1">
              {carouselData.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-[23%] opacity-100"
                >
                  <div className="w-[17.5rem] h-[17.5rem] relative">
                    <Image 
                        src={item.imageURL} 
                        alt={item.alt} 
                        fill 
                        className="object-cover"
                    />
                    <div className="w-full h-full bg-black bg-opacity-50"/>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious 
                style={{boxShadow: "0px 0px 40px 0px #00000066"}} className="left-20 size-20 bg-[#FFFFFFCC]"
            />
            <CarouselNext 
                style={{boxShadow: "0px 0px 40px 0px #00000066"}} className="right-20 size-20 bg-[#FFFFFFCC]"
            />
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default TeamCelebration;
