import { Heading } from "./..";
import React from "react";

export default function FunFactText({ funFactHeading = "Fun Fact", funFactText = "", ...props }) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-start px-5 py-3.5 bg-coolgray-10 flex-1 rounded-[20px] my-4 mx-1`}>
      <Heading
        size="text2xl"
        as="p"
        className="font-spacegrotesk text-[18px] font-medium text-color_black-900_01"
      >
        {funFactHeading}
      </Heading>
      <div>
        <p className="font-spacegrotesk text-[18px] font-small text-color_black-900_01">
          {funFactText}
        </p>
      </div>
    </div>
  );
}