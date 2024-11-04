import { Text, Heading, Button, Img } from "./..";
import React from "react";

export default function UserProfileSummary1({
  titleText = "100+",
  descriptionText = "Personalized Wellness Plans Created",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex justify-center items-start w-full gap-4 px-2 py-2.5`}>
      <Button color="coolgray_20" size="xl" shape="square" className="w-[48px] self-center px-3">
        <Img src="images/img_icon_ionicons.svg" />
      </Button>
      <div className="mb-6 flex flex-1 flex-col items-start">
        <Heading size="heading_4" as="h4" className="text-[24px] font-bold text-coolgray-90">
          {titleText}
        </Heading>
        <Text as="p" className="relative mt-[-2px] text-[14px] font-normal text-coolgray-60">
          {descriptionText}
        </Text>
      </div>
    </div>
  );
}