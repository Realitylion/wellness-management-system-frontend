import { Img, Text, Heading, Button } from "../../components";
import DailyActivitySchedule from "../../components/DailyActivitySchedule";
import DietFoodInfo from "../../components/DietFoodInfo";

import React from "react";

export default function WellnesssessionmainColumnOne() {
  return (
    <div className="flex flex-col items-center">
      <div className="container-sm flex flex-col items-center px-14 md:px-5">
        <div className="flex w-[86%] items-start justify-between gap-5 rounded-tl-[16px] rounded-tr-[16px] bg-purple_light px-5 py-[18px] md:w-full">
          <Heading
            size="h2"
            className="font-abhayalibre text-[24px] font-normal text-black md:text-[22px]"
          >
            September 2024
          </Heading>
          <Button
            color="default white"
            size="sm"
            shape="round"
            className="mb-3 min-w-[188px] rounded-[16px] font-abhayalibre text-black"
          >
            September 05 - May 9
          </Button>
        </div>
        <div className="flex w-full justify-center mb-10">
            <div className="w-full">
                <div className="flex items-center justify-center rounded-tl-[16px] rounded-tr-[16px] border-b border-solid border-gray-300 bg-gray_background md:flex-col">
                <Text size="textlg" as="p" className="font-abhayalibre text-[14px] font-normal text-gray_text md:px-5">
                    GMT+8
                </Text>
                <div className="flex flex-col items-center justify-center gap-2 px-14 md:self-stretch md:px-5">
                    <div className="flex flex-col items-center justify-center gap-1 p-[18px] md:px-5">
                        <Heading 
                            size="headingmd" 
                            as="h3" 
                            className="font-abhayalibre text-[24px] font-bold text-grey_text md:text-[22px]"
                        >
                            05
                        </Heading>
                        <Text size="textxl" as="p" className="font-abhayalibre text-[16px] font-normal text-grey_text">
                            Mon
                        </Text>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 p-[18px] md:px-5">
                        <Heading 
                            size="headingmd" 
                            as="h4" 
                            className="font-abhayalibre text-[24px] font-bold text-grey_text md:text-[22px]"
                        >
                            06
                        </Heading>
                        <Text size="textxl" as="p" className="font-abhayalibre text-[16px] font-normal text-grey_text">
                            Tue
                        </Text>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 p-[18px] md:px-5">
                        <Heading 
                            size="headingmd" 
                            as="h5" 
                            className="font-abhayalibre text-[24px] font-bold text-grey_text md:text-[22px]"
                        >
                            07
                        </Heading>
                        <Text size="textxl" as="p" className="font-abhayalibre text-[16px] font-normal text-grey_text">
                            Thu
                        </Text>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 p-[18px] md:px-5">
                        <Heading 
                            size="headingmd" 
                            as="h6" 
                            className="font-abhayalibre text-[24px] font-bold text-grey_text md:text-[22px]"
                        >
                            08
                        </Heading>
                        <Text size="textxl" as="p" className="font-abhayalibre text-[16px] font-normal text-grey_text">
                            Wed
                        </Text>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 p-[18px] md:px-5">
                        <Heading 
                            size="headingmd" 
                            as="h4" 
                            className="font-abhayalibre text-[24px] font-bold text-grey_text md:text-[22px]"
                        >
                            09
                        </Heading>
                        <Text size="textxl" as="p" className="font-abhayalibre text-[16px] font-normal text-grey_text">
                            Fri
                        </Text>
                    </div>
                </div>
            </div>
            <div className="flex-col">
                <DailyActivitySchedule />
                <DailyActivitySchedule cardioActivityText="Meditation" cardioDurationText="1h" />
            </div>
            <div className="relative h-[92px] content-center md:h-auto">
            <div className="mx-auto flex flex-1 flex-col items-end">
                <Img
                src="images/img_frame_2417.svg"
                alt="Image"
                className="relative z-[2] h-[12px] w-[84%] object-contain"
                />
                <div className="relative mt-[-8px] flex justify-center self-stretch border-b border-solid border-gray-300 bg-grey_background">
                <div className="mt-2 flex w-[16%] flex-col items-start justify-center gap-1 rounded-[16px] bg-yellow px-2.5 py-3 md:w-full">
                    <Text size="textlg" as="p" className="font-abhayalibre text-[14px] font-normal text-black">
                    Yoga
                    </Text>
                    <div className="flex items-center self-stretch">
                    <Img src="images/img_hourglassmedium.svg" alt="Hourglassmedium" className="h-[20px] w-[20px]"/>
                    <Text size="textlg" as="p" className="font-abhayalibre text-[14px] font-normal text-black">
                        45 min
                    </Text>
                    </div>
                </div>
                </div>
            </div>
            <Text
                size="textlg"
                as="p"
                className="absolute bottom-[-2.53px] left-0 m-auto font-abhayalibre text-[14px] font-normal text-grey_text"
            >
                10:00 AM
            </Text>
            </div>
            <div className="relative z-[3] mt-[-2px] flex items-center gap-12 rounded-bl-[16px] rounded-br-[16px] bg-grey_background md:flex-col">
            <Text
                size="textlg"
                as="p"
                className="mb-[34px] self-end font-abhayalibre text-[14px] font-normal text-grey_text md:mb-0 md:self-auto md:px-5"
            >
                11:00 AM
            </Text>
            <div className="mr-[280px] flex flex-1 gap-[314px] md:mr-0 md:flex-col md:self-stretch md:px-5">
                <DietFoodInfo className="mt-[60px] md:mt-0" />
                <DietFoodInfo dietFoodText="Therapy Music" timeText="1h" />
            </div>
        </div>
        </div>
        </div>
        </div>
    </div>
    );
}
