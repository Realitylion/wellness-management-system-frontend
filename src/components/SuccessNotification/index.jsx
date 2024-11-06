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
        {/* <Img src="images/img_icon_jam_icons_default_success.svg" alt="Iconjamicons" className="h-[24px] w-[24px]" /> */}
      </div>
      <div className="flex-1 self-start sm:self-auto">
        <div className="mt-3.5 flex flex-wrap gap-1.5">
          <Text size="textlg" as="p" className="text-[14px] font-medium text-coolgray-90">
            {titleText}
          </Text>
          {/* <Text as="p" className="text-[14px] font-normal text-coolgray-90">
            {subtitleText}
          </Text> */}
        </div>
      </div>
      <div className="flex flex-col items-center p-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
      </div>
    </div>
  );
}