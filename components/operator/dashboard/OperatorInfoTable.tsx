import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ActivitiesTableProps } from "@/types/global";
import type { DrawerProps, RadioChangeEvent } from "antd";
import { Drawer, Input } from "antd";
// import { PersonelDetailsModal } from "@/components/modals/PersonelDetailsModal";
// import { DriverDetailsModal } from "@/components/modals/DriverDetailsModal";
// import { RouteShedule } from "@/components/modals/RouteShedule";
// import { QueryClient, useQuery } from "react-query";
// import ApiServices from "@/types/ApiServices";

const ActivitiesTable: ActivitiesTableProps[] = [
  {
    id: 1,
    operator: "mike trans",
    fleets: (
      <button className="text-[center] border border-[#2C97CF] bg-white w-[181.712px] h-[36px] rounded-[5px]">
        BRT
      </button>
    ),
    route: "Mile 2 - Ikeja",
    status: (
      <button className="text-[#0DA300] bg-[#ACFFA5] w-[138.296px] h-[30px] rounded-[5px]">
        On Route
      </button>
    ),
  },
  {
    id: 2,
    operator: "fmt trans.",
    fleets: (
      <button className="text-[center] border border-[#2C97CF] bg-white w-[181.712px] h-[36px] rounded-[5px]">
        Bus
      </button>
    ),
    route: "Ajah - Ikoyi",
    status: (
      <button className="text-[#FC3936] bg-[#FFBDBC] w-[138.296px] h-[30px] rounded-[5px]">
        On Route
      </button>
    ),
  },
  {
    id: 3,
    operator: "xyz trans",
    fleets: (
      <button className="text-[center] border border-[#2C97CF] bg-white w-[181.712px] h-[36px] rounded-[5px]">
        Train
      </button>
    ),
    route: "Ikeja - Epe",
    status: (
      <button className="text-[#FE9402] bg-[#FFE2BA] w-[138.296px] h-[30px] rounded-[5px]">
        On Route
      </button>
    ),
  },
  {
    id: 4,
    operator: "xyz trans",
    fleets: (
      <button className="text-[center] border border-[#2C97CF] bg-white w-[181.712px] h-[36px] rounded-[5px]">
        Train
      </button>
    ),
    route: "Ikeja - Epe",
    status: (
      <button className="text-[#FE9402] bg-[#FFE2BA] w-[138.296px] h-[30px] rounded-[5px]">
        On Route
      </button>
    ),
  },
  {
    id: 5,
    operator: "xyz trans",
    fleets: (
      <button className="text-[center] border border-[#2C97CF] bg-white w-[181.712px] h-[36px] rounded-[5px]">
        Train
      </button>
    ),
    route: "Ikeja - Epe",
    status: (
      <button className="text-[#FE9402] bg-[#FFE2BA] w-[138.296px] h-[30px] rounded-[5px]">
        On Route
      </button>
    ),
  },
  {
    id: 6,
    operator: "xyz trans",
    fleets: (
      <button className="text-[center] border border-[#2C97CF] bg-white w-[181.712px] h-[36px] rounded-[5px]">
        Train
      </button>
    ),
    route: "Ikeja - Epe",
    status: (
      <button className="text-[#FE9402] bg-[#FFE2BA] w-[138.296px] h-[30px] rounded-[5px]">
        On Route
      </button>
    ),
  },
];
export const OperatorInfoTable = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");
  const [users, setUsers] = useState([]);
  // Drawer
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  // const { isLoading, isError, data } = useQuery<OperatorProps>(
  //   'fetchUsers',
  //   ApiServices.fetchUserData,
  // );
  
  // if (isLoading) {
  //   return (
  //     <div className="text-center">
  //       Loading Operator's data, Please wait a bit
  //     </div>
  //   );
  // }
  // if (isError) {
  //   return (
  //     <div className="text-center text-red-500">
  //       Sorry.... SOmething went wrong somewhere....
  //     </div>
  //   );
  // }
  // console.log(data);


  return (
    <div className="w-full ">
      <div className="grid grid-cols-4 text-[16px] pb-5 font-[700] border border-x-0 border-t-0 border-[#2C97CF4D]">
        <div className="flex">
          <span>Operator</span>
          <Image
            src="/icons/dashboard/basil_sort-outline.svg"
            alt=""
            width={24}
            height={24}
            className="ml-5"
          />
        </div>
        <div className="flex">
          <span>List of Fleets</span>
          <Image
            src="/icons/dashboard/basil_sort-outline.svg"
            alt=""
            width={24}
            height={24}
            className="ml-5"
          />
        </div>
        <div className="flex">
          <span>Routes</span>
          <Image
            src="/icons/dashboard/basil_sort-outline.svg"
            alt=""
            width={24}
            height={24}
            className="ml-5"
          />
        </div>
        <div className="flex">
          <span>Status</span>
          <Image
            src="/icons/dashboard/basil_sort-outline.svg"
            alt=""
            width={24}
            height={24}
            className="ml-5"
          />
        </div>
      </div>

      {ActivitiesTable?.map((list, index) => {
        return (
          <div
            key={index}
            className="text-[1em] grid grid-cols-4 px-2 rounded-[5px] my-3 hover:bg-sky-100"
          >
            <span className=" uppercase mt-2">{list.operator}</span>
            <span>{list.fleets}</span>
            <span className="mt-2">{list.route}</span>
            <div className="flex">
              <span>{list.status}</span>
              <Image
                src="/icons/dashboard/ph_dots-three-bold.svg"
                width={24}
                height={24}
                className=" ml-2 cursor-pointer"
                alt="more-icon"
                onClick={showDrawer}
              />
            </div>
          </div>
        );
      })}
      <Drawer
        title={
          <h3 className="text-[#2C97CF] text-[1.875em] text-center">
            Operator Details
          </h3>
        }
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <form
          action="
     "
        >
          <div className="flex justify-between w-full mb-3">
            <div className="flex flex-col">
              <label className=" ">Operator’s name</label>
              <Input
                value={"Mike Trans. Limited"}
                className="h-[45.853px] border-[#2C97CF] w-[210px] text-[#2C97CF] font-bold "
                onBlur={() => {}}
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label className="">Fleet ID</label>
              <Input
                value={"BUS 53421 - EPE"}
                onBlur={() => {}}
                type="text"
                className="h-[45.853px] border-[#2C97CF] w-[210px] text-[#2C97CF] font-bold "
              />
            </div>
          </div>
          <div className="flex mb-3">
            <div className="flex flex-col">
              <label className=""> Operator’s Presonnel Name</label>
              <Input
                value={"John Umoh Frank Nonso"}
                onBlur={() => {}}
                type="text"
                className="h-[45.853px] border-[#2C97CF] w-[388px] text-[#2C97CF] font-bold "
              />
            </div>
            <PersonelDetailsModal />
          </div>
          <div className="flex mb-3">
            <div className="flex flex-col">
              <label className=""> Driver’s Name</label>
              <Input
                value={"John Umoh Frank Nonso"}
                onBlur={() => {}}
                type="text"
                className="h-[45.853px] border-[#2C97CF] w-[388px] text-[#2C97CF] font-bold "
              />
            </div>
            <DriverDetailsModal />
          </div>
          <div className="flex mb-3">
            <div className="flex flex-col">
              <Input
                value={"Show Route Schedule"}
                onBlur={() => {}}
                type="text"
                className="h-[45.853px] border-[#2C97CF] w-[388px] text-[#2C97CF] font-bold "
              />
            </div>

            <RouteShedule />
          </div>
        </form>
      </Drawer>
    </div>
  );
};


