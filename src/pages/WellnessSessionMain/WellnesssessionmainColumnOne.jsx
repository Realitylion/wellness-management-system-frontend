import { Img, Text, Heading, Button } from "../../components";
import React from "react";

export default function WellnesssessionmainColumnOne() {
  return (
    <div className="flex flex-col items-center">
      <div className="container-sm flex flex-col items-start px-14 md:px-5">
        {/* Left alignment */}
        {/* Heading Section */}
        <div className="mt-0 mb-6">
          <Heading
            size="h1"
            className="font-abhayalibre text-[28px] font-normal text-black"
          >
            Your Wellness Journey
          </Heading>
          <Text
            size="textlg"
            as="p"
            className="font-abhayalibre text-[16px] font-normal text-gray_text mt-1 mb-8"
          >
            Review past wellness sessions and monitor your growth
          </Text>
        </div>

        {/* Calendar and Content Section */}
        <div className="flex w-full items-start justify-between gap-5 rounded-tl-[16px] rounded-tr-[16px] bg-purple_light px-8 py-6 md:w-full">
          <Heading
            size="h2"
            className="font-abhayalibre text-[28px] font-normal text-black md:text-[24px]"
          >
            September 2024
          </Heading>
          <Button
            color="default white"
            size="sm"
            shape="round"
            className="min-w-[200px] rounded-[16px] font-abhayalibre text-black"
          >
            September 05 - 09
          </Button>
        </div>

        {/* Date and GMT+8 Row */}
        <div className="flex w-full justify-center mb-10">
          <div className="flex w-full items-center justify-between bg-gray_background border-b border-solid border-gray-300 rounded-tl-[16px] rounded-tr-[16px] px-6 py-8 md:flex-col">
            {/* GMT+8 Label */}
            <Text
              size="textlg"
              as="p"
              className="font-abhayalibre text-[16px] font-normal text-gray_text"
            >
              GMT+8
            </Text>

            {/* Dates and Days in a Row */}
            <div className="flex w-full justify-around px-5">
              <div className="flex flex-col items-center">
                <Text
                  size="textlg"
                  className="font-abhayalibre text-[18px] font-normal text-grey_text"
                >
                  05
                </Text>
                <Text
                  size="textsm"
                  className="font-abhayalibre text-[16px] font-normal text-grey_text"
                >
                  Mon
                </Text>
              </div>
              <div className="flex flex-col items-center">
                <Text
                  size="textlg"
                  className="font-abhayalibre text-[18px] font-normal text-grey_text"
                >
                  06
                </Text>
                <Text
                  size="textsm"
                  className="font-abhayalibre text-[16px] font-normal text-grey_text"
                >
                  Tue
                </Text>
              </div>
              <div className="flex flex-col items-center">
                <Text
                  size="textlg"
                  className="font-abhayalibre text-[18px] font-bold text-black"
                >
                  07
                </Text>
                <Text
                  size="textsm"
                  className="font-abhayalibre text-[16px] font-bold text-black"
                >
                  Wed
                </Text>
              </div>
              <div className="flex flex-col items-center">
                <Text
                  size="textlg"
                  className="font-abhayalibre text-[18px] font-normal text-grey_text"
                >
                  08
                </Text>
                <Text
                  size="textsm"
                  className="font-abhayalibre text-[16px] font-normal text-grey_text"
                >
                  Thu
                </Text>
              </div>
              <div className="flex flex-col items-center">
                <Text
                  size="textlg"
                  className="font-abhayalibre text-[18px] font-normal text-grey_text"
                >
                  09
                </Text>
                <Text
                  size="textsm"
                  className="font-abhayalibre text-[16px] font-normal text-grey_text"
                >
                  Fri
                </Text>
              </div>
            </div>
          </div>
        </div>

        {/* Time Rows */}
        <div className="w-full">
          {/* 8:00 AM Row */}
          <div className="flex justify-between items-center min-h-[100px] border-b border-gray-300">
            <Text size="textlg" className="text-gray_text">8:00 AM</Text>
            
            {/* Morning Run on 05 Mon */}
            <div className="bg-yellow-200 p-4 rounded-lg shadow-md w-[150px]">
              <Text size="textlg" className="font-semibold text-black">
                🏃‍♂️ Morning Run
              </Text>
              <Text size="textsm" className="font-normal text-gray-700">
                📍 Park
              </Text>
              <Text size="textsm" className="font-normal text-gray-700">
                ⏳ 1h
              </Text>
            </div>

            {/* Empty for 06 Tue */}
            <div className="w-[150px]"></div>

            {/* Cardio Dance on 07 Wed */}
            <div className="bg-yellow-200 p-4 rounded-lg shadow-md w-[150px]">
              <Text size="textlg" className="font-semibold text-black">
                💃 Cardio Dance
              </Text>
              <Text size="textsm" className="font-normal text-gray-700">
                ⏳ 30 min
              </Text>
            </div>

            {/* Empty for 08 Thu */}
            <div className="w-[150px]"></div>

            {/* Meditation on 09 Fri */}
            <div className="bg-purple-200 p-4 rounded-lg shadow-md w-[150px]">
              <Text size="textlg" className="font-semibold text-black">
                🧘 Meditation
              </Text>
              <Text size="textsm" className="font-normal text-gray-700">
                ⏳ 30 min
              </Text>
            </div>
          </div>

          {/* 9:00 AM Row */}
          <div className="flex justify-between items-center min-h-[100px] border-b border-gray-300">
            <Text size="textlg" className="text-gray_text">9:00 AM</Text>

            {/* Empty for 05 Mon */}
            <div className="w-[150px]"></div>

            {/* Meditation on 06 Tue */}
            <div className="bg-purple-200 p-4 rounded-lg shadow-md w-[150px]">
              <Text size="textlg" className="font-semibold text-black">
                🧘 Meditation
              </Text>
              <Text size="textsm" className="font-normal text-gray-700">
                ⏳ 1h
              </Text>
            </div>

            {/* Empty for 07 Wed */}
            <div className="w-[150px]"></div>

            {/* Empty for 08 Thu */}
            <div className="w-[150px]"></div>

            {/* Morning Run on 09 Fri */}
            <div className="bg-yellow-200 p-4 rounded-lg shadow-md w-[150px]">
              <Text size="textlg" className="font-semibold text-black">
                🏃‍♂️ Morning Run
              </Text>
              <Text size="textsm" className="font-normal text-gray-700">
                📍 Park
              </Text>
              <Text size="textsm" className="font-normal text-gray-700">
                ⏳ 1h
              </Text>
            </div>
          </div>

          {/* 10:00 AM Row */}
          <div className="flex justify-between items-center min-h-[100px] border-b border-gray-300">
            <Text size="textlg" className="text-gray_text">10:00 AM</Text>

            {/* Empty for 05 Mon */}
            <div className="w-[150px]"></div>

            {/* Empty for 06 Tue */}
            <div className="w-[150px]"></div>

            {/* Yoga on 07 Wed */}
            <div className="bg-yellow-200 p-4 rounded-lg shadow-md w-[150px]">
              <Text size="textlg" className="font-semibold text-black">
                🧘 Yoga
              </Text>
              <Text size="textsm" className="font-normal text-gray-700">
                ⏳ 45 min
              </Text>
            </div>

            {/* Empty for 08 Thu */}
            <div className="w-[150px]"></div>

            {/* Empty for 09 Fri */}
            <div className="w-[150px]"></div>
          </div>

          {/* 11:00 AM Row */}
          <div className="flex justify-between items-center min-h-[100px] border-b border-gray-300">
            <Text size="textlg" className="text-gray_text">11:00 AM</Text>

            {/* Diet Food on 05 Mon */}
            <div className="bg-purple-200 p-4 rounded-lg shadow-md w-[150px]">
              <Text size="textlg" className="font-semibold text-black">
                🍽️ Diet Food
              </Text>
              <Text size="textsm" className="font-normal text-gray-700">
                ⏳ 30 min
              </Text>
            </div>

            {/* Empty for 06 Tue */}
            <div className="w-[150px]"></div>

            {/* Empty for 07 Wed */}
            <div className="w-[150px]"></div>

            {/* Therapy Music on 08 Thu */}
            <div className="bg-purple-200 p-4 rounded-lg shadow-md w-[150px]">
              <Text size="textlg" className="font-semibold text-black">
                🎶 Therapy Music
              </Text>
              <Text size="textsm" className="font-normal text-gray-700">
                ⏳ 1h
              </Text>
            </div>

            {/* Empty for 09 Fri */}
            <div className="w-[150px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
