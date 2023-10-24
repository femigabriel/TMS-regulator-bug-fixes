import React, { useState } from "react";
import { Button, Input, Modal } from "antd";
import Image from "next/image";
import { DriverRoutesProps } from "@/types/global";

export const RouteShedule = ({ routes, displayRoute }: any) => {
  const [isModalOpenRouteSchedule, setIsModalOpenRouteSchedule] =
    useState(false);

  const showModalRouteSchedule = () => {
    setIsModalOpenRouteSchedule(true);
  };

  const handleOk = () => {
    setIsModalOpenRouteSchedule(false);
  };

  const handleCancel = () => {
    setIsModalOpenRouteSchedule(false);
  };

  const DriverRoutes:  DriverRoutesProps[] = routes?.map((item:any)=> {
    return {
      id: item?.id,
      routesFro: item?.from?.description?.split(",")[0],
      from: item?.from?.place_id,
      to: item?.to?.place_id,
      routesTo: item?.to?.description?.split(",")[0],
      fleets: "BRT",
      time1: "7:00AM",
      time2: "8:30AM",
    }
  })
  return (
    <div>
      <Button
        onClick={showModalRouteSchedule}
        className="h-[45.853px] w-[62px] flex justify-center ml-1 rounded-[10px] border-[#2C97CF]"
      >
        <Image
          src="/icons/dashboard/bi_info.svg"
          width={24}
          height={24}
          className="mt-2"
          alt="i-icon"
        />
      </Button>
      <Modal
        footer={null}
        open={isModalOpenRouteSchedule}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="py-7">
          <div className="flex px-10 ">
            <Image
            //   src="/images/route.jpg"
            src="/icons/dashboard/aiony-route.svg"
              width={40}
              height={30}
              className="rounded-[100%] w-[73.243px] h-[91.737px]"
              alt="i-icon"
            />
            <h3 className="text-[1.25em] text-[#2C97CF] font-semibold mt-8">
              Route Schedule
            </h3>
          </div>
          <div className="my-5 px-5">
            <div className=" px-5 w-full">
              {DriverRoutes?.map((list, index) => {
                return (
                  <div onClick={()=> displayRoute(list)} key={index} className="px-5 py-3 w-full flex justify-between cursor-pointer text-[1em] font-bold text-[#2C97CF] rounded-[10px] border border-[#2C97CF80]">
                    <span className="">{list.routesFro} - {list.routesTo}</span>
                    {/* <span className="border border-y-0 px-5 border-[#2C97CF] border-x-2">
                      {list.fleets}
                    </span> */}
                    <span>{list.time1} - {list.time2} </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
