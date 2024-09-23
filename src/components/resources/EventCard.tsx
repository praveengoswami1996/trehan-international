import Image from "next/image";
import Link from "next/link";
import React from "react";

interface EventItem {
  id: string;
  title: string;
  description: string;
  eventImageUrl: string;
  eventDate: string;
}

interface EventCardProps {
  data: EventItem;
}

const EventCard: React.FC<EventCardProps> = ({ data }) => {
  return (
    <div className="w-full max-w-[30.5rem] h-[29.75rem] bg-[#FAFAFA] overflow-hidden flex flex-col border border-[#EAEAEA]">
      <div className="flex-none w-full h-[16.25rem] relative overflow-hidden">
        <Image
          src={data.eventImageUrl}
          alt={"Case Image"}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-grow p-2 mobile-sm:p-3 mobile-md:p-5 flex flex-col items-start justify-between">
        <div>
          <p className="text-[1.125rem] leading-[1.69rem] text-[#2C374A] font-normal">
            {data.eventDate}
          </p>
          <div className="mt-4">
            <div className="line-clamp-1">
              <h5 className="font-sintony font-bold text-xl leading-[1.875rem]">
                {data.title}
              </h5>
            </div>
            <p className="mt-1 text-base text-[#2C374A] font-normal line-clamp-2">
              {data.description}
            </p>
          </div>
        </div>
        <Link
          href={`/resources/events/${data.id}`}
          className="font-sintony font-bold text-sm text-[#599F99]"
        >
          View Event
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
