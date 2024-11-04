import { Button, Text, Heading } from "../../components";
import React from "react";

export default function WellnesssessionmainRowmainheadline() {
  return (
    <div className="mx-auto flex-1">
        <div className="flex flex-col items-start gap-[38px] bg-[url(/public/images/img_section.png)] bg-cover bg-no-repeat px-8 py-28 md:h-auto md:py-5 sm:p-5">
            <div className="flex flex-col items-start">
                <Heading
                    size="headinglg"
                    as="h1"
                    className="text-[48px] font-bold text-coolgray-90 md:text-[44px] sm:text-[38px]"
                >
                    Track Your Wellness Progress
                </Heading>
                <Text
                    size="body_1"
                    as="p"
                    className="ml-[22px] w-[44%] text-[18px] font-normal leading-[140%] text-coolgray-90 md:ml-0 md:w-full"
                >
                    Start new sessions and review your wellness journey through our session history calendar.
                </Text>
                <div className="mx-[22px] flex gap-[17px] md:mx-0">
                    <Button
                    size="3x1"
                    shape="square"
                    className="min-w-[236px] border-2 border-solid border-primary-60 px-[30px] font-medium tracking-[0.50px] sm:px-5"
                    >
                    Start New Session
                    </Button>
                    <Button
                    size="3x1"
                    variant="outline"
                    shape="square"
                    className="min-w-[200px] !border-2 px-[30px] font-medium tracking-[0.50px] sm:px-5"
                    >
                    View Progress
                    </Button>
                </div>
            </div>
        </div>
    </div>
  );
}