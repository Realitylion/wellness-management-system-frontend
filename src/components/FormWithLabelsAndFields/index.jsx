import { Button, SelectBox, Img, Text, Input } from "./..";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function CombinedForm({
  labeltext1 = "First Name",
  labeltext2 = "Last Name",
  labeltext3 = "Phone number",
  labeltext4 = "Email ID",
  labeltext5 = "DOB",
  labeltext6 = "Blood Group",
  labeltext7 = "Height",
  labeltext8 = "Any Health Issues / Allergies",
  labeltext9 = "Any Prior Injuries",
  labeltext10 = "Weight",
  editProfileButton = "Submit",
  ...props
}) {
  // Function to handle form submission
  const handleFormSubmit = () => {
    console.log("Form submitted with data:");
    console.log(labeltext1, labeltext2, labeltext3, labeltext4, labeltext5);
    console.log(labeltext6, labeltext7, labeltext8, labeltext9);
  };

  return (
    <div {...props} className={`${props.className} flex flex-col items-end gap-4`}>
      <div className="flex flex-wrap gap-4 w-full">
        {/* First Name */}
        <div className="flex flex-col items-start gap-2 w-full sm:w-1/2">
          <Text as="p" className="text-[14px] font-normal text-coolgray-90">
            {labeltext1}
          </Text>
          <Input
            shape="square"
            placeholder="Enter Your First Name"
            className="self-stretch border-b border-coolgray-30 px-3.5"
          />
        </div>
        
        {/* Last Name */}
        <div className="flex flex-col items-start gap-2 w-full sm:w-1/2">
          <Text as="p" className="text-[14px] font-normal text-coolgray-90">
            {labeltext2}
          </Text>
          <Input
            shape="square"
            placeholder="Enter Your Last Name"
            className="self-stretch border-b border-coolgray-30 px-3.5"
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col items-start gap-2 w-full">
          <Text as="p" className="text-[14px] font-normal text-coolgray-90">
            {labeltext3}
          </Text>
          <Input
            shape="square"
            placeholder="Enter Your Mobile Number"
            className="self-stretch border-b border-coolgray-30 px-3.5"
          />
        </div>

        {/* Email ID */}
        <div className="flex flex-col items-start gap-2 w-full">
          <Text as="p" className="text-[14px] font-normal text-coolgray-90">
            {labeltext4}
          </Text>
          <Input
            shape="square"
            placeholder="Enter Your Email ID"
            className="self-stretch border-b border-coolgray-30 px-3.5"
          />
        </div>

        {/* Date of Birth */}
        <div className="flex flex-col items-start gap-2 w-full">
          <Text as="p" className="text-[14px] font-normal text-coolgray-90">
            {labeltext5}
          </Text>
          <Input
            shape="square"
            placeholder="Enter Your Date Of Birth"
            className="self-stretch border-b border-coolgray-30 px-3.5"
          />
        </div>

        {/* Blood Group */}
        <div className="flex flex-col items-start gap-2 w-full sm:w-1/2">
          <Text as="p" className="text-[14px] font-normal text-coolgray-90">
            {labeltext6}
          </Text>
          <Input
            shape="square"
            placeholder="Enter Your Blood Group"
            className="self-stretch border-b border-coolgray-30 px-3.5"
          />
        </div>

        {/* Height */}
        <div className="flex flex-col items-start gap-2 w-full sm:w-1/2">
          <Text as="p" className="text-[14px] font-normal text-coolgray-90">
            {labeltext7}
          </Text>
          <Input
            shape="square"
            placeholder="Enter Your Height"
            className="self-stretch border-b border-coolgray-30 px-3.5"
          />
        </div>

        {/* Weight*/}
        <div className="flex flex-col items-start gap-2 w-full sm:w-1/2">
          <Text as="p" className="text-[14px] font-normal text-coolgray-90">
            {labeltext10}
          </Text>
          <Input
            shape="square"
            placeholder="Enter Your Weight"
            className="self-stretch border-b border-coolgray-30 px-3.5"
          />
        </div>

        {/* Health Issues */}
        <div className="flex flex-col items-start gap-2 w-full">
          <Text as="p" className="text-[14px] font-normal text-coolgray-90">
            {labeltext8}
          </Text>
          <Input
            shape="square"
            placeholder="Enter Health Data"
            className="self-stretch border-b border-coolgray-30 px-3.5"
          />
        </div>

        {/* Prior Injuries */}
        <div className="flex flex-col items-start gap-2 w-full">
          <Text as="p" className="text-[14px] font-normal text-coolgray-90">
            {labeltext9}
          </Text>
          <Input
            shape="square"
            placeholder="Enter Injury Data"
            className="self-stretch border-b border-coolgray-30 px-3.5"
          />
        </div>
      </div>

      {/* Submit Button */}
      <Button
        shape="square"
        className="min-w-[140px] border-2 border-solid border-primary-60 px-[26px] font-medium tracking-[0.50px] sm:px-5 mt-4"
        onClick={handleFormSubmit}
      >
        {editProfileButton}
      </Button>
    </div>
  );
}
