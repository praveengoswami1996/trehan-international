"use client";
import { LSCMIcon, ANTIcon, AttestationIcon, EICIcon, FMIcon, HCIcon, IMIcon, InterHiringIcon, LocalHiringIcon, OGEIcon, QuotationIcon, RFBIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComponentType } from "react";
import { PiUser } from "react-icons/pi";
import { useMediaQuery } from "react-responsive";

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
  { id: "our_services_001", src: "/services/services-1.png", label: "Bulk Hiring Solutions" },
  { id: "our_services_002", src: "/services/services-2.png", label:"Turnkey Staffing Solutions" },
  { id: "our_services_003", src: "/services/services-3.png", label:"Executive Search & Selection" },
  { id: "our_services_004", src: "/services/services-4.png", label:"HR Management System (HRMS)" },
]

const ourApproachData = [
  { 
    id: "our_approach_001", 
    phase: "01",
    label: "Consultative Approach", 
    desc: "At Trehan International, our Consultative Approach is more than just a methodology; it's a testament to our dedication to not only meeting but exceeding the expectations of those we serve. We pride ourselves on being not just recruiters but Trusted Advisors, committed to delivering bespoke talent solutions that drive growth, foster innovation, and cultivate lasting success.",
    imageURL: "/approach/approach-1.png"
  },
  { 
    id: "our_approach_002", 
    phase: "02",
    label: "Customized Solutions: Tailored Strategies for Your Unique Needs", 
    desc: "We recognize that every organization has unique talent acquisition needs. Our customized solutions approach goes beyond a one-size-fits-all strategy. We take the time to understand your business goals, company culture, and specific hiring challenges.",
    imageURL: "/approach/approach-2.png"
  },
  { 
    id: "our_approach_003", 
    phase: "03",
    label: "Compliance: Navigating the Regulatory Landscape", 
    desc: "At Trehan International, we understand the importance of adhering to all relevant laws and regulations throughout the recruitment process. We maintain a rigorous compliance framework to ensure ethical and legal practices.",
    imageURL: "/approach/approach-3.png"
  },
]

const locationsWeServe = [
  {
    id: "location_001",
    name: "Europe",
    flagUrl: "/flags/europe.png",
    altText: "Europe Flag" 
  },
  {
    id: "location_002",
    name: "Russia",
    flagUrl: "/flags/russia.png",
    altText: "Russia Flag" 
  },
  {
    id: "location_003",
    name: "GCC",
    flagUrl: "/flags/gcc.png",
    altText: "GCC Flag" 
  },
  {
    id: "location_004",
    name: "USA",
    flagUrl: "/flags/usa.png",
    altText: "USA Flag" 
  },
  {
    id: "location_005",
    name: "Japan",
    flagUrl: "/flags/japan.png",
    altText: "Japan Flag" 
  },
]

const caseStudies = [
  { 
    id: "case_study_001",
    desc: "Catering to Manpower Needs of one of the largest hypermarket chains in India Client: A...",
    caseImageUrl: "/case-studies/case-1.png" 
  },
  { 
    id: "case_study_002",
    desc: "No. 1 sourcing partner for one of the largest payment solutions provider in India Client:...",
    caseImageUrl: "/case-studies/case-2.png" 
  },
  { 
    id: "case_study_003",
    desc: "FOS Program for a Leading Digital Payments Company Client: A Leading Digital Payments...",
    caseImageUrl: "/case-studies/case-3.png" 
  },
]

const clientOutcomes = [
  {
    id: "client_outcomes_001", 
    clientComment: "Lorem ipsum dolor sit amet consectetur. Purus posuere ultricies semper adipiscing neque nulla. Dolor amet elit nisl netus nulla vitae. Scelerisque in et turpis dignissim fringilla. Habitasse sit a in vel. Lorem ipsum dolor sit amet consectetur. Purus posuere ultricies semper adipiscing neque nulla. Dolor amet elit nisl netus nulla vitae. Scelerisque in et turpis dignissim fringilla. Habitasse sit a in vel.",
    clientName: "Robert Fox",
    clientDesignation: "President, ABC Company",
  },
  {
    id: "client_outcomes_002", 
    clientComment: "Lorem ipsum dolor sit amet consectetur. Purus posuere ultricies semper adipiscing neque nulla. Dolor amet elit nisl netus nulla vitae. Scelerisque in et turpis dignissim fringilla. Habitasse sit a in vel. Lorem ipsum dolor sit amet consectetur. Purus posuere ultricies semper adipiscing neque nulla. Dolor amet elit nisl netus nulla vitae. Scelerisque in et turpis dignissim fringilla. Habitasse sit a in vel.",
    clientName: "John Doe",
    clientDesignation: "CEO, XYZ Company",
  },
]

const trendingBlogs = [
  { 
    id: "trending_blogs_001",
    desc: "Lorem ipsum dolor sit amet consectetur.",
    blogImageUrl: "/blog-1.png" 
  },
  { 
    id: "trending_blogs_002",
    desc: "Varius vitae facilisi venenatis et morbi auctor commodo.",
    blogImageUrl: "/blog-2.png" 
  },
  { 
    id: "trending_blogs_003",
    desc: "Lorem ipsum dolor sit amet consectetur.",
    blogImageUrl: "/blog-1.png" 
  },
]

const features = [
  { 
    id: "features_001",
    title: "Local Hiring",
    desc: "Hiring from GCC",
    icon: LocalHiringIcon, 
  },
  { 
    id: "features_002",
    title: "International Hiring",
    desc: "Government Approved Recruitment Co. To Fulfil Manpower Request, on time ",
    icon: InterHiringIcon,
  },
  { 
    id: "features_003",
    title: "Attestation",
    desc: "Attest my Doc reliable partner to Attest Documentation of your workers both from Kuwait and India",
    icon: AttestationIcon,
  },
]

interface AboutDataItemProps {
  data: string;
  desc: string;
}

interface IndustryItemProps {
  icon: ComponentType<{ className?: string }>;
  label: string;
  position: string;
  labelClasses: string;
}

interface ApproachItem{
  id: string;
  label: string;
  desc: string;
  imageURL: string;
  phase: string;
}

interface ApproachItemProps {
  data: ApproachItem;
}

const AboutDataItem: React.FC<AboutDataItemProps> = ({ data, desc }) => {
  return (
    <div>
      <h2 className="font-sintony font-bold text-[2rem] leading-[2.61rem]">
        { data }
      </h2>
      <p className="text-[1.125rem] leading-[1.69rem] font-regular text-[#535353] max-w-[16rem]">{desc}</p>
    </div>
  )
}

const IndustryItem: React.FC<IndustryItemProps> = ({ icon, label, position, labelClasses }) => {
  const Icon = icon;

  return (
    <div className={cn("absolute", position )}>
      <div className="flex-none p-5 rounded-full bg-[#E2AF45] flex items-center justify-center relative size-[6.25rem]" style={{ boxShadow: "0px 0px 60px 0px #00000026" }}>
        <Icon className="text-white"/>
        <h5 className={cn("absolute text-xl text-center font-sintony font-bold", labelClasses)}>
          {label}
        </h5>
      </div>
    </div>
  )
}

const ApproachItem: React.FC<ApproachItemProps> = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="flex-1">
        <div className="w-full max-w-[30.5rem] h-[20rem] relative">
          <Image 
            src={data.imageURL}
            alt={data.label}
            fill
            className="object-cover object-left-top"
          />

          <div className="absolute -right-24 top-0 text-[6.25rem] text-[#599F99] font-sintony font-regular">
            {data.phase}
          </div>
        </div>
      </div>
      <div className="flex-1 pl-24">
        <h2 className="font-sintony font-bold text-2xl leading-9 text-[#1A1A1A]">
          { data.label }
        </h2>
        <p className="mt-2 text-base font-regular text-[#535353]">
          {data.desc}
        </p>

        <div className="mt-10">
          <Button variant={"outline"} className={"border-[#1A1A1A] text-base font-normal text-[#000000] leading-5 bg-[#FAFAFA]"}>
            Learn More
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const isMobileScreen = useMediaQuery({ query: '(max-width: 480px)' })

  const renderButton = () => {
    if(isMobileScreen) {
      return (
        <Button type="submit" size={"sm"} className="w-fit">
          Hire Right Talent
        </Button>
      )
    } else {
      return (
        <Button type="submit" className="w-fit">
          Hire Right Talent
        </Button>
      )
    }
  }

  return (
    <div className="min-h-screen pt-32 md:pt-44 bg-white">
      {/* Hero Section */}
      <section className="px-2 md:pl-24 pb-20 max-w-[1440px] mx-auto relative overflow-hidden">
        <div>
          <h2 className="font-sintony text-2xl md:text-[2rem] md:leading-[3rem] font-normal text-[#C6485D]">
            Precision Talent Acquisition
          </h2>
          <h1 className="font-sintony text-4xl md:text-[3.25rem] md:leading-[4.88rem] font-bold">
            Where Expertise Meets Innovation
          </h1>
          <div className="mt-3 max-w-[39rem]">
            <p className="text-base md:text-[1.125rem] md:leading-[1.69rem] font-regular text-[#535353]">
              At Trehan International, we believe that the perfect hire is more than just a candidate; it’s a strategic partner in your success. With our decades of industry expertise and a bespoke consultative approach, we connect you with exceptional talent that drives
              innovation and growth. Trust in our refined processes, adaptable strategies, and unwavering commitment to compliance. Let us help you build a team that transforms your vision into reality.
            </p>
          </div>

          <div className="mt-10 flex flex-col md:flex-row gap-2 md:gap-3 w-full max-w-xl">
            <Input
              type="email"
              placeholder="Enter company email"
              className="bg-[#F8F8F8] text-sm md:text-base"
            />
            {renderButton()}
          </div>
        </div>

        <div className="hidden md:block absolute size-[33.25rem] right-8 top-32 overflow-hidden">
          <Image 
            src={"/bg-pattern.svg"}
            alt={"Background Pattern"}
            fill
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
      </section>

      {/* Trusted Partners Section */}
      {/* <div className="w-full bg-[#F1F1F1]">
        <div className="max-w-[1440px] mx-auto pt-10 pb-8">
          <h6 className="font-poppins font-medium italic text-base text-[#212121] text-center uppercase">
            Trusted by Renowned Partners:
          </h6>
          <div className="mt-6 flex items-center gap-5 overflow-hidden">
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
      </div> */}

      {/* About Us Section */}
      {/* <section className="min-h-screen max-w-[1440px] mx-auto pt-12 md:pt-24 px-2 md:pl-20 relative">
        <div className="w-full h-full flex flex-col md:flex-row">
          <div className="flex-1 flex flex-col gap-12 justify-between">
            <div className="flex flex-col gap-3">
              <h1 className="section-title">
                About us
              </h1>
              <div className="pl-4 py-0 relative before:absolute before:w-[5px] before:h-[95%] before:left-0 before:top-1/2 before:-translate-y-1/2 before:bg-amber-500">
                <p className="text-sm md:text-[1.125rem] md:leading-[1.69rem] font-regular text-[#535353]">
                  Trehan International is a recruitment consultancy with a focus on revolutionizing the field of recruitment. Over the past four decades, Trehan International has transformed into a prominent and highly respected recruitment consultancy in India and Southeast Asia.
                </p>
              </div>
            </div>
          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10">
              <AboutDataItem
                data={"45+"}
                desc={"Years of Service"}
              />
              <AboutDataItem
                data={"200,000+"}
                desc={"Successful Placements"}
              />
              <AboutDataItem
                data={"10+"}
                desc={"Recruitment Centers"}
              />
              <AboutDataItem
                data={"80+"}
                desc={"Clients with us over 10 years"}
              />
              <AboutDataItem
                data={"8%"}
                desc={"Placements in Diversified Industries"}
              />
              <AboutDataItem
                data={"100%"}
                desc={"Compliances Government & other Regulatory Bodies"}
              />
            </div>

            <div>
              <Button variant={"outline"} className={"border-[#1A1A1A]"}>
                Know More About Us
              </Button>
            </div>
          </div>
          <div className="flex-1">
            
          </div>
        </div>
        <div className="hidden md:block absolute w-1/2 h-full right-5 top-1/2 -translate-y-1/2 mt-20">
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
      </section> */}
      
      {/* Our Services Section */}
      {/* <div className="w-full bg-[#000000]">
        <section className="mt-36 min-h-screen max-w-[1440px] mx-auto px-2 md:px-24 pt-24 pb-24">
          <div className="flex flex-col items-center">
            <h1 className="section-title text-white text-center">Our Services</h1>
            <p className="mt-3 text-[1.125rem] leading-[1.69rem] font-regular text-white text-center max-w-[22rem]">
              Building Workforce Excellence: Tailored Recruitment Solutions
            </p>
            <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-3 gap-8">
              {ourServices.map((item) => {
                return (
                  <div key={item.id} className="w-full max-w-[24rem]">
                    <div  className="w-full h-[18.75rem] relative overflow-hidden">
                      <Image 
                        src={item.src}
                        alt={"Our Services Presentation Image"}
                        fill
                        className="object-cover object-center"
                        sizes=""
                        priority
                      />
                    </div>
                    <h4 className="mt-5 font-sintony font-bold text-white text-2xl leading-[2.25rem]">{item.label}</h4>
                  </div>
                )
              })}
              <div
                style={{  background: "linear-gradient(180deg, #FFFFFF 0%, #C8C8C8 100%)" }} 
                className="h-[18.75rem] md:col-span-2 px-10 pt-8 pb-8 flex relative"
              >
                <div className="flex flex-col justify-between">
                  <h3 className="font-sintony font-bold text-[2rem] leading-[3rem] text-[#000000] max-w-xl">
                    Unlock your potential with our bespoke solutions
                  </h3>
                  <div>
                    <Button>
                      Hire with us
                    </Button>
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
      </div> */}

      {/* Industries We Serve Section */}
      {/* <div className="w-full bg-[#F2F3F4]">
        <section className="min-h-screen max-w-[1440px] mx-auto px-2 md:px-24 pt-12 md:pt-24 pb-24">
          <div className="flex flex-col items-center">
            <h1 className="section-title text-center">Industries We Serve</h1>
            <p className="mt-3 text-sm md:text-[1.125rem] md:leading-[1.69rem] font-regular text-center max-w-[60rem]">
              Trehan International is a recruitment consultancy with a focus on revolutionizing the field of recruitment. Over the past four decades, Trehan International has transformed into a prominent and highly respected recruitment consultancy in India and Southeast Asia.
            </p>

            <div className="mt-28 w-full flex justify-center">
              <div className="w-[37.5rem] h-[37.5rem] relative flex items-center justify-center p-8">
                <Image 
                  src={"/bg-pattern.svg"}
                  alt="Background Pattern Image"
                  fill
                />
                <div className="w-full h-full rounded-full border border-[#599F99] relative p-[4.5rem]">
                  <Image 
                    src={"/bg-star.svg"}
                    alt={"Background Pattern Image"}
                    fill
                  />
                  <div className="w-full h-full rounded-full relative overflow-hidden">
                    <Image 
                      src={"/industries.png"}
                      alt={"Industries Representation Image"}
                      fill
                      className="object-cover object-left"
                    />
                  </div>

                  <IndustryItem 
                    icon={EICIcon}
                    label={"Engineering, Infrastructure and Construction"}
                    position="-top-12 left-1/2 -translate-x-1/2"
                    labelClasses="bottom-full mb-2 w-[20rem]"
                  />
                  <IndustryItem 
                    icon={OGEIcon}
                    label={"Oil, Gas and Energy"}
                    position="top-[5rem] left-7 -translate-y-1/2"
                    labelClasses="top-1/2 -translate-y-1/2 right-full mr-2 w-[8rem] text-right"
                  />
                  <IndustryItem 
                    icon={FMIcon}
                    label={"Facility Management"}
                    position="top-1/2 -translate-y-1/2 -left-12"
                    labelClasses="top-1/2 -translate-y-1/2 right-full mr-2 w-[8.5rem] text-right"
                  />
                  <IndustryItem 
                    icon={IMIcon}
                    label={"Industrial Manufacturing"}
                    position="bottom-9 left-7"
                    labelClasses="top-1/2 -translate-y-1/2 right-full mr-2 w-[9.5rem] text-right"
                  />
                  <IndustryItem 
                    icon={HCIcon}
                    label={"Healthcare"}
                    position="-bottom-12 left-1/2 -translate-x-1/2"
                    labelClasses="top-full mt-2 w-[10rem]"
                  />
                  <IndustryItem 
                    icon={ANTIcon}
                    label={"Automotive and Transportation"}
                    position="bottom-9 right-7"
                    labelClasses="top-1/2 -translate-y-1/2 left-full ml-2 w-[10rem] text-left"
                  />
                  <IndustryItem 
                    icon={LSCMIcon}
                    label={"Logistic & Supply Chain Management"}
                    position="top-1/2 -translate-y-1/2 -right-12"
                    labelClasses="top-1/2 -translate-y-1/2 left-full ml-2 w-[13rem] text-left"
                  />
                  <IndustryItem 
                    icon={RFBIcon}
                    label={"Retail, Food and Beverage"}
                    position="top-[5rem] right-7 -translate-y-1/2"
                    labelClasses="top-1/2 -translate-y-1/2 left-full ml-2 w-[9rem] text-left"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div> */}

      {/* Our Approach Section */}
      {/* <div className="w-full bg-[#FAFAFA]">
        <section className="min-h-screen max-w-[1440px] mx-auto px-2 md:pl-24 pt-24 pb-24 md:pr-20 relative overflow-hidden">
          <div className="flex flex-col">
            <h1 className="section-title">Our Approach</h1>
            <p className="mt-2.5 text-[1.125rem] leading-[1.69rem] font-regular">
              We follow a 3 phase approach consisting
            </p>

            <div className="mt-14 flex flex-col gap-20">
              {ourApproachData.map((item) => {
                return (
                  <ApproachItem 
                    key={item.id}
                    data={item}
                  />
                )
              })}
            </div>
          </div>

          <div className="absolute size-[33.25rem] -right-[4.5rem] -top-[21rem] overflow-hidden">
            <Image 
              src={"/bg-pattern.svg"}
              alt={"Background Pattern"}
              fill
              className="object-cover object-center"
            />
          </div>
        </section>
      </div> */}

      {/* Locations we serve Section */}
      {/* <div className="w-full bg-[#1A1A1A]">
        <section className="w-full max-w-[1440px] mx-auto px-2 md:px-24 pt-12 md:pt-24 pb-12">
          <div className="flex flex-col items-center justify-between">
            <h1 className="section-title text-[#ffffff] text-center">Locations We Serve</h1>
            <p className="mt-2.5 text-[1.125rem] leading-[1.69rem] font-regular text-[#ffffff] text-center max-w-2xl">
            Our extensive history across industrial verticals/sectors has provided us with a rich tapestry of knowledge, allowing...
            </p>

            <div className="mt-12 w-full max-w-[756px] h-[10rem] md:h-[436px] relative">
              <Image 
                src={"/world-map.svg"}
                alt={"World Map"}
                fill
                className="object-contain"
              />
            </div>

            <div className="mt-12 flex items-center flex-wrap gap-6">
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
                )
              })}
            </div>
          </div>
        </section>
      </div> */}

      {/* Case Studies Section */}
      {/* <div className="w-full bg-[#C6485D]">
        <section className="w-full max-w-[1440px] mx-auto px-2 md:px-24 pt-20 pb-20">
          <div className="flex flex-col items-center">
            <h1 className="font-sintony font-bold text-[2.75rem] leading-[4.125rem] text-[#ffffff] text-center">
              Case Studies
            </h1>
            <p className="mt-2.5 text-[1.125rem] leading-[1.69rem] font-regular text-[#ffffff] text-center max-w-sm">
              Talent Acquisition in Action: Our Sourcing Success Stories
            </p>

            <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((item) => {
                return (
                  <div key={item.id} className="w-full max-w-[24rem] h-[26.125rem] bg-white rounded-md overflow-hidden flex flex-col">
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
                       <p className="font-sintony font-bold text-xl leading-[1.875rem]">{item.desc}</p>
                      </div>
                      <button type="button" className="font-semibold text-base text-[#2157BF] underline">
                        Download PDF Case Study
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-12">
              <Button variant={"outline"} className={"flex-none border-[#FFFFFF] text-[#FFFFFF] bg-[#C6485D]"}>
                View All Case Studies
              </Button>
            </div>
          </div>
        </section>
      </div> */}

      {/* Client Outcomes & Impact Section */}
      {/* <div className="w-full bg-[#FAFAFA]">
        <section className="w-full max-w-[1440px] mx-auto px-2 md:px-24 pt-20 pb-20">
          <div className="flex flex-col items-center">
            <h1 className="font-sintony font-bold text-[2.75rem] leading-[4.125rem] text-[#1A1A1A] text-center">
              Client Outcomes & Impact
            </h1>
            <p className="mt-2.5 text-[1.125rem] leading-[1.69rem] font-regular text-[#535353] text-center max-w-[35rem]">
              Lorem ipsum dolor sit amet consectetur. Ac a tristique vitae et lobortis ut risus ac.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              {clientOutcomes.map((item) => {
                return (
                  <div key={item.id} className="w-full max-w-[592px] h-[340px] px-8 pt-9 pb-7 bg-white" style={{ boxShadow: "0px 0px 40px 0px #0000000D" }}>
                    <div className="h-full flex flex-col justify-between">
                      <div className="line-clamp-[7]">
                        <p className="font-medium text-base text-[#1A1A1A]">
                          {item.clientComment}
                        </p>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className="flex-none w-16 h-16 bg-[#F6F6F6] flex items-center justify-center rounded-full">
                            <PiUser className="size-8 text-[#000000]"/>
                          </div>
                          <div className="flex flex-col">
                            <span className="font-medium text-base text-[#1A1A1A]">
                              {item.clientName}
                            </span>
                            <span className="font-light text-sm text-[#1A1A1A]">
                              {item.clientDesignation}
                            </span>
                          </div>
                        </div>

                        <div>
                          <QuotationIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </div> */}

      {/* Trending Blogs & Article Section */}
      {/* <div className="w-full">
        <section className="w-full max-w-[1440px] mx-auto px-2 md:px-24 pt-20 pb-24">
          <div className="flex flex-col">
            <h1 className="font-sintony font-bold text-[2.75rem] leading-[4.125rem] text-[#1A1A1A]">
              Trending Blog & Articles
            </h1>
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-5">
              <p className="mt-2.5 text-[1.125rem] leading-[1.69rem] font-regular text-[#535353] max-w-[35rem]">
                Read the blog and article inside of consulti. We share tips and tricks to get more succes
              </p>
              <div>
                <Button variant={"outline"} className={"border-[#1A1A1A] text-base font-bold text-[#000000] leading-5 bg-white"}>
                  View All
                </Button>
              </div>
            </div>

            <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {trendingBlogs.map((item) => {
                return (
                  <div key={item.id} className="w-full max-w-[24rem] bg-white overflow-hidden flex flex-col gap-5">
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
                )
              })}
            </div>
          </div>
        </section>
      </div> */}

      {/* Feature Section */}
      {/* <div className="w-full bg-[#1A1A1A]">
        <section className="w-full max-w-[1440px] mx-auto px-2 md:px-24 pt-10 md:pt-20 pb-14">
          <h1 className="section-title leading-[3rem] text-[#FFFFFF]">
            A single destination to manage all things frontline
          </h1>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="flex items-start gap-5"> 
                  <div>
                    <Icon className="text-[#FFFFFF] size-12"/>
                  </div>
                  <div>
                    <h4 className="font-sintony font-bold text-2xl leading-9 text-[#ffffff]">{item.title}</h4>
                    <p className="font-normal text-[#FFFFFF] text-[1.125rem] leading-[1.688rem]">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </div> */}
    </div>
  );
}
