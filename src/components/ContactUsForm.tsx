"use client";
import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const ContactUsForm = () => {
  return (
    <div className="w-full max-w-[40rem] mx-auto bg-[#FDF7ED] p-3 mobile-sm:p-5 mobile-lg:p-10">
      <h4 className="font-sintony font-bold text-2xl text-[#1A1A1A]">
        Send us a message
      </h4>
      <p className="mt-1 text-base font-normal text-[#414042]">
        Lorem ipsum dolor sit amet consectetur.
      </p>

      <form className="mt-4 flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <Input
            type="text"
            placeholder="Full name"
            className="border-none outline-none rounded-none shadow-[0px_0px_40px_0px_#0000000D] bg-white text-base text-[#1A1A1A] font-medium py-2.5 px-5 placeholder:text-sm placeholder:font-light placeholder:text-[#535353]"
          />
          <Input
            type="email"
            placeholder="E-mail address"
            className="border-none outline-none rounded-none shadow-[0px_0px_40px_0px_#0000000D] bg-white text-base text-[#1A1A1A] font-medium py-2.5 px-5 placeholder:text-sm placeholder:font-light placeholder:text-[#535353]"
          />
          <Input
            type="text"
            placeholder="Phone"
            className="border-none outline-none rounded-none shadow-[0px_0px_40px_0px_#0000000D] bg-white text-base text-[#1A1A1A] font-medium py-2.5 px-5 placeholder:text-sm placeholder:font-light placeholder:text-[#535353]"
          />
          <Textarea
            placeholder="Your message"
            rows={6}
            className="border-none outline-none rounded-none shadow-[0px_0px_40px_0px_#0000000D] bg-white text-base text-[#1A1A1A] font-medium py-2.5 px-5 placeholder:text-sm placeholder:font-light placeholder:text-[#535353] resize-none"
          />
        </div>

        <Button type="submit">Send Now</Button>
      </form>
    </div>
  );
};

export default ContactUsForm;
