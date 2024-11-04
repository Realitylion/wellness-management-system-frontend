import { Helmet } from "react-helmet";
import { Button, Heading, Img } from "../../components";
import Footer from "../../components/Footer";
import WellnessJourneyCallToAction from "../../components/WellnessJourneyCallToAction";
import WellnessPromotion from "../../components/WellnessPromotion";
import Home1Column from "./Home1Column";
import Home1RowOne from "./Home1RowOne";
import Home1Rowmainheadline from "./Home1Rowmainheadline";
import React from "react";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Wellness Management System</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="bg-default-white py-4">
        <header className="container-sm flex items-center justify-center border-b border-solid border-coolgray-20">
          <div className="flex items-center justify-center gap-5 md:flex-col md:px-5">
            <Img src="images/img_header_logo.png" alt="Headerlogo" className="w-full h-auto p-2 object-contain md:w-[130px] md:object-contain" />
            <div className="flex w-[66%] items-center justify-center gap-6 self-center md:w-full md:flex-col">
                <div className="flex w-full justify-center p-2">
                    <ul className="flex flex-wrap gap-8">
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
                            Contact
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
                <div className="flex w-full justify-end gap-[17px]">
                    <Button
                        variant="outline"
                        shape="square"
                        className="min-w-[102px] border-2 px-[26px] font-medium tracking-[0.50px] sm:px-5"
                    >
                        Log In
                    </Button>
                    <Button
                        shape="square"
                        className="min-w-[108px] border-2 border-solid border-primary-60 px-[26px] font-medium tracking-[0.50px] sm:px-5"
                    >
                        Sign In
                    </Button>
                </div>
              </div>
            </div>
          </header>
          <div>
            <div>
                <WellnessPromotion
                    secondaryHeadlineText="Achieve Your Wellness Goals with Personalized Plans"
                    placeholderOne="true"
                />
                <Home1Rowmainheadline />
            </div>
            <div className="mt-2.5 bg-default-white py-[76px] md:py-5">
                <Home1Column />
                <Home1RowOne />
            </div>
            <WellnessJourneyCallToAction className="bg-default-white" />
          </div>
        <Footer />
      </div>
    </>
  );
}