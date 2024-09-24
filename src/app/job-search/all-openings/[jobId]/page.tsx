import { CalendarIcon, LeftArrowIcon, LocationIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const JobDetailsPage = () => {
  return (
    <div className="page">
      <div className="website-container section-padding-x border-b border-[#D9D9D9]">
        <div className="w-full max-w-[63rem] mx-auto">
          <div className="w-full bg-[#F5F5F5] p-3 mobile-lg:p-5 md:px-10 md:py-8">
            <Link
              href={"/job-search/all-openings"}
              className="inline-flex items-center gap-2.5"
            >
              <LeftArrowIcon />
              <span className="text-sm tracking-wide font-normal text-[#535353]">
                Back
              </span>
            </Link>
            <div className="mt-3 flex flex-col md:flex-row md:items-start md:justify-between gap-5">
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl font-medium text-[#000000]">
                  Welder Forklift Operator /Warehouse Helper
                </h4>
                <p className="text-sm font-normal text-[#000000]">
                  Date Posted : 04/10/2024
                </p>
                <p className="text-sm font-normal text-[#000000]">
                  Order #103612304
                </p>
              </div>

              <div>
                <Button
                  variant={"outline"}
                  className={
                    "font-work-sans text-[1.125rem] tracking-wider font-bold text-[#000000] border-[#000000] w-[159px] h-[44px] p-0 rounded-md bg-[#F5F5F5]"
                  }
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>

          {/* Job Description Section */}
          <div className="mt-6 md:mt-10 flex flex-col-reverse md:flex-row gap-7 md:gap-10 lg:gap-14 section-padding-bottom">
            <div className="md:flex-1">
              <div className="flex flex-col gap-6 md:gap-10">
                <div className="flex flex-col gap-2">
                  <h5 className="text-[1.375rem] font-medium text-[#000000]">
                    Job Description
                  </h5>
                  <p className="text-base font-normal text-[#000000]">
                    Job Title:{" "}
                    <span className="font-medium">
                      Welder Forklift Operator /Warehouse Helper
                    </span>
                  </p>
                  <p className="text-base font-normal text-[#000000]">
                    Location:{" "}
                    <span className="font-medium">Jeddah, Saudi Arab</span>
                  </p>
                </div>

                <div className="flex flex-col gap-2.5">
                  <h6 className="text-base font-medium text-[#000000]">
                    Introduction:
                  </h6>
                  <p className="text-base font-normal text-[#535353]">
                    Crown Staffing is currently seeking a skilled and motivated
                    individual to join our team as a Welder Forklift Operator
                    with a focus on forklift operation (75%) and assisting in
                    warehouse activities (25%). This position is based in
                    Hamilton, OH. If you have experience in mig welding, machine
                    welding, and forklift operation, along with a willingness to
                    assist in warehouse tasks, we encourage you to apply!
                  </p>
                </div>

                <div className="flex flex-col gap-2.5">
                  <h6 className="text-base font-medium text-[#000000]">
                    Key Responsibilities:
                  </h6>
                  <p className="text-base font-normal text-[#535353]">
                    -Perform mig welding and machine welding duties according to
                    specifications.
                    <br />
                    -Conduct quality checks on welded products, including first,
                    middle, and last product inspections.
                    <br />
                    -Perform minor maintenance tasks on welding machines,
                    including inspection, cleaning, and alerting line support of
                    <br />
                    -any issues such as machines being out of range or air
                    pressure gauges being off.
                    <br />
                    -Utilize a sit-down forklift to empty scrap into large bins
                    and assist with material handling tasks.
                    <br />
                    -Learn and operate all welding equipment and cells
                    efficiently.
                    <br /> -Ability to lift up to 50lbs and perform moderate
                    physical effort.
                    <br /> -Walk, stand, carry materials, stoop, kneel, bend,
                    and twist as required.
                    <br /> -Operate in repetitive motions to ensure production
                    targets are met.
                    <br /> -Assist in warehouse activities as needed, including
                    but not limited to, organizing inventory, assisting with
                    shipping/receiving, and general warehouse maintenance.
                  </p>
                </div>

                <div className="flex flex-col gap-2.5">
                  <h6 className="text-base font-medium text-[#000000]">
                    Benefits
                  </h6>
                  <p className="text-base font-normal text-[#535353]">
                    Illum, perspiciatis aliquam laboriosam voluptatum voluptates
                    corporis officiis vitae repellat quod tenetur quas culpa
                    recusandae, itaque officia eaque! Nisi eligendi delectus
                    ullam, perferendis minima libero hic dolorum saepe culpa
                    amet quibusdam officia nostrum accusantium modi illum
                    aperiam, adipisci recusandae possimus provident voluptatum
                    asperiores vero porro, expedita error. Voluptatum animi
                    necessitatibus repellat doloremque excepturi porro voluptate
                    aut et ipsum, pariatur reiciendis obcaecati harum? Nam cum
                    quae commodi error autem! Dicta sint explicabo veniam
                    voluptatum officiis blanditiis dolor assumenda quas amet
                    tenetur deleniti, aut alias expedita et pariatur facere
                    laborum ad molestiae?
                  </p>
                </div>

                <div className="flex flex-col gap-2.5">
                  <h5 className="text-[1.375rem] font-medium text-[#000000]">
                    Job Requirements
                  </h5>
                  <p className="text-base font-normal text-[#535353]">
                    None Specified
                  </p>
                </div>
              </div>
              <div className="mt-9">
                <Button
                  variant={"outline"}
                  className={
                    "font-work-sans text-[1.125rem] tracking-wider font-bold text-[#000000] border-[#000000] w-[159px] h-[44px] p-0 rounded-md "
                  }
                >
                  Apply Now
                </Button>
              </div>
            </div>
            <div className="max-h-[629px] md:px-6 lg:px-12 md:border-l md:border-[#D0D0D0] flex flex-col gap-3 md:gap-6">
              <h5 className="text-[1.375rem] font-medium text-[#000000]">
                Job Snapshot
              </h5>

              <div className="flex flex-col gap-2 md:gap-4">
                <div className="flex flex-col gap-1">
                  <h6 className="text-base font-medium text-[#000000]">
                    Employee Type:
                  </h6>
                  <p className="text-base font-normal text-[#535353]">Full-time</p>
                </div>

                <div className="flex flex-col gap-1">
                  <h6 className="text-base font-medium text-[#000000]">
                    Location:
                  </h6>
                  <p className="text-base font-normal text-[#535353]">Jeddah, Saudi Arab</p>
                </div>

                <div className="flex flex-col gap-1">
                  <h6 className="text-base font-medium text-[#000000]">
                    Job Type:
                  </h6>
                  <p className="text-base font-normal text-[#535353]">Industrial/Manufacturing</p>
                </div>

                <div className="flex flex-col gap-1">
                  <h6 className="text-base font-medium text-[#000000]">
                    Shift:
                  </h6>
                  <p className="text-base font-normal text-[#535353]">First Shift</p>
                </div>

                <div className="flex flex-col gap-1">
                  <h6 className="text-base font-medium text-[#000000]">
                    Experience:
                  </h6>
                  <p className="text-base font-normal text-[#535353]">Not Specified</p>
                </div>

                <div className="flex flex-col gap-1">
                  <h6 className="text-base font-medium text-[#000000]">
                    Date Posted:
                  </h6>
                  <p className="text-base font-normal text-[#535353]">04/10/2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
