import { Helmet } from "react-helmet";
import { Text, Heading, Img } from "../../components";
import ExercisetrackerRowEight from "./ExercisetrackerRowEight";
import ExercisetrackerStackview from "./ExercisetrackerStackview";
import React from "react";

export default function ExerciseTrackerPage() {
  return (
    <>
      <Helmet>
        <title>Wellness Management System</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full">
        <div>
          <div>
            <div className="relative h-[798px]">
              <ExercisetrackerStackview />
                <div className="absolute bottom-0 left-0 right-0 top-0 my-auto ml-auto mr-3 h-max flex-1 bg-gray-50_01 lg:mr-0 md:mr-0">
              <ExercisetrackerRowEight />
              </div>
            </div>
          </div>
        </div>
        <footer className="mr-3 flex flex-col items-center bg-coolgray-60 py-[22px] md:mr-0 sm:py-4">
          <div className="container-sm mb-6 flex flex-col items-center gap-12 lg:px-5 md:px-5">
            <div className="flex items-center justify-between gap-5 self-stretch sm:flex-col">
              <Img src="images/img_footer_logo.png" alt="Footerlogo" className="h-[38px] w-[104px] object-contain" />
              <ul className="flex w-[24%] flex-wrap justify-between gap-5 p-2 sm:w-full">
                <li>
                  <a href="#" className="lg:text-[13px]">
                    <Heading as="p" className="text-[16px] font-medium text-default-white">
                      Home
                    </Heading>
                  </a>
                </li>
                <li>
                  <a href="#" className="lg:text-[13px]">
                    <Heading as="p" className="text-[16px] font-medium text-default-white">
                      About Us
                    </Heading>
                  </a>
                </li>
                <li>
                  <a href="#" className="lg:text-[13px]">
                    <Heading as="p" className="text-[16px] font-medium text-default-white">
                      Services
                    </Heading>
                  </a>
                </li>
                <li>
                    <a href="#">
                        <Heading as="p" className="text-[16px] font-medium text-default-white">
                        Blog
                        </Heading>
                    </a>
                </li>
                <Text as="p" className="text-[14px] font-normal text-default-white">
                    Trenify©2024. All rights reserved.
                </Text>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </>
    );
}
