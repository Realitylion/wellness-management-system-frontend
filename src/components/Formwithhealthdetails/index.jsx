import { Button, SelectBox, Img, Text, Input } from "./..";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function FormWithLabelsAndFields({
  labeltext1 = "Blood Group",
  labeltext2 = "BMI Value",
  labeltext3 = "Any Health Issues / Allergies",
  labeltext4 = "Any Prior Injuries",
  placeholder,
  iconjamicons,
  labeltext5 = "Label Name",
  editProfileButton = "Update Data",
  ...props
}) {
  // Function to handle button click
  const handleButtonClick = () => {
    console.log(labeltext1);
    console.log(labeltext2);
    console.log(labeltext3);
    console.log(labeltext4);
  };


  return (
    <div {...props} className={`${props.className} flex flex-col items-end gap-4`}>
      <div className="flex justify-end gap-4 self-stretch">
        <div className="flex w-full flex-col items-start justify-center gap-2 sm:gap-2">
          <Text as="p" className="text-[14px] font-normal text-coolgray-90">
            {labeltext1}
          </Text>
          <Input
            shape="square"
            name="name"
            placeholder="Enter your Blood Group"
            className="self-stretch border-b border-coolgray-30 px-3.5"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2 sm:gap-2">
          <Text as="p" className="text-[14px] font-normal text-coolgray-90">
            {labeltext2}
          </Text>
          <Input
            shape="square"
            name="name"
            placeholder="Enter your BMI Level"
            className="self-stretch border-b border-coolgray-30 px-3.5"
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-2 self-stretch sm:gap-2">
        <Text as="p" className="text-[14px] font-normal text-coolgray-90">
          {labeltext3}
        </Text>
        <Input
          shape="square"
          name="name"
          placeholder="Enter Health Data"
          className="self-stretch border-b border-coolgray-30 px-3.5"
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-2 self-stretch sm:gap-2">
        <Text as="p" className="text-[14px] font-normal text-coolgray-90">
          {labeltext4}
        </Text>
        <Input
          shape="square"
          name="name"
          placeholder="Enter Injury Data"
          className="self-stretch border-b border-coolgray-30 px-3.5"
        />
      </div>
      <Button
        shape="square"
        className="min-w-[140px] border-2 border-solid border-primary-60 px-[26px] font-medium tracking-[0.50px] sm:px-5"
        onClick={handleButtonClick}
      >
        {editProfileButton}
      </Button>
    </div>
  );
}
