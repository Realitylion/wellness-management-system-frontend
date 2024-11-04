import { Img, Text } from "./..";
import React from "react";

export default function SuccessNotification({
  titleText = "Successfully Saved.",
  subtitleText = "Your profile settings have been saved.",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex sm:flex-col items-center w-[92%] md:w-full gap-4 border-default-success border-1-[3px] border-solid bg-default-white`}
    >
      <div className="flex flex-col items-end py-3">
        <Img src="images/img_icon_jam_icons_default_success.svg" alt="Iconjamicons" className="h-[24px] w-[24px]" />
      </div>
      <div className="flex-1 self-start sm:self-auto">
        <div className="mt-3.5 flex flex-wrap gap-1.5">
          <Text size="textlg" as="p" className="text-[14px] font-medium text-coolgray-90">
            {titleText}
          </Text>
          <Text as="p" className="text-[14px] font-normal text-coolgray-90">
            {subtitleText}
          </Text>
        </div>
      </div>
      <div className="flex flex-col items-center p-3">
        <Img src="images/img_icon_jam_icons_3.svg" alt="Iconjamicons" className="h-[24px] w-[24px]" />
      </div>
    </div>
  );
}