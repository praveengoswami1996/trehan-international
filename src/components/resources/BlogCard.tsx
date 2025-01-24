"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

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
    <div
      key={data.id}
      className="w-full max-w-[24rem] bg-white overflow-hidden flex flex-col gap-2 cursor-pointer hover:scale-105 transition-all duration-500"
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
    </div>
  );
};

export default BlogCard;
