import { CalendarIcon, LeftArrowIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const blogs = [
  {
    id: "blog_001",
    title: "Lorem ipsum dolor sit amet consectetur.",
    blogImageUrl: "/blogs/blog-1.png",
    publishDate: "May 2, 2024",
  },
  {
    id: "blog_002",
    title: "Varius vitae facilisi venenatis et morbi auctor commodo.",
    blogImageUrl: "/blogs/blog-2.png",
    publishDate: "May 2, 2024",
  },
  {
    id: "blog_003",
    title: "Lorem ipsum dolor sit amet consectetur.",
    blogImageUrl: "/blogs/blog-1.png",
    publishDate: "May 2, 2024",
  },
  {
    id: "blog_004",
    title: "Embracing Opportunities in Semiconductor Workforce Development",
    blogImageUrl: "/blogs/blog-3.png",
    publishDate: "May 2, 2024",
  },
  {
    id: "blog_005",
    title:
      "Hiring Recent Grads? Speak Their Language to Attract the Best Talent",
    blogImageUrl: "/blogs/blog-4.png",
    publishDate: "May 2, 2024",
  },
  {
    id: "blog_006",
    title: "How to Address The Challenges of Internal Equity",
    blogImageUrl: "/blogs/blog-5.png",
    publishDate: "May 2, 2024",
  },
  {
    id: "blog_007",
    title:
      "Best Practices for Talent Attraction: Insight From Acara and Dale Carnegie",
    blogImageUrl: "/blogs/blog-6.png",
    publishDate: "May 2, 2024",
  },
  {
    id: "blog_008",
    title:
      "Bridging the Gap: Insights from the SEMI Pacific Northwest and Arizona forest",
    blogImageUrl: "/blogs/blog-7.png",
    publishDate: "May 2, 2024",
  },
  {
    id: "blog_009",
    title: "10 Tips for Writing a Strong Job Posting",
    blogImageUrl: "/blogs/blog-8.png",
    publishDate: "May 2, 2024",
  },
  {
    id: "blog_010",
    title: "Renewable Energy Industry Outlook for 2024",
    blogImageUrl: "/blogs/blog-9.png",
    publishDate: "May 2, 2024",
  },
  {
    id: "blog_011",
    title: "What Job Seekers Should Know About Aerospace and Defense Hiring",
    blogImageUrl: "/blogs/blog-10.png",
    publishDate: "May 2, 2024",
  },
  {
    id: "blog_012",
    title:
      "7 Reasons Why Dallas is a Top Destination for Job Seekers and Employers",
    blogImageUrl: "/blogs/blog-11.png",
    publishDate: "May 2, 2024",
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

const BlogDetailsPage = ({ params }: { params: { blogId: string } }) => {
  const blogData = blogs.find((item) => item.id === params.blogId);

  return (
    <div className="min-h-screen bg-white relative pt-32">
      <div className="hidden mobile-sm:block absolute top-10 md:-top-36 lg:-top-10 left-1/2 -translate-x-1/2 size-[15rem] mobile-sm:size-[20rem] md:size-[33.25rem]">
        <Image
          src="/bg-pattern-20.svg"
          alt="Background Pattern Image"
          fill
          className="object-contain"
        />
      </div>

      <div className="website-container section-padding-x section-padding-bottom">
        <div className="w-full max-w-4xl mx-auto">
          <Link href={"/resources/blogs-and-media"} className="inline-flex items-center gap-2.5">
            <LeftArrowIcon />
            <span className="text-sm tracking-wide font-normal text-[#535353]">Back</span>
          </Link>
          <h3 className="mt-8 font-sintony font-bold text-[2rem] leading-[3rem] text-[#1A1A1A]">{blogData?.title}</h3>
          <div className="mt-2 flex items-center gap-2.5">
            <CalendarIcon />
            <p className="text-[1.125rem] leading-[1.69rem] text-[#1A1A1A] font-medium">
              {blogData?.publishDate}
            </p>
          </div>

          <div className="mt-10 w-full h-[26.25rem] relative">
            <Image 
                src={blogData?.blogImageUrl || "/blogs/blog-6.png"}
                alt={blogData?.title || "Blog Image"}
                fill
                className="object-cover"
            />
          </div>

          <div className="mt-8">
            <p className="text-[1.125rem] leading-[1.69rem] text-[#535353] font-normal">Lorem ipsum dolor sit amet consectetur. Molestie ut pellentesque pulvinar magna. In commodo massa blandit a fermentum. Tincidunt ultrices enim maecenas tincidunt. Non eget egestas proin odio aliquet pellentesque aliquam pellentesque gravida.</p>

            <div className="mt-10">
              <h5 className="font-sintony font-bold text-[#1A1A1A] text-xl">Heading</h5>
              <p className="mt-5 text-[1.125rem] leading-[1.69rem] text-[#535353] font-normal">Lorem ipsum dolor sit amet consectetur. Massa facilisi aliquet non ipsum dui urna leo diam. Nisl amet sed quam maecenas proin. Scelerisque volutpat pharetra non fermentum eleifend nibh. Sed a imperdiet est ultricies gravida justo condimentum. Non in pharetra malesuada elementum eros vulputate blandit. Curabitur pellentesque sociis vulputate pharetra fames a.<br /><br />Lorem ipsum dolor sit amet consectetur. Massa facilisi aliquet non ipsum dui urna leo diam. Nisl amet sed quam maecenas proin. Scelerisque volutpat pharetra non fermentum eleifend nibh. Sed a imperdiet est ultricies gravida justo condimentum. Non in pharetra malesuada elementum eros vulputate blandit. Curabitur pellentesque sociis vulputate pharetra fames a.</p>
            </div>

            <div className="mt-10">
              <h5 className="font-sintony font-bold text-[#1A1A1A] text-xl">Heading</h5>
              <p className="mt-5 text-[1.125rem] leading-[1.69rem] text-[#535353] font-normal">Lorem ipsum dolor sit amet consectetur. Massa facilisi aliquet non ipsum dui urna leo diam. Nisl amet sed quam maecenas proin. Scelerisque volutpat pharetra non fermentum eleifend nibh. Sed a imperdiet est ultricies gravida justo condimentum. Non in pharetra malesuada elementum eros vulputate blandit. Curabitur pellentesque sociis vulputate pharetra fames a.<br /><br />Lorem ipsum dolor sit amet consectetur. Molestie ut pellentesque pulvinar magna. In commodo massa blandit a fermentum. Tincidunt ultrices enim maecenas tincidunt. Non eget egestas proin odio aliquet pellentesque aliquam pellentesque gravida.<br /><br />Lorem ipsum dolor sit amet consectetur. Massa facilisi aliquet non ipsum dui urna leo diam. Nisl amet sed quam maecenas proin. Scelerisque volutpat pharetra non fermentum eleifend nibh. Sed a imperdiet est ultricies gravida justo condimentum. Non in pharetra malesuada elementum eros vulputate blandit. Curabitur pellentesque sociis vulputate pharetra fames a.</p>
            </div>

            <div className="mt-10">
              <h5 className="font-sintony font-bold text-[#1A1A1A] text-xl">Heading</h5>
              <p className="mt-5 text-[1.125rem] leading-[1.69rem] text-[#535353] font-normal">Lorem ipsum dolor sit amet consectetur. Massa facilisi aliquet non ipsum dui urna leo diam. Nisl amet sed quam maecenas proin. Scelerisque volutpat pharetra non fermentum eleifend nibh. Sed a imperdiet est ultricies gravida justo condimentum. Non in pharetra malesuada elementum eros vulputate blandit. Curabitur pellentesque sociis vulputate pharetra fames a.<br /><br />Lorem ipsum dolor sit amet consectetur. Massa facilisi aliquet non ipsum dui urna leo diam. Nisl amet sed quam maecenas proin. Scelerisque volutpat pharetra non fermentum eleifend nibh. Sed a imperdiet est ultricies gravida justo condimentum. Non in pharetra malesuada elementum eros vulputate blandit. Curabitur pellentesque sociis vulputate pharetra fames a.</p>
            </div>

            <div className="mt-10">
              <h5 className="font-sintony font-bold text-[#1A1A1A] text-xl">Heading</h5>
              <p className="mt-5 text-[1.125rem] leading-[1.69rem] text-[#535353] font-normal">Lorem ipsum dolor sit amet consectetur. Massa facilisi aliquet non ipsum dui urna leo diam. Nisl amet sed quam maecenas proin. Scelerisque volutpat pharetra non fermentum eleifend nibh. Sed a imperdiet est ultricies gravida justo condimentum. Non in pharetra malesuada elementum eros vulputate blandit. Curabitur pellentesque sociis vulputate pharetra fames a.<br /><br />Lorem ipsum dolor sit amet consectetur. Molestie ut pellentesque pulvinar magna. In commodo massa blandit a fermentum. Tincidunt ultrices enim maecenas tincidunt. Non eget egestas proin odio aliquet pellentesque aliquam pellentesque gravida.<br /><br />Lorem ipsum dolor sit amet consectetur. Massa facilisi aliquet non ipsum dui urna leo diam. Nisl amet sed quam maecenas proin. Scelerisque volutpat pharetra non fermentum eleifend nibh. Sed a imperdiet est ultricies gravida justo condimentum. Non in pharetra malesuada elementum eros vulputate blandit. Curabitur pellentesque sociis vulputate pharetra fames a.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Blogs Section */}
      <div className="w-full bg-[#000000]">
        <section className="website-container section-padding-x section-padding-y">
          <div>
            <div className="flex items-center justify-between">
              <h1 className="section-title text-white">Latest Blogs</h1>
              <Button
                variant={"outline"}
                className={
                  "border-white text-base font-bold text-white leading-5 bg-[#000000] w-fit"
                }
              >
                View All Blogs
              </Button>
            </div>

            <div className="w-full mt-10 grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trendingBlogs.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="w-full max-w-[24rem] bg-[#000000] overflow-hidden flex flex-col gap-5"
                  >
                    <div className="flex-none w-full h-[17.5rem] relative overflow-hidden">
                      <Image
                        src={item.blogImageUrl}
                        alt={"Blog Image"}
                        fill
                        className="object-cover scale-110"
                      />
                    </div>
                    <p className="font-sintony font-bold text-xl leading-[1.875rem] text-white">
                      {item.desc}
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

export default BlogDetailsPage;
