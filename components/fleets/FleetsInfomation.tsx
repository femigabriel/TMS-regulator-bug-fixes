import React from "react";
import Image from "next/image";
import { Button, Input } from "antd";

export const FleetsInfomation = () => {
  return (
    <div className="border border-l-1 shadow-lg border-[#2C97CF80] border-y-0 border-r-0 w-full">
      <h1 className="text-[1em] text-center font-bold mt-12 mb-7">
        Fleet information
      </h1>
      <div className="flex justify-between px-3">
        <div></div>
        <div className="flex">
          <Image
            src="/icons/dashboard/solar_calendar-bold.svg"
            width={24}
            height={24}
            className=" cursor-pointer"
            alt="i-icon"
          />
          <Image
            src="/icons/dashboard/pepicons-print_dots-x.svg"
            width={24}
            height={24}
            className=" cursor-pointer"
            alt="i-icon"
          />
        </div>
      </div>
      <form action="" className="px-2">
        <div className="flex gap-2 mb-3 w-full">
          <div className="flex flex-col">
            <label htmlFor="" className="text-[0.75em] ml-2">
              Fleet Name
            </label>
            <Input
            type="text"
              placeholder="BURGUNDY TIGER"
              //   value=""
              className="w-full h-[49px] border-[#2C97CF] border font-bold text-[#2C97CF] text-[0.75em]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-[0.75em] ml-2">
              Unique Number
            </label>
            <Input
            type="text"
              placeholder="BURGUNDY TIGER"
              //   value=""
              className="w-full h-[49px] border border-[#2C97CF] font-bold text-[#2C97CF] text-[0.75em]"
            />
          </div>
        </div>
        <div className="flex gap-2 mb-3 w-full">
          <div className="flex flex-col">
            <label htmlFor="" className="text-[0.75em] ml-2 flex">
              <span>Fleet Mode </span>
              <Image
                src="/icons/gridicons_dropdown.svg"
                width={18}
                height={18}
                className=" mx-1 cursor-pointer"
                alt="profile-image"
              />
            </label>
            <Input
              placeholder="BUS"
              type="text"
              //   value=""
              className="w-full h-[49px] border-[#2C97CF] border text-[#2C97CF] text-[0.75em] font-bold"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-[0.75em] ml-2">
              Registration Plate
            </label>
            <Input
            type="text"
              placeholder="NG-555-BUGY"
              //   value=""
              className="w-full h-[49px] border border-[#2C97CF] text-[#2C97CF] text-[0.75em] font-bold"
            />
          </div>
        </div>
        <div className="flex gap-2 mb-3 w-full">
          <div className="flex flex-col">
            <label htmlFor="" className="text-[0.75em] ml-2">
              Current Route
            </label>
            <Input
            type="text"
              placeholder="AJAH    -  MILE 2"
              //   value=""
              className="w-full h-[49px] border-[#2C97CF] font-bold border text-[#2C97CF] text-[0.75em]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-[0.75em] ml-2">
              Status
            </label>
            <Input
              placeholder="In Route"
              type="text"
              //   value=""
              className="w-full h-[49px] border font-bold border-[#2C97CF] text-[#2C97CF] text-[0.75em]"
            />
          </div>
        </div>
        <div className="flex gap-2 mb-3 w-full">
          <div className="flex flex-col">
            <label htmlFor="" className="text-[0.75em] ml-2">
              Departure Time
            </label>
            <Input
              placeholder="BURGUNDY TIGER"
              //   value=""
              type="time"
              className="w-full h-[49px] border-[#2C97CF] border text-[#2C97CF] text-[0.75em]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-[0.75em] ml-2">
              Arrival Time
            </label>
            <Input
              placeholder="BURGUNDY TIGER"
              //   value=""
              type="time"
              className=" h-[49px] border border-[#2C97CF] text-[#2C97CF] text-[0.75em] w-full"
            />
          </div>
        </div>
        <div className="flex justify-center"> 
          <Button className="bg-[#2C97CF] text-[1em] font-bold h-[46px] rounded-[10px] text-white my-3">Add Schedule </Button>
        </div>
      </form>
    </div>
  );
};
