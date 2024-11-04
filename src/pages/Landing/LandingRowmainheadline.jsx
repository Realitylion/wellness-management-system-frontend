import WellnessPromotion from "../../components/WellnessPromotion";
import React from "react";

export default function LandingRowmainheadline() {
  return (
    <div className="flex">
      <WellnessPromotion
        mainHeadlineText="Achieve Your Wellness Goals with Personalized Plans"
        startNowButtonText="Get Started"
        exploreMoreButtonText="Learn More"
        placeholderOne="images/img_placeholder_picture.png"
        className="w-[92%] overflow-x-scroll md:w-full md:px-5"
      />
    </div>
  );
}