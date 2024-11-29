"use client";
import React from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import InputField from "@/core/ui/InputField";
import SelectField from "@/core/ui/SelectField";

const Roles = [
  { value: "candidate", label: "Looking for a job" },
  { value: "client", label: "Looking to hire talent" },
  { value: "internal_hire", label: "Looking to join our team" }
] 

const ContactUsForm = () => {
  return (
    <div className="w-full max-w-[40rem] mx-auto bg-[#FDF7ED] p-3 mobile-sm:p-5 mobile-lg:p-10">
      <h4 className="font-sintony font-bold text-2xl text-[#1A1A1A]">
        Send us a message
      </h4>
      <p className="mt-1 text-base font-normal text-[#414042]">
        Feel free to reach out to us.
      </p>

      <form className="mt-4 flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <InputField 
            type="text"
            placeholder="Full name"
          />
          <InputField 
            type="email"
            placeholder="E-mail address"
          />
          <InputField 
            type="text"
            placeholder="Phone"
          />
          <SelectField 
            placeholder="How can we help you?"
            options={Roles}
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
