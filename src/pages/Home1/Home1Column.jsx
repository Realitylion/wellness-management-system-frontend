import React, { Suspense } from 'react';
import { Img, Text, Heading } from '../../components';
import UserProfileSummary from '../../components/UserProfileSummary';

const data = [
  { titleText: '100+', descriptionText: 'Personalized Wellness Plans Created' },
  { titleText: '500+', descriptionText: 'Successful Fitness Transformations' },
  { titleText: '1k+', descriptionText: 'Community Members Engaged' },
  { titleText: '5K+', descriptionText: 'Hours of Mindfulness and Meditation Delivered' },
];

export default function Home1Column() {
  return (
    <div className="flex flex-col items-center">
      <div className="container-sm flex flex-col gap-12 md:px-5">
        <div className="flex flex-col items-center gap-[34px]">
          <div className="flex justify-center self-stretch px-14 md:px-5">
            <Heading
              size="heading_1"
              as="h2"
              className="text-[54px] font-bold text-coolgray-90 md:text-[46px] sm:text-[40px]"
            >
              Our Impact
            </Heading>
          </div>
          <Text size="body_1" as="p" className="text-[18px] font-normal text-coolgray-90">
            We're proud to have empowered countless individuals on their wellness journey.
          </Text>
        </div>
        <div className="flex items-center justify-between gap-5 md:flex-col">
          <div className="flex border border-solid border-coolgray-20 bg-coolgray-10 py-12 md:py-5">
            <Img src="images/img_graph_part_graph_style.svg" alt="Graphpart" className="h-[160px] w-full md:h-auto" />
          </div>
          <div className="ml-20 grid w-[54%] grid-cols-2 gap-6 md:m1-0 md:grid-cols-1">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <UserProfileSummary {...d} key={'content' + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}