import { Button, SelectBox, Img, Text, Input } from "./..";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function FormWithLabelsAndFields({
  labeltext1 = "Label Name",
  labeltext2 = "Label Name",
  labeltext3 = "Label Name",
  labeltext4 = "Label Name",
  placeholder,
  iconjamicons,
  labeltext5 = "Label Name",
  editProfileButton = "Edit Profile",
  ...props
}) {
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
                placeholder={`Placeholder`}
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
                placeholder={`Placeholder`}
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
            placeholder={`Placeholder`}
            className="self-stretch border-b border-coolgray-30 px-3.5"
        />
    </div>
    <div className="flex flex-col items-start justify-center gap-2 self-stretch sm:gap-2">
        <Text as="p" className="text-[14px] font-normal text-coolgray-90">
            {labeltext4}
        </Text>
        <div className="flex items-center justify-between gap-5 self-stretch border-b border-solid border-coolgray-30 bg-coolgray-10 px-4 py-3">
            {!placeholder ?  (
                <Text size="body_m" as="p" className="text-[16px] font-normal text-coolgray-60 sm:text-[13px]">
                {placeholder}
                </Text>
            ) : null }
            {!!iconjamicons ? <Img src={iconjamicons} alt="iconjamicons" className="h-[24px] w-[24px]" /> : null}
        </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-2 self-stretch sm:gap-2">
        <Text as="p" className="text-[14px] font-normal text-coolgray-90">
            {labeltext5}
        </Text>
        <SelectBox
            color="coolgray_10"
            size="xs"
            shape="square"
            indicator={<Img src="images/img_arrowdown_coolgray_60.svg" alt="Arrow Down" className="h-[24px] w-[24px]" />}
            name="name"
            placeholder={`Placeholder`}
            options={dropDownOptions}
            className="gap-4 self-stretch border-b border-solid border-coolgray-30 px-3"
        />
        </div>
        <Button
        shape="square"
        className="min-w-[140px] border-2 border-solid border-primary-60 px-[26px] font-medium tracking-[0.50px] sm:px-5"
        >
        {editProfileButton}
        </Button>
    </div>
  );
}