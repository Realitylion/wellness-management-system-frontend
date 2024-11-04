import { Img, Button, Text, Heading } from "./..";
import React from "react";

export default function WellnessPromotion({
  mainHeadlineText = "Unlock Your Full Potential with Tailored Wellness Solutions",
  secondaryHeadlineText,
  descriptionText = "Dedicated to helping you maintain a balanced lifestyle with customized fitness and nutrition strategies tailored just for you",
  startNowButtonText = "Start Now",
  exploreMoreButtonText = "Explore More",
  placeholderOne,
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex items-center py-[60px] md:py-5 bg-coolgray-10`}>
      <div className="mt-3 flex w-full items-center justify-center md:flex-col">
        <div className="flex w-[56%] flex-col gap-[62px] md:w-full sm:gap-[31px]">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col items-start gap-2">
                <Heading
                size="heading_1"
                as="h1"
                className="w-[88%] text-[54px] font-bold leading-[110%] text-coolgray-90 md:w-full md:text-[46px] sm:text-[40px]"
                >
                {mainHeadlineText}
                </Heading>
                {!!secondaryHeadlineText ? (
                    <Heading
                        size="heading_1"
                        as="h1"
                        className="mb-[46px] text-[54px] font-bold text-coolgray-90 md:text-[46px] sm:text-[40px]"
                    >
                        {secondaryHeadlineText}
                    </Heading>
                ) : null}
            </div>
            <Text
                size="body_1"
                as="p"
                className="w-[88%] text-[18px] font-normal leading-[140%] text-coolgray-90 md:w-full"
                >
                {descriptionText}
            </Text>
          </div>
          <div className="flex gap-4">
            <Button
                size="3xl"
                shape="square"
                className="min-w-[158px] border-2 border-solid border-primary-60 px-[30px] font-medium tracking-[0.50px] sm:px-5"
            >
                {startNowButtonText}
            </Button>
            <Button
                size="3xl"
                variant="outline"
                shape="square"
                className="min-w-[188px] border-2 px-[30px] font-medium tracking-[0.50px] sm:px-5"
            >
                {exploreMoreButtonText}
            </Button>
          </div>
        </div>
        <div className="flex w-[144px] flex-col gap-4 rounded-bl-[20px] rounded-tl-[20px] border-b border-t border-solid border-coolgray-30 bg-default-white md:w-full">
            <div className="mx-4 mt-4 flex md:mx-0">
                <Img src="images/img_icon_jam_icons.svg" alt="Iconjamicons" className="h-[16px] w-[16px]" />
                <Img src="images/img_icon_jam_icons.svg" alt="Iconjamicons" className="ml-1 h-[16px] w-[16px]" />
                <Img src="images/img_icon_jam_icons.svg" alt="Iconjamicons" className="ml-1 h-[16px] w-[16px]" />
            </div>
            {!!placeholderOne ? <div className="h-[542px] bg-coolgray-20" /> : null}
        </div>
      </div>
    </div>
  );
}