import { Img, Text } from "./..";
import React from "react";

export default function UserDetailsComponent({
  userIconImage = "images/img_icon_jam_icons_default_success.svg",
  userDetailsTitle = "1. User Details",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-start w-[56%] md:w-full gap-2 px-2 md:px-5 border-primary-90 border-t-[3px] border-solid`}
    >
      <div className="flex flex-col">
        <Img src={userIconImage} alt="User Details" className="mt-3 h-[24px]" />
      </div>

      <div className="flex flex-1 self-center py-3">
        <Text size="textlg" as="p" className="mb-[18px] text-[14px] font-medium text-coolgray-90">
          {userDetailsTitle}
        </Text>
      </div>
    </div>
  );
}