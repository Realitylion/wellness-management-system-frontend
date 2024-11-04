import { Text, Heading, Button, Img } from "./..";
import React from "react";

export default function UserProfileSummary({
  titleText = "1004",
  descriptionText = "Personalized Wellness Plans Created",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-start w-full gap-4 px-2 py-2.5 border-coolgray-20 border border-solid bg-default-white`}
    >
      <Button color="coolgray_20" size="xl" shape="square" className="w-[48px] self-center px-3">
        <Img src="images/img_icon_ionicons.svg" alt="Icon Ions" />
      </Button>
      <div className="mb-2 flex flex-1 flex-col items-center">
        <div className="mr-1.5 flex self-stretch">
          <Heading size="heading_4" as="h4" className="text-[24px] font-bold text-coolgray-90">
            {titleText}
          </Heading>
        </div>
        <Text as="p" className="relative mb-4 mt-[-2px] text-[14px] font-normal text-coolgray-60">
          {descriptionText}
        </Text>
      </div>
    </div>
  );
}