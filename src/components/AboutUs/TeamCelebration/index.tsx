"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const carouselData = [
  {
    id: "carousel_001",
    imageURL: "/celebrations/cele-1.png",
    alt: "people celebrating together",
  },
  {
    id: "carousel_002",
    imageURL: "/celebrations/cele-2.png",
    alt: "people celebrating together",
  },
  {
    id: "carousel_003",
    imageURL: "/celebrations/cele-3.png",
    alt: "people celebrating together",
  },
  {
    id: "carousel_004",
    imageURL: "/celebrations/cele-4.png",
    alt: "people celebrating together",
  },
  {
    id: "carousel_005",
    imageURL: "/celebrations/cele-1.png",
    alt: "people celebrating together",
  },
  {
    id: "carousel_006",
    imageURL: "/celebrations/cele-2.png",
    alt: "people celebrating together",
  },
  {
    id: "carousel_007",
    imageURL: "/celebrations/cele-3.png",
    alt: "people celebrating together",
  },
  {
    id: "carousel_008",
    imageURL: "/celebrations/cele-4.png",
    alt: "people celebrating together",
  },
  {
    id: "carousel_009",
    imageURL: "/celebrations/cele-1.png",
    alt: "people celebrating together",
  },
  {
    id: "carousel_010",
    imageURL: "/celebrations/cele-2.png",
    alt: "people celebrating together",
  },
  {
    id: "carousel_011",
    imageURL: "/celebrations/cele-3.png",
    alt: "people celebrating together",
  },
  {
    id: "carousel_012",
    imageURL: "/celebrations/cele-4.png",
    alt: "people celebrating together",
  },
  {
    id: "carousel_013",
    imageURL: "/celebrations/cele-1.png",
    alt: "people celebrating together",
  },
  {
    id: "carousel_014",
    imageURL: "/celebrations/cele-2.png",
    alt: "people celebrating together",
  },
  {
    id: "carousel_015",
    imageURL: "/celebrations/cele-3.png",
    alt: "people celebrating together",
  },
  {
    id: "carousel_016",
    imageURL: "/celebrations/cele-4.png",
    alt: "people celebrating together",
  },
];

const TeamCelebration = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, playOnInit: true, stopOnInteraction: true })
  );

  return (
    <div className="w-full">
      <section className="website-container section-padding-y">
        <div className="flex flex-col">
          <div className="section-padding-x">
            <h1 className="section-title">Our Work Culture</h1>
          </div>

          <Carousel
            //@ts-ignore
            plugins={[plugin.current]}
            className="mt-12 w-full"
            onMouseEnter={plugin.current.stop}
            //@ts-ignore
            onMouseLeave={plugin.current.play}
          >
            <CarouselContent className="-ml-1">
              {carouselData.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 mobile-lg:pl-3 md:pl-5 xl:pl-1 basis-full mobile-lg:basis-[70%] mobile-xl:basis-[60%] mobile-2xl:basis-[50%] sm:basis-[46%] md:basis-[40%] lg:basis-[30%] xl:basis-[23%] opacity-100"
                >
                  <div className="w-full xl:w-[17.5rem] h-[17.5rem] relative">
                    <Image
                      src={item.imageURL}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                    <div className="w-full h-full bg-black bg-opacity-50" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              style={{ boxShadow: "0px 0px 40px 0px #00000066" }}
              className="left-5 xl:left-20 size-10 md:size-20 bg-[#FFFFFFCC]"
            />
            <CarouselNext
              style={{ boxShadow: "0px 0px 40px 0px #00000066" }}
              className="right-5 xl:right-20 size-10 md:size-20 bg-[#FFFFFFCC]"
            />
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default TeamCelebration;
