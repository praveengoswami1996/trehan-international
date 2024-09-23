import BreadCrumbs from "@/components/BreadCrumbs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import EventCard from "@/components/resources/EventCard";

const events = [
  {
    id: "event_001",
    title: "ASA THRIVE Virtual",
    description: "Lorem ipsum dolor sit amet, adipiscing elit. Nunc vulputate libero et velit interdum Lorem ipsum dolor sit amet, adipiscing elit. Nunc vulputate libero et velit interdum",
    eventImageUrl: "/events/event-1.png",
    eventDate: "May 2, 2024",
  },
  {
    id: "event_002",
    title: "ASA Staffing Law & Compliance Conference",
    description: "Who should attend the ASA Staffing Law & Compliance Conference? Staffing executives, owners, attorneys Who should attend the ASA Staffing Law & Compliance Conference? Staffing executives, owners, attorneys",
    eventImageUrl: "/events/event-2.png",
    eventDate: "May 2, 2024",
  },
  {
    id: "event_003",
    title: "SHRM Annual Conference & Expo 2024",
    description: "Join forward-thinking HR professionals who are committed to creating a better HR landscape. Imme Join forward-thinking HR professionals who are committed to creating a better HR landscape.",
    eventImageUrl: "/events/event-3.png",
    eventDate: "May 2, 2024",
  },
  {
    id: "event_004",
    title: "SHRM Annual Conference & Expo 2024",
    description: "Join forward-thinking HR professionals who are committed to creating a better HR landscape. Imme Join forward-thinking HR professionals who are committed to creating a better HR landscape.",
    eventImageUrl: "/events/event-4.png",
    eventDate: "May 2, 2024",
  },
  {
    id: "event_005",
    title: "SHRM Annual Conference & Expo 2024",
    description: "Join forward-thinking HR professionals who are committed to creating a better HR landscape. Imme Join forward-thinking HR professionals who are committed to creating a better HR landscape.",
    eventImageUrl: "/events/event-5.png",
    eventDate: "May 2, 2024",
  },
  {
    id: "event_006",
    title: "SHRM Annual Conference & Expo 2024",
    description: "Join forward-thinking HR professionals who are committed to creating a better HR landscape. Imme Join forward-thinking HR professionals who are committed to creating a better HR landscape.",
    eventImageUrl: "/events/event-6.png",
    eventDate: "May 2, 2024",
  },
  {
    id: "event_007",
    title: "SHRM Annual Conference & Expo 2024",
    description: "Join forward-thinking HR professionals who are committed to creating a better HR landscape. Imme Join forward-thinking HR professionals who are committed to creating a better HR landscape.",
    eventImageUrl: "/events/event-7.png",
    eventDate: "May 2, 2024",
  },
  {
    id: "event_008",
    title: "SHRM Annual Conference & Expo 2024",
    description: "Join forward-thinking HR professionals who are committed to creating a better HR landscape. Imme Join forward-thinking HR professionals who are committed to creating a better HR landscape.",
    eventImageUrl: "/events/event-8.png",
    eventDate: "May 2, 2024",
  },
  {
    id: "event_009",
    title: "SHRM Annual Conference & Expo 2024",
    description: "Join forward-thinking HR professionals who are committed to creating a better HR landscape. Imme Join forward-thinking HR professionals who are committed to creating a better HR landscape.",
    eventImageUrl: "/events/event-9.png",
    eventDate: "May 2, 2024",
  },
  {
    id: "event_010",
    title: "SHRM Annual Conference & Expo 2024",
    description: "Join forward-thinking HR professionals who are committed to creating a better HR landscape. Imme Join forward-thinking HR professionals who are committed to creating a better HR landscape.",
    eventImageUrl: "/events/event-10.png",
    eventDate: "May 2, 2024",
  },
];

const Events = () => {
  return (
    <div className="page">
      <div className="hidden mobile-sm:block absolute top-10 md:-top-36 lg:-top-10 left-1/2 -translate-x-1/2 size-[15rem] mobile-sm:size-[20rem] md:size-[33.25rem]">
        <Image
          src="/bg-pattern-20.svg"
          alt="Background Pattern Image"
          fill
          className="object-contain"
        />
      </div>

      {/* Hero Section */}
      <div className="w-full">
        <section className="website-container section-padding-x section-padding-bottom">
          <div className="flex flex-col items-center">
            <BreadCrumbs />
            <div className="mt-5 w-full flex flex-col items-center">
              <h1 className="font-sintony text-[2.4rem] lg:text-[3.25rem] leading-[3rem] lg:leading-[4.88rem] font-bold text-center max-w-4xl mx-auto">
                Our Events
              </h1>
              <p className="paragraph text-center mt-5 max-w-[34rem] mx-auto">
                Lorem ipsum dolor sit amet consectetur. Sit in nec sagittis amet sed convallis nibh.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Case Studies */}
      <div className="w-full border-b border-[#D9D9D9]">
        <section className="website-container section-padding-x section-padding-bottom pt-0 mobile-sm:pt-16 mobile-md:pt-20">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[63rem] grid justify-items-center grid-cols-1 mobile-2xl:grid-cols-2 gap-6">
              {events.map((item) => {
                return (
                  <EventCard key={item.id} data={item}/>
                );
              })}
            </div>

            <div className="mt-14">
              <Button variant={"outline"} className={"w-fit border-[#1A1A1A]"}>
                Load More
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;
