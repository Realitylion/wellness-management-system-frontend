import { Button, Text, Img, Heading, Input } from "../../components";
import React from "react";

export default function WellnessSessionsSessionColumnTwo() {
    return (
        <div className="mb-1 flex flex-col items-center">
            <div className="container-sm flex flex-col gap-36 px-[52px] md:gap-[108px] md:px-5 sm:gap-[72px]">
                    <div className="ml-[108px] mr-[94px] flex flex-col items-center gap-[54px] md:mx-0 sm:gap-[27px]">
                        <Text
                        size="text6xl"
                        as="p"
                        className="text-[48px] font-normal text-color_black-900_01 md:text-[44px] sm:text-[38px]"
                        >
                        Record Your Wellness Session
                        </Text>
                        <div className="flex gap-6 self-stretch bg-default-white md:flex-col">
                            <Input
                                shape="square"
                                name="menuitem five"
                                placeholder={"Yoga"}
                                prefix={
                                <Img
                                    src="images/img_icon_jamicons_outline_logos_home.svg"
                                    alt="Icon / Jam-icons / Outline & Logos / Home"
                                    className="h-[24px] w-[24px]"
                                />
                                }
                                className="w-full gap-2 border-b border-coolgray-10 px-2.5 font-medium text-coolgray-90 md:px-5"
                            />
                            <div className="flex w-full items-center gap-2 border-b border-1-2 border-solid border-coolgray-10 bg-default-white px-2 py-3 md:px-5">
                                <Img
                                    src="images/img_icon_jamicons_outline_logos_home.svg"
                                    alt="Iconjamicons"
                                    className="h-[24px] w-[24px]"
                                />
                                <Heading as="h1" className="text-[16px] font-medium text-coolgray-90">
                                    Meditation
                                </Heading>
                            </div>
                            <Input
                                shape="square"
                                name="menuitem_eight"
                                placeholder={"Work-Life Balance"}
                                prefix={
                                    <Img
                                    src="images/img_icon_jamicons_outline_logos_home.svg"
                                    alt="Icon / Jam-icons / Outline & Logos / Home"
                                    className="h-[24px] w-[24px]"
                                    />
                                }
                                className="w-full gap-2 border-b border-coolgray-10 px-2.5 font-medium text-coolgray-90 md:px-5"
                            />
                            <Input
                                variant="outline"
                                shape="square"
                                name="menuitem_ten"
                                placeholder={"Stress Management"}
                                prefix={
                                    <Img
                                    src="images/img_icon_jamicons_outline_logos_home.svg"
                                    alt="Icon / Jam-icons / Outline & Logos / Home"
                                    className="h-[24px] w-[24px]"
                                    />
                                }
                                className="w-full gap-2 !border px-3 font-medium md:px-5"
                            />
                        </div>
                    </div>
                    <div className="ml-12 flex flex-col gap-5 md:mr-0">
                        <div>
                            <div className="flex flex-col gap-[18px]">
                                <div className="flex flex-wrap justify-between gap-5">
                                    <Heading size="text3xl" as="h2" className="self-end text-[20px] font-medium text-color_black-900_01">
                                    Choose a type of session:
                                    </Heading>
                                    <Heading size="text3x1" as="h3" className="mr-[366px] text-[20px] font-medium text-color_black-900_01">
                                    Choose audio/video:
                                    </Heading>
                                </div>
                                <div className="flex items-start justify-between gap-5 md:flex-col">
                                    <div className="flex flex-col items-start gap-[30px]">
                                        <Button
                                        color="light_blue_A700"
                                        size="1g"
                                        className="min-w-[62px] rounded-1g border border-solid border-blue_gray-900_01 px-[9px] font-inter"
                                        >
                                        Yoga
                                        </Button>
                                        <Button
                                        color="light_blue_A700"
                                        size="1g"
                                        className="min-w-[104px] rounded-1g border border-solid border-blue_gray-900_01 px-[9px] font-inter"
                                        >
                                        Meditation
                                        </Button>
                                        <Button
                                        color="light_blue_A700"
                                        size="1g"
                                        className="min-w-[154px] rounded-1g border border-solid border-blue_gray-900_01 px-[9px] font-inter"
                                        >
                                        Self Acupuncture
                                        </Button>
                                    </div>
                                    <div className="flex-1 self-center md:self-stretch">
                                        <div className="flex items-start sm:flex-col">
                                            <div className="mt-[22px] flex flex-1 flex-col items-end gap-4 pl-14 pr-[124px] md:px-5 sm:self-stretch">
                                            <Button
                                                color="light_blue_A700"
                                                size="xs"
                                                shape="round"
                                                leftIcon={
                                                <div className="flex h-[20px] w-[10px] items-center justify-center">
                                                    <Img src="images/defaultNoData.png" alt="Symbol" className="h-[20px] w-[10px]" />
                                                </div>
                                                }
                                                className="min-w-[78px] gap-0.5 rounded-[14px] px-2.5 font-abhayalibre tracking-[-0.23px] !text-default-white"
                                            >
                                                Audio 1
                                            </Button>
                                            <Button
                                                color="light_blue_A700"
                                                size="xs"
                                                shape="round"
                                                leftIcon={
                                                <div className="flex h-[20px] w-[10px] items-center justify-center">
                                                    <Img 
                                                        src="images/defaultNoData.png" 
                                                        alt="Symbol" 
                                                        className="h-[20px] w-[10px] object-cover" 
                                                    />
                                                </div>
                                                }
                                                className="min-w-[78px] gap-0.5 rounded-[14px] px-2.5 font-abhayalibre tracking-[-0.23px] !text-default-white"
                                            >
                                                Audio 2
                                            </Button>
                                            <Button
                                                color="light_blue_A700"
                                                size="xs"
                                                shape="round"
                                                leftIcon={
                                                    <div className="flex h-[20px] w-[10px] items-center justify-center">
                                                    <Img
                                                        src="images/defaultNoData.png"
                                                        alt="Symbol"
                                                        className="h-[20px] w-[10px] object-cover"
                                                    />
                                                    </div>
                                                }
                                                className="min-w-[78px] gap-0.5 rounded-[14px] px-2.5 font-abhayalibre tracking-[-0.23px] !text-default-white"
                                                >
                                                Audio 3
                                            </Button>
                                        </div>
                                        <Img
                                            src="images/img_group_10.png"
                                            alt="Image"
                                            className="h-[224px] w-[46%] self-center object-contain sm:w-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[40px] content-center md:h-auto">
                        <div className="ml-auto h-[32px] w-[18%] bg-default-white" />
                        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 justify-end gap-4">
                            <div className="flex w- [8%] justify-center rounded-1g p-2">
                            <Text
                                size="single_line_body_base"
                                as="p"
                                className="font-inter text-[16px] font-normal text-blue_gray-900"
                            >
                                Start
                            </Text>
                            </div>
                            <Button
                            color="light_blue_A700"
                            size="1g"
                            className="min-w-[96px] rounded-1g border border-solid border-light_blue-a700 px-[31px] font-inter sm:px-5"
                            >
                            End
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
