import { CalendarIcon, LeftArrowIcon, LocationIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const events = [
  {
    id: "event_001",
    title: "ASA THRIVE Virtual",
    description:
      "Lorem ipsum dolor sit amet, adipiscing elit. Nunc vulputate libero et velit interdum Lorem ipsum dolor sit amet, adipiscing elit. Nunc vulputate libero et velit interdum",
    eventImageUrl: "/events/event-1.png",
    eventDate: "May 2, 2024",
  },
  {
    id: "event_002",
    title: "ASA Staffing Law & Compliance Conference",
    description:
      "Who should attend the ASA Staffing Law & Compliance Conference? Staffing executives, owners, attorneys Who should attend the ASA Staffing Law & Compliance Conference? Staffing executives, owners, attorneys",
    eventImageUrl: "/events/event-2.png",
    eventDate: "May 2, 2024",
  },
  {
    id: "event_003",
    title: "SHRM Annual Conference & Expo 2024",
    description:
      "Join forward-thinking HR professionals who are committed to creating a better HR landscape. Imme Join forward-thinking HR professionals who are committed to creating a better HR landscape.",
    eventImageUrl: "/events/event-3.png",
    eventDate: "May 2, 2024",
  },
  {
    id: "event_004",
    title: "SHRM Annual Conference & Expo 2024",
    description:
      "Join forward-thinking HR professionals who are committed to creating a better HR landscape. Imme Join forward-thinking HR professionals who are committed to creating a better HR landscape.",
    eventImageUrl: "/events/event-4.png",
    eventDate: "May 2, 2024",
  },
  {
    id: "event_005",
    title: "SHRM Annual Conference & Expo 2024",
    description:
      "Join forward-thinking HR professionals who are committed to creating a better HR landscape. Imme Join forward-thinking HR professionals who are committed to creating a better HR landscape.",
    eventImageUrl: "/events/event-5.png",
    eventDate: "May 2, 2024",
  },
  {
    id: "event_006",
    title: "SHRM Annual Conference & Expo 2024",
    description:
      "Join forward-thinking HR professionals who are committed to creating a better HR landscape. Imme Join forward-thinking HR professionals who are committed to creating a better HR landscape.",
    eventImageUrl: "/events/event-6.png",
    eventDate: "May 2, 2024",
  },
  {
    id: "event_007",
    title: "SHRM Annual Conference & Expo 2024",
    description:
      "Join forward-thinking HR professionals who are committed to creating a better HR landscape. Imme Join forward-thinking HR professionals who are committed to creating a better HR landscape.",
    eventImageUrl: "/events/event-7.png",
    eventDate: "May 2, 2024",
  },
  {
    id: "event_008",
    title: "SHRM Annual Conference & Expo 2024",
    description:
      "Join forward-thinking HR professionals who are committed to creating a better HR landscape. Imme Join forward-thinking HR professionals who are committed to creating a better HR landscape.",
    eventImageUrl: "/events/event-8.png",
    eventDate: "May 2, 2024",
  },
  {
    id: "event_009",
    title: "SHRM Annual Conference & Expo 2024",
    description:
      "Join forward-thinking HR professionals who are committed to creating a better HR landscape. Imme Join forward-thinking HR professionals who are committed to creating a better HR landscape.",
    eventImageUrl: "/events/event-9.png",
    eventDate: "May 2, 2024",
  },
  {
    id: "event_010",
    title: "SHRM Annual Conference & Expo 2024",
    description:
      "Join forward-thinking HR professionals who are committed to creating a better HR landscape. Imme Join forward-thinking HR professionals who are committed to creating a better HR landscape.",
    eventImageUrl: "/events/event-10.png",
    eventDate: "May 2, 2024",
  },
];

const latestEvents = [
  {
    id: "latest_event_001",
    title: "ASA THRIVE Virtual",
    description:
      "Every THRIVE event features powerful and inspiring presenters from throughout the staffing industry, who will share lessons Every THRIVE event features powerful and inspiring presenters from throughout the staffing industry, who will share lessons",
    eventImageUrl: "/events/event-1.png",
    eventDate: "May 2, 2024",
    mode: "Online",
    location: undefined,
  },
  {
    id: "latest_event_002",
    title: "ASA Staffing Law & Compliance Conference",
    description:
      "Who should attend the ASA Staffing Law & Compliance Conference? Staffing executives, owners, attorneys, HR manage Who should attend the ASA Staffing Law & Compliance Conference? Staffing executives, owners, attorneys, HR manage",
    eventImageUrl: "/events/event-2.png",
    eventDate: "May 16-17, 2024",
    mode: undefined,
    location: "Mumbai, IND",
  },
  {
    id: "latest_event_003",
    title: "SHRM Annual Conference & Expo 2024",
    description:
      "Join forward-thinking HR professionals who are committed to creating a better HR landscape. Immerse yourself in thought Join forward-thinking HR professionals who are committed to creating a better HR landscape. Immerse yourself in thought",
    eventImageUrl: "/events/event-3.png",
    eventDate: "May 16-17, 2024",
    mode: undefined,
    location: "Mumbai, IND",
  },
];

const EventDetailsPage = ({ params }: { params: { eventId: string } }) => {
  const eventData = events.find((item) => item.id === params.eventId);

  return (
    <div className="min-h-screen bg-white relative pt-32">
      <div className="website-container section-padding-x section-padding-bottom">
        <div className="w-full max-w-4xl mx-auto">
          <Link
            href={"/resources/events"}
            className="inline-flex items-center gap-2.5"
          >
            <LeftArrowIcon />
            <span className="text-sm tracking-wide font-normal text-[#535353]">
              Back
            </span>
          </Link>
          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <h3 className="section-title line-clamp-2">{eventData?.title}</h3>
              <div className="mt-2 flex items-center gap-6">
                <div className="flex items-center gap-2.5 p-0">
                  <CalendarIcon />
                  <p className="text-[1.125rem] leading-[1.69rem] text-[#1A1A1A] font-medium">
                    {eventData?.eventDate}
                  </p>
                </div>
                <div>|</div>
                <div className="flex items-center gap-2.5">
                  <LocationIcon />
                  <p className="text-[1.125rem] leading-[1.69rem] text-[#1A1A1A] font-medium">
                    Mumbai, India
                  </p>
                </div>
              </div>
            </div>

            <div className="mr-6">
              <Button variant={"outline"} className={"w-fit border-[#1A1A1A]"}>
                Register Now - Click Here
              </Button>
            </div>
          </div>

          <div className="mt-10 w-full h-[20rem] md:h-[26.25rem] relative">
            <Image
              src={eventData?.eventImageUrl || "/blogs/blog-6.png"}
              alt={eventData?.title || "Blog Image"}
              fill
              className="object-cover"
            />
          </div>

          <div className="mt-8">
            <p className="text-[1.125rem] leading-[1.69rem] text-[#535353] font-normal">
              Lorem ipsum dolor sit amet consectetur. Molestie ut pellentesque
              pulvinar magna. In commodo massa blandit a fermentum. Tincidunt
              ultrices enim maecenas tincidunt. Non eget egestas proin odio
              aliquet pellentesque aliquam pellentesque gravida.
            </p>

            <div className="mt-10">
              <h5 className="font-sintony font-bold text-[#1A1A1A] text-xl">
                Heading
              </h5>
              <p className="mt-5 text-[1.125rem] leading-[1.69rem] text-[#535353] font-normal">
                Lorem ipsum dolor sit amet consectetur. Massa facilisi aliquet
                non ipsum dui urna leo diam. Nisl amet sed quam maecenas proin.
                Scelerisque volutpat pharetra non fermentum eleifend nibh. Sed a
                imperdiet est ultricies gravida justo condimentum. Non in
                pharetra malesuada elementum eros vulputate blandit. Curabitur
                pellentesque sociis vulputate pharetra fames a.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur. Massa facilisi aliquet
                non ipsum dui urna leo diam. Nisl amet sed quam maecenas proin.
                Scelerisque volutpat pharetra non fermentum eleifend nibh. Sed a
                imperdiet est ultricies gravida justo condimentum. Non in
                pharetra malesuada elementum eros vulputate blandit. Curabitur
                pellentesque sociis vulputate pharetra fames a.
              </p>
            </div>

            <div className="mt-10">
              <h5 className="font-sintony font-bold text-[#1A1A1A] text-xl">
                Heading
              </h5>
              <p className="mt-5 text-[1.125rem] leading-[1.69rem] text-[#535353] font-normal">
                Lorem ipsum dolor sit amet consectetur. Massa facilisi aliquet
                non ipsum dui urna leo diam. Nisl amet sed quam maecenas proin.
                Scelerisque volutpat pharetra non fermentum eleifend nibh. Sed a
                imperdiet est ultricies gravida justo condimentum. Non in
                pharetra malesuada elementum eros vulputate blandit. Curabitur
                pellentesque sociis vulputate pharetra fames a.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur. Molestie ut pellentesque
                pulvinar magna. In commodo massa blandit a fermentum. Tincidunt
                ultrices enim maecenas tincidunt. Non eget egestas proin odio
                aliquet pellentesque aliquam pellentesque gravida.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur. Massa facilisi aliquet
                non ipsum dui urna leo diam. Nisl amet sed quam maecenas proin.
                Scelerisque volutpat pharetra non fermentum eleifend nibh. Sed a
                imperdiet est ultricies gravida justo condimentum. Non in
                pharetra malesuada elementum eros vulputate blandit. Curabitur
                pellentesque sociis vulputate pharetra fames a.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Blogs Section */}
      <div className="w-full bg-[#000000]">
        <section className="website-container section-padding-x section-padding-y">
          <div>
            <div className="flex items-center justify-between">
              <h1 className="section-title text-white">Latest Events</h1>
              <Link href={"/resources/events"}>
                <Button
                  variant={"outline"}
                  className={
                    "border-white text-base font-bold text-white leading-5 bg-[#000000] w-fit"
                  }
                >
                  View All Events
                </Button>
              </Link>
            </div>

            <div className="w-full mt-10 grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestEvents.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="w-full max-w-[24rem] bg-[#000000] overflow-hidden flex flex-col gap-5"
                  >
                    <div className="flex-none w-full h-[17.5rem] relative overflow-hidden">
                      <Image
                        src={item.eventImageUrl}
                        alt={"Event Image"}
                        fill
                        className="object-cover scale-110"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[1.125rem] leading-[1.69rem] font-normal text-[#FFFFFF99]">
                        {item.eventDate} | {item.mode || item.location}
                      </p>
                      <h4 className="text-white font-sintony font-bold text-2xl leading-[2.25rem]">
                        {item.title}
                      </h4>
                    </div>
                    <p className="line-clamp-3 text-white">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EventDetailsPage;
