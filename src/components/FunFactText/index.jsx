import { Heading } from "./..";
import React from "react";

export default function FunFactText({ funFactText = "Fun Fact", ...props }) {
  return (
    <div {...props} className={`${props.className} flex items-start px-5 py-3.5 bg-coolgray-10 flex-1 rounded-[20px]`}>
      <Heading
        size="text2xl"
        as="p"
        className="mb-40 font-spacegrotesk text-[18px] font-medium text-color_black-900_01"
      >
        {funFactText}
      </Heading>
    </div>
  );
}