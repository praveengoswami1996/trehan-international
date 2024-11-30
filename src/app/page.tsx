import DataCountUp from "@/components/DataCountUp";
import FeatureSection from "@/components/FeatureSection";
import { QuotationIcon } from "@/components/icons";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import LocationsWeServe from "@/components/LocationsWeServe";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

const trustedPartners = [
  { id: "tp_001", src: "/partners/rt.png" },
  { id: "tp_002", src: "/partners/jtc.png" },
  { id: "tp_003", src: "/partners/al-ahlia.png" },
  { id: "tp_004", src: "/partners/alghanim.png" },
  { id: "tp_005", src: "/partners/gulf.png" },
  { id: "tp_006", src: "/partners/ues.png" },
  { id: "tp_007", src: "/partners/kptc.png" },
  { id: "tp_008", src: "/partners/heisco.png" },
  { id: "tp_009", src: "/partners/galfar.png" },
];  

const ourServices = [
  {
    id: "our_services_001",
    src: "/services/services-1.png",
    label: "Bulk Hiring Solutions",
    href: "/services/bulk-hiring-solutions",
    hoverText: "Streamlining the recruitment process to efficiently address your large-scale staffing needs."
  },
  {
    id: "our_services_002",
    src: "/services/services-2.png",
    label: "Turnkey Staffing Solutions",
    href: "/services/project-and-turnkey-staffing-solutions",
    hoverText: "End-to-end Recruitment, assembling full teams under tight timelines.",
  },
  {
    id: "our_services_003",
    src: "/services/services-3.png",
    label: "Executive Search & Selection",
    href: "/services/executive-search-and-selection",
    hoverText: "Pinpoint the right leader for your unique trajectory.",
  },
  {
    id: "our_services_004",
    src: "/services/services-4.png",
    label: "HR Management System (HRMS)",
    href: "/services/hr-management-system",
    hoverText: "Centralized platform to manage your entire workforce, from hire-to-retirement.",
  },
];

const ourApproachData = [
  {
    id: "our_approach_001",
    phase: "01",
    label: "Consultative Approach",
    desc: "At Trehan International, our Consultative Approach is more than just a methodology; it's a testament to our dedication to not only meeting but exceeding the expectations of those we serve. We pride ourselves on being not just recruiters but Trusted Advisors, committed to delivering bespoke talent solutions that drive growth, foster innovation, and cultivate lasting success.",
    imageURL: "/approach/approach-1.png",
    href: "/approach/consultative-approach",
  },
  {
    id: "our_approach_002",
    phase: "02",
    label: "Customized Solutions: Tailored Strategies for Your Unique Needs",
    desc: "We recognize that every organization has unique talent acquisition needs. Our customized solutions approach goes beyond a one-size-fits-all strategy. We take the time to understand your business goals, company culture, and specific hiring challenges.",
    imageURL: "/approach/approach-2.png",
    href: "/approach/customized-solutions",
  },
  {
    id: "our_approach_003",
    phase: "03",
    label: "Compliance: Navigating the Regulatory Landscape",
    desc: "At Trehan International, we understand the importance of adhering to all relevant laws and regulations throughout the recruitment process. We maintain a rigorous compliance framework to ensure ethical and legal practices.",
    imageURL: "/approach/approach-3.png",
    href: "/approach/compliance",
  },
];

const caseStudies = [
  {
    id: "case_study_001",
    desc: "Catering to Manpower Needs of one of the largest hypermarket chains in India Client: A...",
    caseImageUrl: "/case-studies/case-1.png",
  },
  {
    id: "case_study_002",
    desc: "No. 1 sourcing partner for one of the largest payment solutions provider in India Client:...",
    caseImageUrl: "/case-studies/case-2.png",
  },
  {
    id: "case_study_003",
    desc: "FOS Program for a Leading Digital Payments Company Client: A Leading Digital Payments...",
    caseImageUrl: "/case-studies/case-3.png",
  },
];

const trendingBlogs = [
  {
    id: "trending_blogs_001",
    desc: "Lorem ipsum dolor sit amet consectetur.",
    blogImageUrl: "/blog-1.png",
  },
  {
    id: "trending_blogs_002",
    desc: "Varius vitae facilisi venenatis et morbi auctor commodo.",
    blogImageUrl: "/blog-2.png",
  },
  {
    id: "trending_blogs_003",
    desc: "Lorem ipsum dolor sit amet consectetur.",
    blogImageUrl: "/blog-1.png",
  },
];

const aboutSectionData = [
  {
    id: "about_001",
    count: 45,
    suffix: "+",
    desc: "Years of Service",
  },
  {
    id: "about_002",
    count: 200000,
    suffix: "+",
    desc: "Successful Placements",
  },
  {
    id: "about_003",
    count: 10,
    suffix: "+",
    desc: "Recruitment Centers",
  },
  {
    id: "about_004",
    count: 80,
    suffix: "+",
    desc: "Clients with us over 10 years",
  },
  {
    id: "about_005",
    count: 8,
    suffix: "",
    desc: "Placements in Diversified Industries",
  },
  {
    id: "about_006",
    count: 100,
    suffix: "%",
    desc: "Compliances Government & other Regulatory Bodies",
  }
]

interface AboutDataItemProps {
  data: number;
  desc: string;
  suffix: string;
}

interface ApproachItem {
  id: string;
  label: string;
  desc: string;
  imageURL: string;
  phase: string;
  href: string;
}

interface ApproachItemProps {
  data: ApproachItem;
}

const AboutDataItem: React.FC<AboutDataItemProps> = ({ data, suffix, desc }) => {
  return (
    <div className="flex flex-col items-center xl:items-start">
      <h2 className="font-sintony font-bold text-[2rem] leading-[2.61rem]">
        <DataCountUp 
          end={Number(data)}
          suffix={suffix}
        />
      </h2>
      <p className="w-full text-[1.125rem] leading-[1.69rem] font-regular text-[#535353] max-w-[16rem] text-center xl:text-start">
        {desc}
      </p>
    </div>
  );
};

const ApproachItem: React.FC<ApproachItemProps> = ({ data }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center">
      <div className="flex-1 w-full">
        <div className="w-full max-w-[30.5rem] h-[15rem] lg:h-[20rem] relative">
          <Image
            src={data.imageURL}
            alt={data.label}
            fill
            className="object-cover object-center md:object-left-top"
          />

          <div className="absolute right-4 -top-[4.5rem] sm:-right-24 sm:top-0 text-[6.25rem] text-[#599F99] font-sintony font-regular">
            {data.phase}
          </div>
        </div>
      </div>
      <div className="flex-1 pl-0 lg:pl-24">
        <h2 className="mt-2 font-sintony font-bold text-2xl leading-9 text-[#1A1A1A]">
          {data.label}
        </h2>
        <p className="mt-2 text-base font-regular text-[#535353]">
          {data.desc}
        </p>

        <div className="mt-10">
          <Link href={data.href}>
            <Button
              variant={"outline"}
              className={
                "border-[#1A1A1A] text-base font-normal text-[#000000] leading-5 bg-[#FAFAFA]"
              }
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen pt-28 md:pt-32 lg:pt-36 xl:pt-44 bg-white">
      {/* Hero Section */}
      <section className="website-container section-padding-x pb-10 xl:pb-20 relative overflow-hidden">
        <div>
          <h2 className="font-sintony text-[1.5rem] lg:text-[2rem] leading-[2.2rem] lg:leading-[3rem] font-normal text-[#C6485D]">
            Precision Talent Acquisition
          </h2>
          <h1 className="hero-text mt-3 lg:mt-0">
            Where Expertise Meets Innovation
          </h1>
          <div className="mt-3 max-w-[39rem]">
            <p className="paragraph">
              At Trehan International, we believe that the perfect hire is more
              than just a candidate; it&apos;s a strategic partner in your
              success. With our decades of industry expertise and a bespoke
              consultative approach, we connect you with exceptional talent that
              drives innovation and growth. Trust in our refined processes,
              adaptable strategies, and unwavering commitment to compliance. Let
              us help you build a team that transforms your vision into reality.
            </p>
          </div>

          <div className="mt-6 lg:mt-10 flex flex-col mobile-2xl:flex-row gap-3 w-full max-w-xl">
            <Input
              type="email"
              placeholder="Enter company email"
              className="bg-[#F8F8F8] text-base py-3 lg:py-0"
            />
            <Link href="/contact-us">
              <Button type="submit">Hire Right Talent</Button>
            </Link>
          </div>
        </div>

        <div className="hidden xl:block absolute size-[33.25rem] right-8 top-32 overflow-hidden">
          <Image
            src={"/bg-pattern.svg"}
            alt={"Background Pattern"}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="w-full h-full relative">
            <div className="absolute w-full h-full top-8">
              <Image
                src={"/hero.svg"}
                alt="Hero Image"
                fill
                className="object-contain object-top"
              />
            </div>
          </div>
        </div>

        <div className="xl:hidden overflow-hidden relative size-[15rem]  mobile-sm:size-[19rem] mobile-md:size-[22rem] mobile-lg:size-[24rem] sm:size-[30rem] mx-auto mt-10">
          <Image
            src={"/bg-pattern.svg"}
            alt={"Background Pattern"}
            fill
            priority
            className="object-contain object-center"
          />
          <div className="w-full h-full relative">
            <div className="absolute w-full h-full top-8">
              <Image
                src={"/hero.svg"}
                alt="Hero Image"
                fill
                className="object-contain object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <div className="w-full bg-[#F1F1F1]">
        <div className="website-container pt-10 pb-6">
          <h6 className="font-poppins font-medium italic text-base text-[#212121] text-center uppercase">
            Trusted by Renowned Partners:
          </h6>
          <div className="mt-6 w-full inline-flex flex-nowrap items-center overflow-hidden">
            <div className="flex items-center justify-center [&_div]:mx-8 [&_img]:max-w-none animate-infinite-horizontal-scroll">
              {trustedPartners.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="relative flex-none w-[10rem] h-[3.7rem] bg-white"
                  >
                    <Image
                      src={item.src}
                      alt={"Trusted Partner Company Logo"}
                      fill
                      className="object-contain"
                    />
                  </div>
                );
              })}
            </div>
            <div
              className="flex items-center justify-center [&_div]:mx-8 [&_img]:max-w-none animate-infinite-horizontal-scroll"
              aria-hidden={true}
            >
              {trustedPartners.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="relative flex-none w-[10rem] h-[3.7rem] bg-white"
                  >
                    <Image
                      src={item.src}
                      alt={"Trusted Partner Company Logo"}
                      fill
                      className="object-contain"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section className="website-container section-padding-x min-h-screen pt-12 md:pt-16 xl:pt-24 relative">
        <div className="w-full h-full flex flex-col xl:flex-row">
          <div className="flex-1 flex flex-col gap-12 justify-between">
            <div className="flex flex-col gap-3">
              <h1 className="section-title">About us</h1>
              <div className="pl-4 py-0 relative before:absolute before:w-[5px] before:h-[95%] before:left-0 before:top-1/2 before:-translate-y-1/2 before:bg-amber-500">
                <p className="paragraph">
                  Trehan International is a recruitment consultancy with a focus
                  on revolutionizing the field of recruitment. Over the past
                  four decades, Trehan International has transformed into a
                  prominent and highly respected recruitment consultancy in
                  India and Southeast Asia.
                </p>
              </div>
            </div>

            <div className="xl:hidden overflow-hidden relative size-[15rem]  mobile-sm:size-[19rem] mobile-md:size-[22rem] mobile-lg:size-[24rem] sm:size-[30rem] mx-auto flex items-center justify-center">
              <Image
                src={"/bg-pattern.svg"}
                alt="Background Pattern Image"
                fill
              />
              <div className="flex-none w-4/5 h-4/5 rounded-full bg-[#E1E1E1] p-2 z-10">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={"/aboutus.png"}
                    alt={"About Us Section Image"}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 mobile-2xl:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-y-10">
              {aboutSectionData.map((data) => {
                return (
                  <AboutDataItem key={data.id} data={data.count} suffix={data.suffix} desc={data.desc} />
                )
              })}
            </div>

            <div className="flex justify-center xl:justify-start">
              <Link href={"/about-us"}>
                <Button
                  variant={"outline"}
                  className={"w-fit border-[#1A1A1A]"}
                >
                  Know More About Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="xl:block flex-1" />
        </div>
        <div className="hidden xl:block absolute w-1/2 h-full right-5 top-1/2 -translate-y-1/2 mt-20">
          <div className="w-full h-full relative flex items-center justify-center">
            <Image
              src={"/bg-pattern.svg"}
              alt="Background Pattern Image"
              fill
            />
            <div className="flex-none w-[30rem] h-[30rem] rounded-full bg-[#E1E1E1] p-2 z-10">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src={"/aboutus.png"}
                  alt={"About Us Section Image"}
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <div className="w-full bg-[#000000]">
        <section className="website-container section-padding-x section-padding-y mt-12 md:mt-16 lg:mt-20 xl:mt-36 min-h-screen">
          <div className="flex flex-col items-center">
            <h1 className="section-title text-white text-center">
              Our Services
            </h1>
            <p className="mt-3 paragraph text-white text-center max-w-[22rem]">
              Building Workforce Excellence: Tailored Recruitment Solutions
            </p>
            <div className="mt-10 w-full grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ourServices.map((item) => {
                return (
                  <Link key={item.id} href={item.href} className="block w-full max-w-[24rem] transform transition-transform duration-300 hover:scale-105">
                    <div className="w-full h-[18.75rem] relative overflow-hidden group">
                      <Image
                        src={item.src}
                        alt={"Our Services Presentation Image"}
                        fill
                        className="object-cover object-center"
                        sizes=""
                        priority
                      />

                      <div className="hidden group-hover:block absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 transition-all duration-500 p-2">
                        <div className="w-full h-full text-white flex items-end justify-center text-xl font-medium">
                          <p>{item.hoverText}</p>
                        </div>
                      </div>
                    </div>
                    <h4 className="mt-5 font-sintony font-bold text-white text-xl md:text-2xl md:leading-[2.25rem]">
                      {item.label}
                    </h4>
                  </Link>
                );
              })}
              <div
                style={{
                  background:
                    "linear-gradient(180deg, #FFFFFF 0%, #C8C8C8 100%)",
                }}
                className="w-full h-[18.75rem] md:col-span-2 p-3 md:px-10 md:pt-8 md:pb-8 flex relative"
              >
                <div className="flex flex-col justify-between">
                  <h3 className="font-sintony font-bold text-[2rem] leading-[3rem] text-[#000000] max-w-xl">
                    Unlock your potential with our bespoke solutions
                  </h3>
                  <div>
                    <Link href="/contact-us">
                      <Button>Hire with us</Button>
                    </Link>
                  </div>
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 right-0 h-full flex items-center">
                  <Image
                    src={"/ring.svg"}
                    alt={"Ring Image"}
                    width={210}
                    height={210}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Industries We Serve Section */}
      <IndustriesWeServe />

      {/* Our Approach Section */}
      <div className="w-full bg-[#FAFAFA]">
        <section className="website-container section-padding-x section-padding-y md:pr-20 min-h-screen relative overflow-hidden">
          <div className="flex flex-col">
            <h1 className="section-title">Our Approach</h1>
            <p className="mt-2.5 paragraph">
              We follow a 3 phase approach consisting
            </p>

            <div className="mt-14 flex flex-col gap-12 mobile-2xl:gap-14 md:gap-20">
              {ourApproachData.map((item) => {
                return <ApproachItem key={item.id} data={item} />;
              })}
            </div>
          </div>

          <div className="hidden md:block absolute size-[33.25rem] -right-[4.5rem] -top-[21rem] overflow-hidden">
            <Image
              src={"/bg-pattern.svg"}
              alt={"Background Pattern"}
              fill
              className="object-cover object-center"
            />
          </div>
        </section>
      </div>

      {/* Locations we serve Section */}
      <LocationsWeServe />

      {/* Case Studies Section */}
      <div className="w-full bg-[#C6485D]">
        <section className="website-container section-padding-x section-padding-y">
          <div className="flex flex-col items-center">
            <h1 className="section-title text-[#ffffff] text-center">
              Case Studies
            </h1>
            <p className="mt-2.5 paragraph text-[#ffffff] text-center max-w-sm">
              Talent Acquisition in Action: Our Sourcing Success Stories
            </p>

            <div className="w-full mt-10 grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="w-full max-w-[24rem] h-[26.125rem] bg-white rounded-md overflow-hidden flex flex-col"
                  >
                    <div className="flex-none w-full h-[15rem] relative overflow-hidden">
                      <Image
                        src={item.caseImageUrl}
                        alt={"Case Image"}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-grow p-5 flex flex-col items-start justify-between">
                      <div className="line-clamp-3">
                        <p className="font-sintony font-bold text-xl leading-[1.875rem]">
                          {item.desc}
                        </p>
                      </div>
                      <button
                        type="button"
                        className="font-semibold text-base text-[#2157BF] underline"
                      >
                        Download PDF Case Study
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12">
              <Link href="/case-studies">
                <Button
                  variant={"outline"}
                  className={
                    "flex-none border-[#FFFFFF] text-[#FFFFFF] bg-[#C6485D]"
                  }
                >
                  View All Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Client Outcomes & Impact Section */}
      <TestimonialCarousel />

      {/* Trending Blogs & Article Section */}
      <div className="w-full">
        <section className="website-container section-padding-x section-padding-y">
          <div className="flex flex-col">
            <h1 className="section-title text-[#1A1A1A]">
              Trending Blog & Articles
            </h1>
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-5">
              <p className="mt-2.5 text-base md:text-[1.125rem] md:leading-[1.69rem] font-regular text-[#535353] max-w-[35rem]">
                Read the blog and article inside of consulting. We share tips and tricks to get more success
              </p>
              <div>
                <Button
                  variant={"outline"}
                  className={
                    "border-[#1A1A1A] text-base font-bold text-[#000000] leading-5 bg-white"
                  }
                >
                  View All
                </Button>
              </div>
            </div>

            <div className="w-full mt-12 grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trendingBlogs.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="w-full max-w-[24rem] bg-white overflow-hidden flex flex-col gap-5"
                  >
                    <div className="flex-none w-full h-[17.5rem] relative overflow-hidden">
                      <Image
                        src={item.blogImageUrl}
                        alt={"Blog Image"}
                        fill
                        className="object-cover scale-110"
                      />
                    </div>
                    <p className="font-sintony font-bold text-xl leading-[1.875rem]">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* Feature Section */}
      <FeatureSection />
    </div>
  );
}
