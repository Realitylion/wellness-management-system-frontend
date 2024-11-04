import { Text } from "./..";
import React from "react";

export default function FitnessDescription({
  headlineText = "Personalized Fitness Plans",
  descriptionText = (
    <>
      Tailored workout routines designed to match your
      <br /> fitness level and goals for optimal results
    </>
  ),
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-end w-[24%] md:w-full px-[18px] py-4 border-coolgray-20 border border-solid bg-default-white`}
    >
      <Text size="body m" as="p" className="mr-[26px] text-[16px] font-normal text-color_black-900">
        {headlineText}
      </Text>
      <Text size="texts" as="p" className="text-[12px] font-normal leading-[140%] text-gray-800">
        {descriptionText}
      </Text>
    </div>
  );
}