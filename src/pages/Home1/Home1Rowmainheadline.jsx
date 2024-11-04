import { Text, Heading } from "../../components";
import FitnessDescription from "../../components/FitnessDescription";
import React, { Suspense } from "react";

const data = [
  {
    headlineText: "Personalized Fitness Plans",
    descriptionText: (
      <>
        Tailored workout routines designed to match your <br />
        fitness level and goals for optimal results
      </>
    ),
  },
  {
    headlineText: "Mental Wellness Programs",
    descriptionText: (
      <>
        Holistic programs that focus on improving mental <br />
        health through stress management and mindfulness <br />
        techniques
      </>
    ),
  },
  {
    headlineText: "Nutritional Guidance",
    descriptionText: (
      <>
        AI generated balanced diets with personalized <br />
        meal plans to help you achieve your health goals
      </>
    ),
  },
  {
    headlineText: "Consultant Information",
    descriptionText: (
      <>
        Access a wide database of physiotherapists and <br />
        psychiatrists and visit their websites.
      </>
    ),
  },
];

export default function Home1RowMainHeadline() {
    return (
      <div>
        <div className="flex flex-col items-center justify-center border-b border-solid border-coolgray-20 bg-default-white py-[70px] md:py-5">
          <div className="container-sm mb-2.5 flex flex-col gap-12 md:px-5">
            <div className="flex flex-col items-center gap-[42px]">
              <div className="flex flex-col items-center self-stretch px-14 md:px-5">
                <Heading
                  size="heading_1"
                  as="h1"
                  className="text-[54px] font-bold text-coolgray-90 md:text-[46px] sm:text-[40px]"
                  >
                  Our Services
                </Heading>
                <Heading size="heading_md" as="h2" className="text-[24px] font-bold text-coolgray-90 md:text-[22px]">
                  Why Choose Us?
                </Heading>
                <Text size="body_1" as="p" className="text-[18px] font-normal text-coolgray-90">
                  Our comprehensive wellness approach ensures that every aspect of your health is covered.
                </Text>
              </div>
              <div className="bg-default-white">
                <div className="flex gap-6 md:flex-col">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {data.map((d, index) => (
                      <FitnessDescription {...d} key={"home" + index} className="mb-4 md:mb-0" />
                    ))}
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }