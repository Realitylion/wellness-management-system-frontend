import { Text, Heading, Img } from "./..";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer {...props} className={`${props.className} flex flex-col py-[22px] sm:py-5 bg-coolgray-60`}>
      <div className="container-sm mb-6 flex flex-col items-center gap-12 md:px-5">
        <div className="flex items-center justify-between gap-5 self-stretch sm:flex-col">
          <Img src="images/img_footer_logo.png" alt="Footerlogo" className="h-[38px] w-[104px] object-contain" />
          <ul className="flex w-[32%] flex-wrap justify-between gap-5 p-2 sm:w-full">
            <li>
                <a href="Home" target="_blank" rel="noreferrer">
                <Heading as="p" className="text-[16px] font-medium text-default-white">
                    Home
                </Heading>
                </a>
            </li>
            <li>
                <a href="#">
                <Heading as="p" className="text-[16px] font-medium text-default-white">
                    About Us
                </Heading>
                </a>
            </li>
            <li>
                <a href="Services" target="_blank" rel="noreferrer">
                <Heading as="p" className="text-[16px] font-medium text-default-white">
                    Services
                </Heading>
                </a>
            </li>
            <li>
                <a href="Contact" target="_blank" rel="noreferrer">
                <Heading as="p" className="text-[16px] font-medium text-default-white">
                    Contact
                </Heading>
                </a>
            </li>
            <li>
                <a href="Blog" target="_blank" rel="noreferrer">
                <Heading as="p" className="text-[16px] font-medium text-default-white">
                    Blog
                </Heading>
                </a>
            </li>
          </ul>
        </div>
        <Text as="p" className="text-[14px] font-normal text-default-white">
            Trenify@2024. All rights reserved.
        </Text>
      </div>
    </footer>
  );
}