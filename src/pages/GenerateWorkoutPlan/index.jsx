import { Helmet } from "react-helmet";
import { Heading, Button, Input, ChipView, SelectBox, Img } from "../../components";
import Footer from "../../components/Footer";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" }
];

export default function GenerateWorkoutPlanPage() {
  const [chipOptions, setChipOptions] = React.useState(() => [
    { value: 1, label: "Chest" },
    { value: 2, label: "Back" },
    { value: 3, label: "Arms" },
    { value: 4, label: "Legs" },
    { value: 5, label: "Core" }
  ]);
  const [selectedChipOptions, setSelectedChipOptions] = React.useState([]);

  return (
    <>
      <Helmet>
        <title>Wellness Management System</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full">
        <div className="relative h-[800px] content-center lg:h-auto md:h-auto">
          <div className="ml-auto mr-[30px] flex flex-1 justify-center bg-default-white py-[298px] lg:mr-0 lg:py-8 md:mr-0 md:py-5 sm:py-4">
            <div className="container-sm mt-[140px] flex pl-[310px] pr-14 lg:px-5 md:px-5">
              <div className="h-[48px] w-[36%] bg-gray-50" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1">
            <header className="relative z-[1] flex items-center justify-center border-b border-solid border-coolgray-20 bg-default-white p-[18px]">
              <div className="flex w-[86%] items-center justify-between gap-5 lg:w-full md:w-full md:flex-col">
                <div className="flex w-[64%] items-center justify-between gap-5 md:w-full sm:flex-col">
                  <div className="flex flex-1 sm:self-stretch">
                    <div className="flex items-start gap-1">
                      <a href="#">
                        <Img src="images/img_rectangle_14_stroke.svg" alt="Image" className="h-[24px] w-[24px]" />
                      </a>
                      <Heading
                        size="heading_4"
                        as="h4"
                        className="mb-1.5 text-[24px] font-bold text-coolgray-68 lg:text-[28px]"
                      >
                        Trenify
                      </Heading>
                    </div>
                  </div>
                  <ul className="mb-1 flex flex-wrap gap-8 self-end sm:self-auto">
                    <li>
                        <a href="#" className="lg:text-[13px]">
                        <Heading as="p" className="text-[16px] font-medium text-coolgray-90">
                            Home
                        </Heading>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="lg:text-[13px]">
                        <Heading as="p" className="text-[16px] font-medium text-coolgray-90">
                            About Us
                        </Heading>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="lg:text-[13px]">
                        <Heading as="p" className="text-[16px] font-medium text-coolgray-90">
                            Services
                        </Heading>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="lg:text-[13px]">
                        <Heading as="p" className="text-[16px] font-medium text-coolgray-90">
                            Blog
                        </Heading>
                        </a>
                    </li>
                  </ul>
                </div>
                <a href="#">
                    <Img src="images/img_lock.svg" alt="Lock" className="h-[30px] self-end md:w-full md:self-auto" />
                </a>
              </div>
            </header>
            <div className="w-full flex items-center justify-center bg-cover bg-no-repeat px-9 py-[46px] lg:h-auto md:h-auto md:py-5 sm:p-4">
              <div className="w-[42%] md:w-full">
                <div className="flex flex-col items-start gap-5">
                <Heading
                    size="text4x1"
                    as="h1"
                    className="ml-4 text-[24px] font-medium tracking-[0.58px] text-color_black-900_01 lg:text-[20px] md:ml-0"
                >
                    Generate Workout Plan
                </Heading>

                <div className="relative h-[384px] content-end self-stretch lg:h-auto md:h-auto">
                    <div className="absolute left-8 right-8 top-0 m-auto flex flex-1 px-3.5 py-1">
                    <SelectBox
                        shape="round"
                        indicator={
                        <Img src="images/img_arrowdown.svg" alt="Arrow Down" className="h-[6px] w-[8px]" />
                        }
                        name="listboxmainone"
                        placeholder="Select Duration"
                        options={dropDownOptions}
                        className="mb-5 w-[46%] gap-4 rounded-lg border border-solid border-coolgray-20 font-montserrat"
                    />
                    </div>
                    <div className="mx-auto mb-[30px] flex-1">
                    <div className="mt-2 flex flex-col items-start py-1">
                        <div className="flex flex-col items-start gap-[84px] self-stretch px-3.5 lg:gap-[84px] md:gap-[63px] sm:gap-[42px]">
                        <SelectBox
                            shape="round"
                            indicator={
                            <Img src="images/img_arrowdown.svg" alt="Arrow Down" className="h-[6px] w-[8px]" />
                            }
                            name="listboxmain"
                            placeholder="Select Level"
                            options={dropDownOptions}
                            className="w-[46%] gap-4 rounded-lg border border-solid border-coolgray-20 font-montserrat"
                        />
                        <div className="mb-18 flex items-center gap-[13px] self-stretch">
                            <Button
                            color="default_white"
                            size="lg"
                            className="min-w-[120px] rounded-[18px] border border-solid border-coolgray-20 px-[19px] font-montserrat font-thin tracking-[0.50px]"
                            >
                            Endurance
                            </Button>
                            <Button
                            color="default_white"
                            size="sm"
                            className="min-w-[98px] rounded-[16px] border border-solid border-coolgray-20 font-montserrat font-thin tracking-[0.50px]"
                            >
                            Strength
                            </Button>
                            </div>
                        </div>
                        <Heading
                        size="text4x1"
                        as="h2"
                        className="relative mb-[18px] ml-5 mt-[-14px] text-[24px] font-medium text-color_black-900_01 lg:text-[20px] md:ml-0"
                        >
                            Select Muscle Group
                        </Heading>
                        </div>  
                    </div>
                    <div className="absolute bottom-[31%] left-0 right-8 mx-5 my-auto flex flex-1 flex-col items-start gap-[22px] 1g:mx-0 md:mx-0">
                        <Heading
                            size="text4x1"
                            as="h3"
                            className="text-[24px] font-medium tracking-[0.50px] text-color_black-900_01 1g:text-[20px]"
                        >
                            What do you want to improve ?
                        </Heading>
                        <Button
                            color="default_white"
                            size="sm"
                            className="mr-[146px] min-w-[174px] self-end rounded-[16px] border border-solid border-coolgray-20 font-montserrat font-thin tracking-[0.50px] md:mr-0"
                        >
                            Body Composition
                        </Button>
                    </div>
                    <ChipView
                        options={chipOptions}
                        setOptions={setChipOptions}
                        values={selectedChipOptions}
                        setValues={setSelectedChipOptions}
                        className="absolute bottom-0 left-0 right-8 mx-4 my-auto flex flex-1 flex-wrap gap-2 1g:mx-0 md:mx-0"
                        >
                        {(option) => (
                            <React.Fragment key={option.index}>
                            {option.isSelected ? (
                                <div
                                onClick={option.toggle}
                                className="flex h-[38px] min-w-[88px] cursor-pointer flex-row items-center justify-center whitespace-pre-wrap rounded-[18px] border border-solid border-white-a700_99 bg-default-white px-5 text-center font-montserrat text-[16px] font-thin tracking-[0.50px] text-color_black-900_01"
                                >
                                <span>{option.label}</span>
                                </div>
                            ) : (
                                <div
                                onClick={option.toggle}
                                className="flex h-[38px] min-w-[88px] cursor-pointer flex-row items-center justify-center rounded-[18px] border border-solid border-coolgray-20 bg-default-white px-5 text-center font-montserrat text-[16px] font-thin tracking-[0.50px] text-color_black-900_01"
                                >
                                <span>{option.label}</span>
                                </div>
                            )}
                            </React.Fragment>
                        )}
                    </ChipView>
                    </div>
                    <div className="ml-3 flex w-[92%] flex-col items-start gap-2.5 lg:w-full md:ml-0 md:w-full">
                        <Heading
                            size="text4x1"
                            as="h4"
                            className="ml-1.5 text-[24px] font-medium text-color_black-900_01 lg:text-[20px] md:ml-0"
                        >
                            Enter available equipments: (", ")
                        </Heading>
                        <Input
                            color="default_white"
                            size="xs"
                            shape="round"
                            name="edittext"
                            className="self-stretch rounded-[10px] border border-coolgray-20 px-3"
                        />
                        <Button
                            size="3x1"
                            className="ml-1.5 min-w-[194px] rounded-[20px] px-[34px] font-montserrat font-semibold md:ml-0 sm:px-4"
                        >
                            GENERATE
                        </Button>
                    </div>
                </div>
                <div className="flex flex-1 flex-col items-start gap-2 px-[42px] md:self-stretch md:px-5 sm:px-4">
                    <Heading
                        size="text4x1"
                        as="h5"
                        className="ml-2 text-[24px] font-medium text-color_black-900_01 lg:text-[20px] md:ml-0"
                    >
                        Ready to make Best Workout Plan for you!
                    </Heading>
                    <div className="mr-1.5 flex self-stretch rounded-[20px] bg-default-white px-[26px] py-5 md:mr-0 sm:px-4">
                    <Heading
                        size="text2x1"
                        as="h6"
                        className="mb-[478px] font-spacegrotesk text-[18px] font-medium text-color_black-900_01 lg:text-[15px]"
                        >
                        Enter your details. (", ")
                    </Heading>
                </div>
            </div>
            </div>
            </div>
          </div>
        </div>
        <Footer className="gap-12 sm:py-4" />
      </div>
    </>
  );
}
