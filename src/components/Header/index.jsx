import { Heading, Img } from "./..";
import React from "react";

export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex justify-center items-center py-[18px] border-coolgray-20 border-b border-solid bg-default-white`}
    >
      <div className="container-sm flex items-center justify-between gap-5 md:px-5 sm:flex-col">
        <Img src="images/img_header_logo.png" alt="Headerlogo" className="h-[38px] w-[104px] object-contain" />
        <ul className="!mb-1 !mr-[490px] flex flex-wrap gap-8 self-end sm:mr-0 sm:self-auto">
          <li>
            <a href="#">
              <Heading as="p" className="text-[16px] font-medium text-coolgray-90">
                Home
              </Heading>
            </a>
          </li>
          <li>
            <a href="#">
              <Heading as="p" className="text-[16px] font-medium text-coolgray-90">
                About Us
              </Heading>
            </a>
          </li>
          <li>
            <a href="#">
              <Heading as="p" className="text-[16px] font-medium text-coolgray-90">
                Services
              </Heading>
            </a>
          </li>
          <li>
            <a href="#">
              <Heading as="p" className="text-[16px] font-medium text-coolgray-90">
                Blog
              </Heading>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}