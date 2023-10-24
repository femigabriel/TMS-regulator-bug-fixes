import React from "react";
import Image from "next/image";
import { Button, Input, Tooltip } from "antd";
import { CreatePersonnelModal } from "../modals/CreatePersonnelModal";

const personnelInfo = [
  {
    id: 1,
    name: "John Umoh Frank Nonso",
    img: (
      <Image
        src="/icons/dashboard/aiony-profile.svg"
        width={55}
        height={50}
        className="rounded-[100%] mr-5"
        alt="i-icon"
      />
    ),
  },
  {
    id: 2,
    name: "John Umoh Frank Nonso",
    img: (
      <Image
        src="/icons/dashboard/aiony-profile.svg"
        width={55}
        height={50}
        className="rounded-[100%] mr-5"
        alt="i-icon"
      />
    ),
  },
  {
    id: 3,
    name: "John Umoh Frank Nonso",
    img: (
      <Image
        src="/icons/dashboard/aiony-profile.svg"
        width={55}
        height={50}
        className="rounded-[100%] mr-5"
        alt="i-icon"
      />
    ),
  },
];

export const PersonnelInfomation = ({ rows, editRow, deleteRow }: any) => {
  return (
    <div className="w-[674px] h-full shadow-md px-10 py-7">
      <h1 className="text-[1.25em] font-bold pb-10">Personnel</h1>
      <div className="flex justify-between py-10">
        <h3 className="text-[1.05em] font-bold ">Operators information</h3>
        <div className="flex">
          <Image
            src="/icons/dashboard/fluent-emoji-high-contrast_leftt-arrow.svg"
            alt=""
            width={24}
            height={24}
            className="mr-2 cursor-pointer"
          />
          <Image
            src="/icons/dashboard/fluent-emoji-high-contrast_right-arrow.svg"
            alt=""
            width={24}
            height={24}
            className="ml-2 cursor-pointer"
          />
        </div>
      </div>
      {personnelInfo.map((list, index) => {
        return (
          <div key={index} className="flex flex-col">
            <Input
              prefix={
                <Image
                  src="/icons/dashboard/aiony-profile.svg"
                  width={55}
                  height={50}
                  className="rounded-[100%] mr-5"
                  alt="i-icon"
                />
              }
              suffix={
                <Button className="h-[56.791px] w-[70.312px] flex justify-center items-center rounded-[10px] border-[#2C97CF] border-y-0 border-r-0">
                  <Image
                    src="/icons/dashboard/bi_info.svg"
                    width={30}
                    height={30}
                    className=""
                    alt="i-icon"
                  />
                </Button>
              }
              className="h-[57px] border border-[#2C97CF] text-[#2C97CF] font-semibold  px-0 text-[1em] mb-7"
              //   value={"John Umoh Frank Nonso"}
              placeholder={list.name}
            />
          </div>
        );
      })}
      <CreatePersonnelModal />
    </div>
  );
};
