import { Button, Text, Heading } from "../../components";
import React from "react";

export default function WellnesssessionmainRowmainheadline() {
  return (
    <div className="mx-auto flex-1">
        <div className="flex flex-col items-start gap-[38px] bg-[url('/public/images/img_section.png')] bg-cover bg-no-repeat px-8 py-20 md:h-auto md:py-5 sm:p-5">
            <div className="flex flex-col items-start">
                {/* Main Heading with Reduced Top Padding and Added Margin */}
                <Heading
                    size="headinglg"
                    as="h1"
                    className="text-[33px] font-medium md:text-[30px] sm:text-[28px] mt-0"  // Reduced the top margin
                    style={{ color: 'white' }} // Make main heading text white
                >
                    Track Your Wellness Progress
                </Heading>
                
                {/* Subheading with Increased Space */}
                <Text
                    size="body_1"
                    as="p"
                    className="ml-[22px] max-w-[600px] text-[18px] font-normal leading-[140%] text-coolgray-90 md:ml-0 mt-[20px]"  // Added margin-top for more spacing
                    style={{ color: '#d3d3d3' }} // Light grey color for subheading text
                >
                    Start new sessions and review your wellness journey through our session 
                    <span className="inline-block">history calendar</span>.
                </Text>

                {/* Buttons */}
                <div className="mt-6 flex gap-4">
                    <Button
                        size="lg"
                        className="min-w-[180px] bg-blue-600 text-white px-4 py-2 font-medium tracking-wide rounded-md hover:bg-blue-700"
                    >
                        Start New Session
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="min-w-[160px] border-2 border-blue-600 text-blue-600 px-4 py-2 font-medium tracking-wide rounded-md hover:border-blue-700 hover:text-blue-700"
                    >
                        View Progress
                    </Button>
                </div>
            </div>
        </div>
    </div>
  );
}
