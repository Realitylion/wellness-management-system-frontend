import { Button, Text, Heading } from "./..";
import React from "react";

export default function WellnessJourneyCallToAction({
  headlineText = "Start Your Wellness Journey Today",
  descriptionText = "Don't wait any longer to achieve the healthier, happier you. Sign up today and take the first step towards your transformation.",
  joinNowButtonText = "Join Now",
  getStartedButtonText = "Get Started",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex justify-center items-center py-[194px] md:py-5`}>
      <div className="container-sm flex items-center justify-between gap-5 md:flex-col md:px-5">
        <div className="flex flex-1 flex-col items-center gap-4 md:self-stretch">
          <div className="mr-10 flex self-stretch md:mr-0">
            <Heading
                size="heading_2"
                as="h1"
                className="mt-6 text-[42px] font-bold text-coolgray-90 md:text-[38px] sm:text-[32px]"
                >
                {headlineText}
            </Heading>
            </div>
            <Text
                size="body_1"
                as="p"
                className="w-[96%] text-[18px] font-normal leading-[140%] text-coolgray-90 md:w-full"
                >
                {descriptionText}
            </Text>
        </div>
        <div className="flex gap-4">
            <Button
                size="3xl"
                variant="outline"
                shape="square"
                className="min-w-[152px] border-2 px-[30px] font-medium tracking-[0.50px] sm:px-5"
            >
                {joinNowButtonText}
            </Button>
            <Button
                size="3xl"
                shape="square"
                className="min-w-[170px] border-2 border-solid border-primary-60 px-[30px] font-medium tracking-[0.50px] sm:px-5"
            >
                {getStartedButtonText}
            </Button>
        </div>
      </div>
    </div>
  );
}