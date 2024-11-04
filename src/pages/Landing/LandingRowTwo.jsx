import WellnessJourneyCallToAction from "../../components/WellnessJourneyCallToAction";
import React from "react";

export default function LandingRowTwo() {
  return (
    <div className="self-stretch">
      <WellnessJourneyCallToAction
        headlineText="Unlock the best version of Yourself"
        joinNowButtonText="Learn More"
        className="overflow-x-scroll bg-coolgray-10"
      />
    </div>
  );
}