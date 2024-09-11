import Image from "next/image";
import React from "react";

const locationsWeServe = [
  {
    id: "location_001",
    name: "Europe",
    flagUrl: "/flags/europe.png",
    altText: "Europe Flag",
  },
  {
    id: "location_002",
    name: "Russia",
    flagUrl: "/flags/russia.png",
    altText: "Russia Flag",
  },
  {
    id: "location_003",
    name: "GCC",
    flagUrl: "/flags/gcc.png",
    altText: "GCC Flag",
  },
  {
    id: "location_004",
    name: "USA",
    flagUrl: "/flags/usa.png",
    altText: "USA Flag",
  },
  {
    id: "location_005",
    name: "Japan",
    flagUrl: "/flags/japan.png",
    altText: "Japan Flag",
  },
];

const LocationsWeServe = () => {
  return (
    <div className="w-full bg-[#1A1A1A]">
      <section className="website-container section-padding-x section-padding-y pb-12">
        <div className="flex flex-col items-center justify-between">
          <h1 className="section-title text-[#ffffff] text-center">
            Locations We Serve
          </h1>
          <p className="mt-2.5 text-base md:text-[1.125rem] md:leading-[1.69rem] font-regular text-[#ffffff] text-center max-w-2xl">
            Our extensive history across industrial verticals/sectors has
            provided us with a rich tapestry of knowledge, allowing...
          </p>

          <div className="mt-12 w-full max-w-[756px] h-[10rem] md:h-[436px] relative">
            <Image
              src={"/world-map.svg"}
              alt={"World Map"}
              fill
              className="object-contain"
            />
          </div>

          <div className="mt-12 flex items-center justify-center flex-wrap gap-x-6 gap-y-3">
            {locationsWeServe.map((location) => {
              return (
                <div key={location.id} className="flex items-center gap-2">
                  <div className="flex-none w-9 h-6 relative">
                    <Image
                      src={location.flagUrl}
                      alt={location.altText}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="font-sintony text-[1.125rem] font-normal text-white">
                    {location.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationsWeServe;
