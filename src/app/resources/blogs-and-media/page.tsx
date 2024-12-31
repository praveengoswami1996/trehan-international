"use client";
import BreadCrumbs from "@/components/BreadCrumbs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import BlogCard from "@/components/resources/BlogCard";
import { motion } from "framer-motion";

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

const BlogsAndMedia = () => {

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Delay between each word
      },
    },
  };

  const childrenVariants = {
    hidden: { opacity: 0, y: 20 }, // Start hidden and slightly below
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.5,
        damping: 20,
        stiffness: 300,
      },
    },
  };

  return (
    <div className="page">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 3,
        }}
        className="hidden mobile-sm:block absolute top-10 md:-top-36 lg:-top-10 left-1/2 -translate-x-1/2 size-[15rem] mobile-sm:size-[20rem] md:size-[33.25rem]"
      >
        <Image
          src="/bg-pattern-20.svg"
          alt="Background Pattern Image"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Hero Section */}
      <div className="w-full">
        <section className="website-container section-padding-x section-padding-bottom">
          <motion.div
            className="flex flex-col items-center gap-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="mx-auto" variants={childrenVariants}>
              <BreadCrumbs />
            </motion.div>
            <motion.h1 
              className="font-sintony text-[2.4rem] lg:text-[3.25rem] leading-[3rem] lg:leading-[4.88rem] font-bold text-center max-w-4xl mx-auto"
              variants={childrenVariants}
            >
              Blogs
            </motion.h1>
            <motion.p 
              className="paragraph text-center max-w-[34rem] mx-auto"
              variants={childrenVariants}
            >
              Lorem ipsum dolor sit amet consectetur. Sit in nec sagittis amet sed convallis nibh.
            </motion.p>
          </motion.div>
        </section>
      </div>

      {/* Case Studies */}
      <div className="w-full border-b border-[#D9D9D9]">
        <section className="website-container section-padding-x section-padding-bottom pt-0 mobile-sm:pt-16 mobile-md:pt-20">
          <div className="flex flex-col items-center">
            <div className="w-full grid justify-items-center grid-cols-1 mobile-2xl:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((item, index) => {
                return <BlogCard key={item.id} data={item} index={index} />;
              })}
            </div>

            <motion.div 
              className="mt-14"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 1}}
            >
              <Button variant={"outline"} className={"w-fit border-[#1A1A1A]"}>
                Load More
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogsAndMedia;
