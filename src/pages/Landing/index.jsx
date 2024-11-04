import { Helmet } from "react-helmet";
import { Text, Heading, Img } from "../../components";
import Header from "../../components/Header";
import ServiceOverview from "../../components/ServiceOverview";
import LandingRowTwo from "./LandingRowTwo";
import LandingRowiconionicons from "./LandingRowiconionicons";
import LandingRowmainheadline from "./LandingRowmainheadline";
import React from "react";

export default function LandingPage() {
    return (
    <>
      <Helmet>
        <title>Wellness Management System</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full overflow-auto bg-default-white">
        <div>
        <Header className="overflow-x-scroll" />
        <LandingRowmainheadline />
        <div className="flex flex-col items-start">
          <LandingRowiconionicons />
          <ServiceOverview />
          <LandingRowTwo />
        </div>
      </div>
      <div>
        <footer className="flex items-start justify-center bg-coolgray-60 py-[22px] sm:py-5">
          <div className="container-sm mb-6 flex flex-col items-center gap-12 md:px-5">
            <div className="flex items-center justify-between gap-5 self-stretch sm:flex-col">
              <Img src="images/img_footer_logo.png" alt="Footerlogo" className="h-[38px] w-[104px] object-contain" />
              <ul className="flex w-[24%] flex-wrap justify-between gap-5 p-2 sm:w-full">
                <li>
                  <a href="#">
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
                  <a href="#">
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
                </ul>
              </div> 
                <Text as="p" className="text-[14px] font-normal text-default-white">
                    Trenify©2024. All rights reserved.
                </Text>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}