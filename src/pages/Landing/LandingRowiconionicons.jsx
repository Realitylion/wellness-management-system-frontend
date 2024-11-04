import { Img, Button, Heading } from "../../components";
import UserProfileSummary1 from "../../components/UserProfileSummary1";
import React, { Suspense } from "react";

const data = [
  { titleText: "100+", descriptionText: "Personalized Wellness Plans Created" },
  { titleText: "100+", descriptionText: "Personalized Wellness Plans Created" },
  { titleText: "100+", descriptionText: "images/img_users.svg" },
];

export default function LandingRowIconionicons() {
    return (
      <div className="flex self-stretch pl-20 pr-14 md:px-5">
        <Heading
          size="heading_2"
          as="h1"
          className="mt-6 text-[42px] font-bold text-coolgray-90 md:text-[38px] sm:text-[32px]"
        >
          Empowering you to achieve Holistic Well Being
        </Heading>
        <div className="container-sm flex flex-col gap-12">
          <div className="flex gap-[17px]">
            <Button
              size="3x1"
              shape="square"
              className="min-w-[170px] border-2 border-solid border-primary-60 px-[30px] font-medium tracking-[0.50px] sm:px-5"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              shape="square"
              className="min-w-[170px] !border-2 px-[30px] font-medium tracking-[0.50px] sm:px-5"
            >
              Learn More
            </Button>
          </div>
          <div className="flex items-center justify-between gap-5 overflow-x-scroll md:flex-col">
            <div className="flex w-[534px] border border-solid border-coolgray-20 bg-coolgray-10 py-12 md:py-5">
              <Img src="images/img_graph_part_graph_style.svg" alt="Graphpart" className="h-[160px] w-full md:h-auto" />
            </div>
            <div className="ml-20 grid w-[664px] grid-cols-2 gap-6 md:m1-0 md:grid-cols-1">
              <Suspense fallback={<div>Loading feed...</div>}>
                {data.map((d, index) => (
                  <UserProfileSummary1
                    {...d}
                    key={"content" + index}
                    className="border border-solid border-coolgray-20 bg-default-white"
                  />
                ))}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    );
  }