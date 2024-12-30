"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface BlogItem {
    id: string;
    title: string;
    blogImageUrl: string;
    publishDate: string;
}

interface BlogCardProps {
    data: BlogItem;
    index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ data, index }) => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        type: "tween",
        duration: 0.5
      }}
      viewport={{ once: true, amount: 0.8 }}
      key={data.id}
      className="w-full max-w-[24rem] bg-white overflow-hidden flex flex-col gap-2 cursor-pointer hover:scale-105"
      onClick={() => router.push("/resources/blogs-and-media/" + data.id)}
    >
      <div className="flex-none w-full h-[17.5rem] relative overflow-hidden">
        <Image
          src={data.blogImageUrl}
          alt={"Blog Image"}
          fill
          className="object-cover"
        />
      </div>
      <p className="font-sintony font-bold text-xl leading-[1.875rem] line-clamp-2">
        {data.title}
      </p>
      <p className="text-base font-normal text-[#535353]">{data.publishDate}</p>
    </motion.div>
  );
};

export default BlogCard;
