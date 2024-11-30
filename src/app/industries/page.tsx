import BreadCrumbs from "@/components/BreadCrumbs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const industriesData = [
  {
    id: "industry_001",
    title: "Engineering, Infrastructure & Construction",
    description:
      "In the dynamic world of Engineering, Infrastructure, and Construction our tailored talent solutions leverage deep industry knowledge to source and place professionals who not only excel in their technical skills but also drive progress and efficiency on a global scale.",
    image: {
      src: "/industries/industry-1.png",
      alt: "Engineering, Infrastructure & Construction",
    },
    bulletPoints: [
      {
        id: "bullet_001",
        title: "Roadways, Bridges, and Expressways",
        description: "Design, construction, and maintenance professionals.",
      },
      {
        id: "bullet_002",
        title: "Buildings, Hospitals, Hotels, and Malls",
        description:
          "Construction specialists, project managers, and facility operations personnel.",
      },
      {
        id: "bullet_003",
        title: "Rail, Metro, and Mono-Rail",
        description:
          "Experienced individuals for urban transportation projects.",
      },
      {
        id: "bullet_004",
        title:
          "Electro-Mechanical (HVAC, Electrical, Plumbing & Fire Fighting)",
        description:
          "Qualified technicians for building maintenance and compliance.",
      },
      {
        id: "bullet_005",
        title: "Dams, Waterways, Pipelines, Water, Waste & Sewage Treatment",
        description:
          "Specialists in managing vital water resources and infrastructure projects.",
      },
    ],
  },
  {
    id: "industry_002",
    title: "Oil, Gas & Energy",
    description:
      "Trehan International taps into a vast network of professionals in energy production, renewable resources, and environmental conservation, ensuring our clients lead the way in energy innovation and resource management",
    image: {
      src: "/industries/industry-2.png",
      alt: "Oil, Gas & Energy",
    },
    bulletPoints: [
      {
        id: "bullet_001",
        title: "Upstream (Exploration & Production)",
        description: "Geologists, engineers, and drilling professionals.",
      },
      {
        id: "bullet_002",
        title: "Midstream (Pipelines & Transportation)",
        description:
          "Pipeline construction, maintenance, and transportation specialists.",
      },
      {
        id: "bullet_003",
        title: "Downstream (Refining & Petro-Chemicals)",
        description: "Refining, processing, and distribution professionals.",
      },
      {
        id: "bullet_004",
        title: "Power Plants Rehabilitation / Maintenance Projects",
        description:
          "Experience Professionals with in-depth knowledge of Turbines, Boilers, Rooter, Maintenance and Spare Parts Replacements.",
      },
      {
        id: "bullet_005",
        title: "Heavy Engineering & Fabrication, Electrical & Instrumentation",
        description:
          "Skilled personnel for designing, building, and maintaining complex equipment.",
      },
    ],
  },
  {
    id: "industry_003",
    title: "Retail, Food & Beverage",
    description:
      "In the fast-paced Retail, Food & Beverage, our approach focuses on sourcing dynamic professionals who excel in fast-moving environments, enhancing brand loyalty and driving sales with innovative strategies and exceptional service.",
    image: {
      src: "/industries/industry-3.png",
      alt: "Retail, Food & Beverage",
    },
    bulletPoints: [
      {
        id: "bullet_001",
        title: "Hyper Markets, Super Markets & Convenience Stores",
        description:
          "Expertise in recruiting for the grocery and convenience store sector.",
      },
      {
        id: "bullet_002",
        title: "Restaurants (Quick Service & Fine Dining)",
        description:
          "Finding the right fit for all types of restaurants, from chefs to managers.",
      },
      {
        id: "bullet_003",
        title: "Home & Furniture",
        description:
          "Specialists in talent acquisition for furniture retail and manufacturing companies.",
      },
      {
        id: "bullet_004",
        title: "Fashion, Footwear & Accessories",
        description:
          "Sourcing talent for all retail segments, from sourcing to sales.",
      },
    ],
  },
  {
    id: "industry_004",
    title: "Facility Management",
    description:
      "We place professionals who excel in maintaining and improving the efficiency, safety, and sustainability of physical workplaces, ensuring seamless operations and optimal working environments. Management functions, ensuring your operations run smoothly and efficiently.",
    image: {
      src: "/industries/industry-4.png",
      alt: "Facility Management",
    },
    bulletPoints: [
      {
        id: "bullet_001",
        title: "Engineering",
        description:
          "Building Maintenance & Operations (BMS/BAS), HVAC, Electrical, Plumbing & Fire Fighting: Skilled technicians to maintain and manage building systems.",
      },
      {
        id: "bullet_002",
        title: "Lifts & Escalators",
        description:
          "Finding qualified professionals for installation, maintenance, and compliance of elevators and escalators.",
      },
      {
        id: "bullet_003",
        title: "Front Desk, Administration, Security & Vigilance",
        description:
          "Sourcing talent for efficient front-of-house operations and security management.",
      },
      {
        id: "bullet_004",
        title: "Cleaning & House Keeping",
        description:
          "Connecting you with skilled individuals for maintaining clean and hygienic facilities.",
      },
    ],
  },
  {
    id: "industry_005",
    title: "Logistics & Supply Chain Management",
    description:
      "Efficiency and adaptability are at the heart of Logistic & Supply Chain Management. Our expertise in this sector enables us to provide talent solutions that enhance operational flow, reduce costs, and improve delivery times, thereby ensuring the global movement of goods is both smooth and cost-effective",
    image: {
      src: "/industries/industry-5.png",
      alt: "Logistics & Supply Chain Management",
    },
    bulletPoints: [
      {
        id: "bullet_001",
        title: "Port Operations, Management & Technical Support",
        description:
          "Sourcing talent for efficient port operations and logistics management.",
      },
      {
        id: "bullet_002",
        title: "Warehousing, Stevedoring & Transportation",
        description:
          "Finding the right personnel for warehousing, cargo handling, and transportation needs.",
      },
      {
        id: "bullet_003",
        title: "Freight Forwarding",
        description:
          "Sourcing talent for managing and coordinating freight movement across different modes of transport.",
      },
    ],
  },
  {
    id: "industry_006",
    title: "Industrial Manufacturing",
    description:
      "We specialize in staffing solutions that support manufacturing processes, from product development to production, ensuring our clients maintain a competitive edge through technological advancements and operational excellence",
    image: {
      src: "/industries/industry-6.png",
      alt: "Industrial Manufacturing",
    },
    bulletPoints: [
      {
        id: "bullet_001",
        title: "FMCG, Drinks & Bottling Plant",
        description:
          "Specialists in recruiting talent for the fast-moving consumer goods and beverage manufacturing sector.",
      },
      {
        id: "bullet_002",
        title: "Factory (Steel Profiling, Furniture)",
        description:
          "Expertise in finding skilled personnel for various factory operations.",
      },
    ],
  },
  {
    id: "industry_007",
    title: "Automotive & Transportation",
    description:
      "In the ever-evolving Automotive & Transportation, Trehan International is at the forefront of providing talent that drives advancements in vehicle technology, transportation systems, and logistic solutions, propelling the industry forward.",
    image: {
      src: "/industries/industry-8.png",
      alt: "Automotive & Transportation",
    },
    bulletPoints: [
      {
        id: "bullet_001",
        title: "Dealership: Sales & Servicing",
        description:
          "Recruiting experienced professionals for car dealerships, including sales representatives and service technicians.",
      },
      {
        id: "bullet_002",
        title: "Public Transport",
        description:
          "Finding the right personnel for various public transportation sectors, such as buses, trains, and metros.",
      },
      {
        id: "bullet_003",
        title: "Last Mile Delivery",
        description:
          "Delivering  frontline workforce for Last-Mile Success, Courier Drivers, Delivery Workers, Mail Carriers, Messengers, Transporters, etc.",
      },
    ],
  },
  {
    id: "industry_008",
    title: "Healthcare",
    description:
      "The Healthcare industry's complexity and critical nature demand the highest standards of excellence and care. Our comprehensive talent acquisition strategies focus on placing healthcare professionals who not only possess outstanding skills and knowledge but also a profound commitment to patient care and medical innovation.",
    image: {
      src: "/industries/industry-7.png",
      alt: "Healthcare",
    },
    bulletPoints: [
      {
        id: "bullet_001",
        title: "Nurse Hiring",
        description:
          "Connecting you with skilled nurses for various healthcare settings, like Adult, Child, and Infant Care: Specialized in various departments like ICU, CCU, PICU, Oncology, and Cardiology Registered Nurses (RNs), Licensed Practical Nurses (LPNs), and Nurse Aides (Assistants) - GNM/ANM/Midwives.",
      },
      {
        id: "bullet_002",
        title: "Therapists",
        description:
          "Occupation Therapists, Paediatric Occupational Therapist (Paediatric OT), Paediatrics and Acute Care Occupational Therapist, Registered Occupational Therapist (OTR), Physical Therapists, Speech-Language Pathologists, and Respiratory Therapists.",
      },
      {
        id: "bullet_003",
        title: "Medical Technicians",
        description:
          "Pathologists and Radiologists, X-Ray technicians, Ultrasound technicians, and Lab technicians.",
      },
      {
        id: "bullet_004",
        title: "Medical Assistants",
        description:
          "Assist physicians with administrative tasks, patient examinations, and treatment preparations.",
      },
    ],
  },
];

const Industries = () => {
  return (
    <div className="page">
      {/* Hero Section */}
      <div className="w-full">
        <section className="website-container section-padding-x section-padding-bottom">
          <div className="flex flex-col">
            <BreadCrumbs />
            <div className="mt-5 w-full flex flex-col">
              <h1 className="font-sintony text-[2.4rem] lg:text-[3.25rem] leading-[3rem] lg:leading-[4.88rem] font-bold max-w-3xl">
                Industry Expertise
              </h1>
              <div className="pl-4 py-0 relative before:absolute before:w-[5px] before:h-[95%] before:left-0 before:top-1/2 before:-translate-y-1/2 before:bg-amber-500 mt-5">
                <p className="paragraph max-w-[52rem]">
                  At Trehan International, we harness over four decades of
                  expertise, deep industry insights, and a holistic approach to Talent Acquisition to serve a diverse range of industries. Our unparalleled business acumen and the ability to navigate the intricacies of various sectors set us apart as a preferred partner for leading companies worldwide.
                </p>
              </div>

              <div className="mt-14 flex items-center justify-center">
                <Link href="/contact-us">
                  <Button type="submit">Partner with us</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Our Mission/Our Vision Section */}
      <div className="w-full bg-[#FAFAFA]">
        <section className="website-container section-padding-x section-padding-y">
          <div className="flex flex-col gap-8 lg:gap-16">
            {industriesData.map((item, index) => {
              return (
                <div
                  id={item.id}
                  key={item.id}
                  className={cn(
                    "flex flex-col lg:flex-row gap-5 xl:gap-0 scroll-mt-24",
                    index % 2 !== 0 && "lg:flex-row-reverse"
                  )}
                >
                  <div
                    className={cn(
                      "w-full flex justify-center lg:justify-start",
                      index % 2 !== 0 && "lg:justify-end"
                    )}
                  >
                    <div className="flex-none w-full max-w-[31.25rem] h-[20rem] lg:h-[37.5rem] relative">
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-col justify-center items-start">
                    <h3 className="mt-3 lg:mt-0 font-sintony font-bold text-[1.375rem] leading-[2rem] lg:text-[2rem] lg:leading-[3rem] text-[#1A1A1A]">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-base font-normal text-[#1A1A1A]">
                      {item.description}
                    </p>
                    <ul className="mt-4 list-inside list-disc">
                      {item.bulletPoints.map((bullet) => {
                        return (
                          <li key={bullet.id} className="mt-2">
                            <p className="-ml-2 inline text-sm lg:text-base font-bold text-[#1A1A1A]">
                              {bullet.title}:&nbsp;
                              <span className="font-normal">
                                {bullet.description}
                              </span>
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Contact Us Section */}
      <div className="w-full">
        <section className="website-container flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-[18rem] sm:h-[22rem] lg:h-[28.75rem] relative">
            <Image
              src={"/aboutus.png"}
              alt="A man and woman looking at a laptop"
              fill
              className="object-cover object-center lg:object-right"
            />
          </div>
          <div className="w-full md:w-1/2 h-[18rem] md:h-[22rem] lg:h-[28.75rem] bg-[#FDF7ED] relative overflow-hidden section-padding-x section-padding-y">
            <h2 className="section-title max-sm:text-center">
              Ready to hire with a staffing expert?
            </h2>
            <div className="mt-5 mobile-lg:mt-8 flex items-center justify-center sm:justify-start">
              <Link href="/contact-us">
                <Button type="submit">Contact Us</Button>
              </Link>
            </div>
            <div className="absolute size-[15rem] lg:size-[21.5rem] -bottom-20 -right-14">
              <Image
                src={"/bg-pattern-20.svg"}
                alt={"Background Pattern Image"}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Industries;
