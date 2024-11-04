import { Heading } from "../../components";
import React from "react";

export default function CompleteprofileRowSecondary() {
  return (
    <div className="mt-3 flex items-center justify-center gap-6 px-6 sm:flex-col sm:px-5">
      <div className="flex flex-1 sm:self-stretch">
        <Heading
          size="heading_2"
          as="h1"
          className="text-[42px] font-bold text-coolgray-90 md:text-[38px] sm:text-[32px]"
        >
          Complete Profile
        </Heading>
      </div>
      <div className="flex px-2 py-3">
        <Heading
          size="button_m"
          as="h2"
          className="text-[16px] font-medium tracking-[0.50px] text-primary-60"
        >
          Finish Later
        </Heading>
      </div>
    </div>
  );
}