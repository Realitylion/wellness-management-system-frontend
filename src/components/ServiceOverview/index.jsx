import { Input, Text, Heading } from "./..";
import React from "react";

export default function ServiceOverview({
  headlineText = "Explore Our Services",
  descriptionText = "Discover the variety of ways we can support your health and wellness goals through our comprehensive services, including personalized fitness programs, diet plans, and wellness tracking.",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-end justify-center w-[92%] md:w-full py-[76px] md:p-5 border-coolgray-20 border-b border-solid bg-default-white`}
    >
      <div className="flex w-[96%] flex-col items-start gap-[46px] md:w-full">
        <div className="flex w-[96%] flex-col gap-[38px] md:w-full">
            <div className="flex justify-center px-14 md:px-5">
                <Heading
                    size="heading_2"
                    as="h1"
                    className="text-[42px] font-bold text-coolgray-90 md:text-[38px] sm:text-[32px]"
                >
                    {headlineText}
                </Heading>
            </div>
            <Text size="body_1" as="p" className="text-center text-[18px] font-normal leading-[140%] text-coolgray-90">
                {descriptionText}
            </Text>
        </div>
        <div className="container-sm flex gap-6 overflow-x-scroll bg-default-white md:flex-col md:px-5">
            <Input
                color="default_white"
                size="lg"
                shape="square"
                name="statscard_one"
                placeholder={`Personalized Fitness Plans`}
                className="w-[302px] border border-coolgray-20 px-4 md:px-5"
            />
            <Input
                color="default_white"
                size="lg"
                shape="square"
                name="statscard_three"
                placeholder={`Mental Wellness Programs`}
                className="w-[302px] border border-coolgray-20 px-4 md:px-5"
            />
            <Input
                color="default_white"
                size="lg"
                shape="square"
                name="statscard_five"
                placeholder={`Nutritional Guidance`}
                className="w-[302px] border border-coolgray-20 px-4 md:px-5"
            />
            <Input
                color="default_white"
                size="lg"
                shape="square"
                name="description"
                placeholder={`Health Monitoring`}
                className="w-[302px] border border-coolgray-20 px-4 md:px-5"
            />
        </div>
    </div>
    </div>
    );
}
