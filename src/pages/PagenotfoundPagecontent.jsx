import { Button, Heading, Img } from "../components";
import React from "react";

export default function PagenotFoundPagecontent() {
  return (
    <div className="flex flex-col items-center justify-center py-[150px] md:py-5">
      <div className="container-sm flex flex-col items-center md:px-5">
        <Img src="images/img_icon_jam_icons_coolgray_30.svg" alt="IconJamicons" className="h-[124px] w-[124px]" />
        <div className="mt-[38px] self-stretch">
          <div className="mb-14 flex flex-col items-center px-14 md:px-5">
            <Heading size="heading_1" as="h1" className="text-[54px] font-bold text-coolgray-90 md:text-[46px] sm:text-[40px]">
              404
            </Heading>
            <Heading
              size="heading_2"
              as="h2"
              className="relative mt-[-2px] text-[42px] font-bold text-coolgray-90 md:text-[38px] sm:text-[32px]"
            >
              Page Not Found
            </Heading>
          </div>
          <Button
            size="3x1"
            variant="outline"
            shape="square"
            className="mt-14 min-w-[172px] !border-2 px-[30px] font-medium tracking-[0.50px] sm:px-5"
          >
            Home Page
          </Button>
        </div>
      </div>
    </div>
  );
}