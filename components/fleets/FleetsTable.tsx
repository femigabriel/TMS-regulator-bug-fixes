import React from "react";
import Image from "next/image";
import { Button, Checkbox, Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';



const FLeetList = [
  {
    id: 1,
    name: "Burgundy tiger",
    regPlate: "ng-555-bugy",
    uniqueNumb: "lama-123-006",
    status: "in route",
  },
  {
    id: 2,
    name: "Burgundy tiger",
    regPlate: "ng-555-bugy",
    uniqueNumb: "lama-123-006",
    status: "in route",
  },
  {
    id: 3,
    name: "Burgundy tiger",
    regPlate: "ng-555-bugy",
    uniqueNumb: "lama-123-006",
    status: "in route",
  },
  {
    id: 4,
    name: "Burgundy tiger",
    regPlate: "ng-555-bugy",
    uniqueNumb: "lama-123-006",
    status: "in route",
  },
];

export const FleetsTable = () => {
  return (
    <div className="w-full py-5 my-5">
      <div className=" w-[788px] ">
        <div className="flex justify-between gap-7 px-3">
          <Input
            placeholder="Search"
            prefix={
              <SearchOutlined className="text-[#2C97CF] mt-1" />
            }
            className="w-[465px] h-[46px] border border-[#2C97CF]"
          />

          <Button className="bg-[#2C97CF] rounded-[10px] text-white text-[1em] h-[46px] px-10 font-bold">
            Add Fleet
          </Button>
        </div>
        <div className="py-5">
          <div className="grid grid-cols-4 uppercase text-[0.65em] font-bold px-10 mb-5">
            <span className="ml-2">fleet name</span>
            <span>registration</span>
            <span>unique number</span>
            <div className="flex mx-3">
              <span>status</span>
              <div className="flex ml-3">
                <Image
                  src="/icons/dashboard/fluent-emoji-high-contrast_leftt-arrow.svg"
                  alt=""
                  width={13}
                  height={13}
                  className="mr-1 cursor-pointer"
                />
                <Image
                  src="/icons/dashboard/fluent-emoji-high-contrast_right-arrow.svg"
                  alt=""
                  width={13}
                  height={13}
                  className="ml-1 cursor-pointer"
                />
              </div>
            </div>
          </div>
          {FLeetList?.map((list, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-[10px] text-[0.52em] font-bold mx-3 mt-2 grid grid-cols-4 px-2 py-3 h-[60px] cursor-pointer"
              >
                <div className="flex w-full">
                  <Checkbox className="" />
                  <Image
                    src="/icons/dashboard/aiony-profile.svg"
                    width={36.12}
                    height={45.24}
                    className="w-[40px] h-[40px] mx-3 cursor-pointer rounded-full"
                    alt="profile-image"
                  />
                  <Image
                    src="/icons/dashboard/active.svg"
                    width={14}
                    height={14}
                    className="mr-2"
                    alt="i-icon"
                  />
                  <p className="mt-2.5 uppercase ">{list.name}</p>
                </div>
                <div className="border text-center flex justify-center items-center cursor-pointer ml-2 font-bold border-[#2C97CF] w-[127px] text-[#2C97CF] rounded-[10px] uppercase">
                  {list.regPlate}
                </div>
                <span className="uppercase mt-2 ml-2">{list.uniqueNumb}</span>
                <span className="uppercase mt-2 ml-2">{list.status}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
