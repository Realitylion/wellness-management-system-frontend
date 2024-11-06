import { Button, Text, Heading } from "./..";
import React from "react";

export default function MealPlanGenerator({
  titleText = "Generate Meal Plan",
  descriptionText = "Get a personalized, AI-generated meal plan based on your preferences and goals.",
  buttonText = "Get Started",
  buttonClickHandler,
  ...props
}) {
  return (
    <div 
        {...props} 
        className={`${props.className} flex flex-col items-start justify-center gap-6 px-10 py-3.5 bg-coolgray-10 flex-1 rounded-[44px]`}
    >
        <Heading 
            size="h3" 
            as="h3" 
            className="ml-5 font-spacegrotesk text-[30px] font-medium text-color_black-900_01 sm:ml-0 sm:text-[25px]"
        >
            {titleText}
        </Heading>
        <Text 
            size="p" 
            as="p" 
            className="ml-5 w-full font-spacegrotesk text-[18px] font-normal leading-[22px] text-color_black-900_01 sm:ml-0 sm:w-full sm:text-[15px]"
        >
            {descriptionText}
        </Text>
        <Button 
            onClick={buttonClickHandler}
            size="3xl" 
            shape="round" 
            className="ml-5 min-w-[192px] rounded-[14px] px-[34px] font-spacegrotesk sm:ml-0 sm:px-5"
        >
            {buttonText}
        </Button>
    </div>
  );
}