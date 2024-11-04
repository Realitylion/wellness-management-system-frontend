import { Heading } from "../../components";
import React from "react";

export default function SettingsRowSecondary() {
  return (
    <div className="px-6 sm:px-5">
      <div className="flex">
        <Heading
          size="heading_2"
          as="h1"
          className="text-[42px] font-bold text-coolgray-90 md:text-[38px] sm:text-[32px]"
        >
          Settings
        </Heading>
      </div>
    </div>
  );
}