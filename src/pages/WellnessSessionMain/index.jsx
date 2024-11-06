import { Helmet } from "react-helmet";
import { Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import WellnesssessionmainColumnOne from "./WellnesssessionmainColumnOne";
import WellnesssessionmainRowmainheadline from "./WellnesssessionmainRowmainheadline";
import React from "react";

export default function WellnessSessionMainPage() {
  return (
    <>
        <Helmet>
        <title>Wellness Management System</title>
        <meta name="description" content="Web site created using create-react-app" />
        </Helmet>
        <div className="w-full">
            <div className="w-full flex flex-col gap-[180px] md:gap-[135px] sm:gap-[90px]">
                <div>
                    <div className="flex flex-col md:gap-[171px] sm:gap-[114px]">
                        <div>
                            <Header className="relative z-[1]" />
                            <div className="relative h-[428px] content-center md:h-auto">
                                <WellnesssessionmainRowmainheadline />
                                <Img
                                src="images/img_lock.svg"
                                alt="Lock"
                                className="absolute right-[3%] top-[26px] m-auto h-[30px]"
                                />
                            </div>
                        </div>
                        <WellnesssessionmainColumnOne />
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    </>
  );
}