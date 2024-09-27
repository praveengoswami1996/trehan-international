import ContactUsForm from "@/components/ContactUsForm";
import {
  EmailIcon,
  EmailIcon2,
  LiveChatIcon,
  LocationIcon2,
  PhoneIcon2,
  PhoneIcon3,
} from "@/components/icons";
import Image from "next/image";
import React from "react";

const contactDetails = [
  {
    id: "contact_detail_001",
    value: "hello@sahana.com",
    label: "Share a detailed specification",
    icon: EmailIcon,
  },
  {
    id: "contact_detail_002",
    value: "+91 123 456 7890",
    label: "Connect on Phone",
    icon: PhoneIcon2,
  },
  {
    id: "contact_detail_003",
    value: "Live chat with us",
    label: "Begin a quick discussion",
    icon: LiveChatIcon,
  },
];

const ourOffices = [
  {
    id: "office_001",
    location: "Delhi, India",
    address:
      "Delhi (India Head Office Address) - 103, Raja Garden, New Delhi 110015",
    phone: {
      job: "+91 959966500",
      client: "+96 598881865",
    },
    email: {
      job: "jobs@trehanint.com",
      client: "solutions@trehanint.com",
    },
  },
  {
    id: "office_002",
    location: "Mumbai, India",
    address:
      "D-109, Crystal Plaza, Opp. Infinity Mall, New Link Rd. Andheri West, Mumbai-53",
    phone: {
      job: "+91 959966500",
      client: "+96 598881865",
    },
    email: {
      job: "jobs@trehanint.com",
      client: "solutions@trehanint.com",
    },
  },
  {
    id: "office_003",
    location: "Salmiya, Kuwait",
    address:
      "Salmiya Star Complex Unit 7 Floor 4 Salmiya Block 9 Salem Al Mubarak Street, Kuwait",
    phone: {
      job: "+91 959966500",
      client: "+96 598881865",
    },
    email: {
      job: "jobs@trehanint.com",
      client: "solutions@trehanint.com",
    },
  },
];

const officeLocations = [
  {
    id: "location_001",
    name: "Delhi, IND",
    flag: "/flags/india.png",
  },
  {
    id: "location_001",
    name: "Mumbai, IND",
    flag: "/flags/india.png",
  },
  {
    id: "location_001",
    name: "Salmiya, Kuwait",
    flag: "/flags/kuwait.png",
  },
];

const ContactUs = () => {
  return (
    <div className="page">
      <div className="w-full">
        <section className="website-container section-padding-x pt-10 pb-20 relative overflow-hidden">
          <div className="w-full max-w-[61rem] mx-auto flex gap-14 items-center">
            <div className="flex-1">
              <h1 className="hero-text">Contact Us</h1>
              <p className="paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s.
              </p>

              <div className="mt-10 flex flex-col gap-8">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.id} className="flex gap-5 items-center">
                      <div className="flex-none bg-[#FDF7ED] rounded-full p-3">
                        <Icon className="size-[2.375rem] text-[#E2AF45]" />
                      </div>
                      <div>
                        <h5 className="font-sintony font-bold text-xl text-[#1A1A1A]">
                          {item.value}
                        </h5>
                        <p>{item.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className=" flex-1">
              <ContactUsForm />
            </div>
          </div>

          <div className="absolute -bottom-48 -left-20 size-[33.25rem]">
            <Image
              src={"/bg-pattern-20.svg"}
              alt="background pattern image"
              fill
              className="object-contain"
            />
          </div>
        </section>
      </div>

      {/* Our Offices Section */}
      <div className="w-full bg-[#000000]">
        <section className="website-container section-padding-x section-padding-top pb-5">
          <div>
            <h2 className="section-title text-white text-center">
              Our Offices
            </h2>

            <div className="mt-11 grid grid-cols-3 gap-8">
              {ourOffices.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="bg-[#141414] p-5 shadow-[0px_0px_100px_0px_#000000CC] flex flex-col gap-5 z-[1]"
                  >
                    <h5 className="text-xl font-sintony font-bold text-white">
                      {item.location}
                    </h5>
                    
                    <div className="flex items-start gap-3">
                      <div>
                        <LocationIcon2 className="text-white size-6" />
                      </div>
                      <div className="text-white text-base font-normal">
                        {item.address}
                      </div>
                    </div>
                   
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <PhoneIcon3 className="text-white size-4.5" />
                      </div>
                      <div className="w-full">
                        <div className="text-white text-base font-normal flex">
                          <div className="basis-16">Job:</div>
                          <div className="inline-block flex-1 font-semibold">
                            {item.phone.job}
                          </div>
                        </div>
                        <div className="w-full text-white text-base font-normal flex">
                          <div className="basis-16">Client:</div>
                          <div className="inline-block flex-1 font-semibold">
                            {item.phone.client}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <EmailIcon2 className="text-white size-4.5" />
                      </div>
                      <div className="w-full">
                        <div className="text-white text-base font-normal flex">
                          <div className="basis-16">Job:</div>
                          <div className="inline-block flex-1 font-semibold">
                            {item.email.job}
                          </div>
                        </div>
                        <div className="w-full text-white text-base font-normal flex">
                          <div className="basis-16">Client:</div>
                          <div className="inline-block flex-1 font-semibold">
                            {item.email.client}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="-mt-24 flex-none size-[46.75rem] relative mx-auto">
              <Image
                src={"/bg-pattern-white-10.svg"}
                alt="background pattern image"
                fill
                className="object-contain"
              />

              <div className="mt-8 absolute w-full h-full top-0 left-0">
                <Image
                  src={"/our-offices.png"}
                  alt="Office locations"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="w-full absolute bottom-12 left-0 flex items-center justify-center gap-12">
                {officeLocations.map((item) => {
                  return (
                    <div key={item.id} className="flex gap-4">
                      <div className="flex-none">
                        <Image 
                          src={item.flag}
                          alt={`${item.name} flag`}
                          width={36}
                          height={23.85}
                          className="object-cover"
                        />
                      </div>
                      <div className="text-white">
                        {item.name}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
