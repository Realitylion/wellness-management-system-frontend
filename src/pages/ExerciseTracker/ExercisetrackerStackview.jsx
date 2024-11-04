import { Button, Img, Heading } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";

const tableData = [
  {
    rowset: "1",
    rowprevious: "7.5kg x 15",
    rowwt: "7.5",
    rowreps: "15",
    oneone: "1",
  },
  {
    rowset: "2",
    rowprevious: "10kg x 10",
    rowwt: "10",
    rowreps: "10",
    oneone: "1",
  },
  {
    rowset: "3",
    rowprevious: "10kg x 10",
    rowwt: "15",
    rowreps: "9",
  },
];

export default function ExercisetrackerStackview() {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("rowset", {
        cell: (info) => (
          <div className="flex justify-center px-3">
            <div className="flex flex-col items-center">
              <Heading size="text3xl" as="p" className="text-[20px] font-medium text-color_black-900_01 lg:text-[17px]">
                {info.getValue()}
              </Heading>
              <Heading
                size="text3xl"
                as="p"
                className="relative mt-[-26px] text-[20px] font-medium text-color_black-900_01 lg:text-[17px]"
              >
                {info.row.original.oneone}
              </Heading>
            </div>
          </div>
        ),
        header: (info) => (
          <div className="flex">
            <Heading size="text3xl" as="p" className="text-[20px] font-medium text-color_black-900_01 lg:text-[17px]">
              SET {" "}
            </Heading>
          </div>
        ),
        meta: { width: "36px" },
      }),
      tableColumnHelper.accessor("rowprevious", {
        cell: (info) => (
          <div className="ml-8 flex flex-1 justify-center px-8 sm:px-4">
            <Heading size="text3xl" as="p" className="text-[20px] font-medium text-color_black-900_01 lg:text-[17px]">
              {info.getValue()}
            </Heading>
          </div>
        ),
        header: (info) => (
          <div className="ml-8 flex flex-1 justify-center px-8 sm:px-4">
            <Heading size="text3xl" as="p" className="text-[20px] font-medium text-color_black-900_01 lg:text-[17px]">
              PREVIOUS
            </Heading>
          </div>
        ),
        meta: { width: "160px" },
      }),
      tableColumnHelper.accessor("rowwt", {
        cell: (info) => (
          <div className="ml-5 flex px-5">
            <Heading size="text3xl" as="p" className="text-[20px] font-medium text-color_black-900_01 lg:text-[17px]">
              {info.getValue()}
            </Heading>
          </div>
        ),
        header: (info) => (
          <div className="ml-5 flex px-5">
            <Heading size="text3xl" as="p" className="text-[20px] font-medium text-color_black-900_01 lg:text-[17px]">
              WT
            </Heading>
          </div>
        ),
        meta: { width: "72px" },
      }),
      tableColumnHelper.accessor("rowreps", {
        cell: (info) => (
          <div className="ml-[58px] flex self-end px-2.5">
            <Heading size="text3xl" as="p" className="text-[20px] font-medium text-color_black-900_01 lg:text-[17px]">
              {info.getValue()}
            </Heading>
          </div>
        ),
        header: (info) => (
          <div className="ml-[58px] flex">
            <Heading size="text3xl" as="p" className="text-[20px] font-medium text-color_black-900_01 lg:text-[17px]">
              REPS
            </Heading>
          </div>
          ),
          meta: { width: "48px" },
          }),
          ];
        }, []);

        return (
        <div className="absolute bottom-0 left-0 right-0 m-auto h-[718px] flex-1 content-center lg:h-auto md:h-auto">
            <div className="ml-[388px] h-[48px] w-[30%] bg-gray-50 lg:ml-0 md:m-l-0 m-l-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 my-auto ml-auto mr-3.5 h-max flex-1 rounded-[10px] bg-coolgray-10 px-8 py-14 lg:mr-0 md:mr-0 md:py-5 sm:p-4">
                <div className="mb-[22px] flex flex-col items-center">
                <div className="flex items-start self-stretch md:flex-col">
                    <div className="flex w-[52%] flex-col items-start gap-10 md:w-full">
                    <div className="flex w-[56%] flex-wrap justify-between gap-5 rounded-[20px] bg-default-white px-4 py-6 shadow-xs lg:w-full md:w-full sm:py-4">
                        <Heading
                        size="text5xl"
                        as="h1"
                        className="self-end text-[27px] font-medium text-color_black-900_01 lg:text-[22px] md:text-[21px]"
                        >
                        Duration :{" "}
                        </Heading>
                        <Heading
                        size="text5xl"
                        as="h2"
                        className="mr-[-38px] self-end text-[27px] font-medium text-primary-60 lg:mr-0 lg:text-[22px] md:mr-0 md:text-[21px]"
                        >
                        1hr 1mins 11s
                        </Heading>
                    </div>
                    <div className="flex w-[40%] flex-wrap items-start gap-[27px] rounded-[20px] bg-default-white px-[18px] py-[22px] shadow-xs lg:w-full md:w-full sm:py-4">
                        <Heading
                        size="text5xl"
                        as="h3"
                        className="mb-1 text-[27px] font-medium text-color_black-900_01 lg:text-[22px] md:text-[21px]"
                        >
                        Volume :
                        </Heading>
                        <Heading
                        size="text5xl"
                        as="h4"
                        className="text-[27px] font-medium text-primary-60 lg:text-[22px] md:text-[21px]"
                        >
                        138kg
                        </Heading>
                    </div>
                    <div className="flex flex-wrap gap-6 rounded-[20px] bg-default-white px-[18px] py-6 shadow-xs sm:py-4">
                        <Heading
                        size="text5x1" as="h6" className="text-[27px] font-medium text-color_black-900_01 lg:text-[22px] md:text-[21px]">
                        Total Sets
                      </Heading>
                      <Heading size="text5x1" as="h6" className="text-[27px] font-medium text-primary-60 lg:text-[22px] md:text-[21px]">
                        12
                      </Heading>
                      
                      <div className="flex w-[38%] flex-col items-start gap-[38px] self-center rounded-[20px] bg-default-white px-3.5 py-10 shadow-xs md:w-full sm:py-4">
                        <Heading size="text5x1" as="p" className="ml-[18px] text-[27px] font-medium text-color_black-900_01 lg:text-[22px] md:ml-8 md:text-[21px]">
                          Bicep Curl (Dumbbell)
                        </Heading>
                        <ReactTable
                          bodyProps={{ className: "" }}
                          className="mb-[58px] self-stretch px-[18px]"
                          columns={tableColumns}
                          data={tableData}
                        />
                      </div>
                      
                      <div className="mx-[134px] mt-3.5 flex justify-end gap-[316px] self-stretch md:mx-0 sm:flex-col sm:gap-5">
                        <Button
                          size="md"
                          leftIcon={
                            <Img src="images/img_arrowleft.svg" alt="Arrow Left" className="mb-1 mt-0.5 h-[10px] w-[8px]" />
                          }
                          className="min-w-[102px] gap-[22px] self-end rounded-[18px] font-montserrat font-semibold sm:self-auto"
                        >
                          Prev
                        </Button>
                      
                        <div className="flex w-[12%] items-center justify-center gap-[22px] rounded-[18px] bg-primary-60 p-2 sm:w-full">
                          <Heading size="headingxs" as="p" className="font-montserrat text-[13px] font-semibold text-default-white">
                            Next
                          </Heading>
                        </div>
                        <Img src="images/img_arrow_right.svg" alt="Arrowright" className="h-[10px] self-end" />
                      </div>
                      
                      <Button
                        size="3x1"
                        className="ml-1 mt-[66px] min-w-[194px] self-start rounded-[28px] px-[18px] font-montserrat font-semibold md:ml-e"
                      >
                        Finish Workout{" "}
                    </Button>   
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );   
}