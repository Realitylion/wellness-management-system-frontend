import { Text, Img, Heading } from "./..";
import React from "react";

export default function DailyActivitySchedule({
  timeText = "8:00 AM",
  activityText = "Morning run",
  parkText = "Park",
  durationText = "1h",
  cardioActivityText = "Cardio dance",
  cardioDurationText = "30 min",
  meditationActivityText = "Meditation",
  meditationDurationText = "30 min",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex sm:flex-col items-start border-gray-300 border-b border-solid bg-grey_background flex-1`}
    >
    <div className="flex items-center gap-[52px] self-center">
        <Text size="textlg" as="p" className="font-abhayalibre text-[14px] font-normal text-grey_text">
            {timeText}
        </Text>

        <div className="flex w-[42%] flex-col items-start gap-1 rounded-[16px] bg-yellow p-3 sm:gap-1">
            <Text size="textlg" as="p" className="font-abhayalibre text-[14px] font-normal text-black">
            {activityText}
            </Text>

            <div className="flex items-center self-stretch">
            <Img src="images/img_linkedin.svg" alt="Park" className="h-[20px] w-[20px]" />
            <Text size="textlg" as="p" className="font-abhayalibre text-[14px] font-normal text-black">
                {parkText}
            </Text>
            </div>

            <div className="mb-[34px] flex items-center self-stretch">
            <Img src="images/img_hourglassmedium.svg" alt="1h" className="h-[20px] w-[20px]" />
            <Text size="textlg" as="p" className="font-abhayalibre text-[14px] font-normal text-black">
                {durationText}
            </Text>
            </div>
        </div>

        <div className="flex w-[18%] flex-col items-start gap-2 self-end rounded-[16px] bg-yellow p-3 sm:gap-2 sm:self-auto">
            <Text size="textlg" as="p" className="font-abhayalibre text-[14px] font-normal text-black">
            {cardioActivityText}
            </Text>

            <div className="flex items-center self-stretch">
            <Img src="images/img_hourglassmedium.svg" alt="30 Min" className="h-[20px] w-[20px]" />
            <Text size="textlg" as="p" className="font-abhayalibre text-[14px] font-normal text-black">
                {cardioDurationText}
            </Text>
            </div>
        </div>

        <div className="ml-[158px] flex w-[18%] flex-col items-start gap-2 rounded-[16px] bg-purple_light p-3 sm:gap-2">
            <Heading size="headings" as="p" className="font-abhayalibre text-[14px] font-bold text-black">
            {meditationActivityText}
            </Heading>

            <div className="flex items-center self-stretch">
            <Img src="images/img_hourglassmedium.svg" alt="30 Min" className="h-[20px] w-[20px]" />
            <Text size="textlg" as="p" className="font-abhayalibre text-[14px] font-normal text-black">
                {meditationDurationText}
            </Text>
            </div>
        </div>
        </div>
    </div>
  );
}