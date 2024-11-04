import { Helmet } from "react-helmet";
import { Img, Heading } from "../../components";
import WellnesssessionsessionColumnTwo from "./WellnesssessionsessionColumnTwo";
import React from "react";

export default function WellnessSessionSessionPage() {
  return (
    <>
        <Helmet>
        <title>Wellness Management System</title>
        <meta name="description" content="Web site created using create-react-app" />
        </Helmet>
        <div className="flex w-full flex-col gap-2.5 bg-default-white">
        <header className="flex w-full items-center justify-center border-b border-solid border-coolgray-20 bg-default-white p-[22px] sm:p-5">
        <div className="flex w-[94%] items-center justify-between gap-5 md:w-full sm:flex-col">
            <Img src="images/img_header_logo.png" alt="Headerlogo" className="h-[38px] w-[104px] object-contain" />
            <div className="flex flex-wrap gap-8">
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
                        Blog
                        </Heading>
                    </a>
                    </li>
                    </ul>
                    </div>
                    <a href="#">
                    <Img src="images/img_lock.svg" alt="Lock" className="h-[30px] self-start sm:w-full sm:self-auto" />
                    </a>
        </div>
        </header>
        <WellnesssessionsessionColumnTwo />
        </div>
    </>
    );
}
