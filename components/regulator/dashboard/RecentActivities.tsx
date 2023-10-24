import React from "react";
import Image from "next/image";
import recentActivities from "../../../styles/dashboard/activities.module.css";
import { ActivitiesProps } from "@/types/global";

const activitiesCards: ActivitiesProps[] = [
  {
    id: 1,
    color: "#FFE2BA",
    title: "Routes in transit",
    number: 180,
    icon: (
      <Image
        src="/icons/dashboard/gis_route.svg"
        width={54}
        height={54}
        className="  cursor-pointer"
        alt="profile-image"
      />
    ),
  },
  {
    id: 2,
    title: "Routes delayed",
    color: "#FFBDBC",
    number: 20,
    icon: (
      <Image
        src="/icons/dashboard/solar_danger-triangle-broken.svg"
        width={54}
        height={54}
        className="  cursor-pointer"
        alt="profile-image"
      />
    ),
  },
  {
    id: 3,
    title: "Active Operators",
    color: "#ACFFA5",
    number: 50,
    icon: (
      <Image
        src="/icons/dashboard/eos-icons_ai-operator.svg"
        width={54}
        height={54}
        className="cursor-pointer"
        alt="profile-image"
      />
    ),
  },
];
export const RecentActivities = () => {
  return (
    <div className="w-full">
      <h3 className="text-[1.25em] font-bold pb-10">Recent Activities</h3>
      <div className="">
        {/* <div className="grid grid-cols-3 gap-7">
          {activitiesCards?.map((list, index) => {
            return (
              <div className={`${recentActivities.card} bg-[${list.color}]`}   key={index}>
                <div className="flex justify-between px-10 py-7">
                  <div className="">
                    <h3 className="text-[2.25em] font-bold">{list.number}</h3>
                    <span className="text-[1em] font-semibold">
                      {list.title}
                    </span>
                  </div>
                  <div>{list.icon}</div>
                </div>
              </div>
            );
          })}
        </div> */}
        <div className="grid grid-cols-3 gap-10">

          <div className="w-full h-full shadow-sm shadow-[#2C97CF] rounded-[10px] bg-[#FFE2BA]">
            <div className="flex justify-between px-10 py-12">
              <div className="">
                <h3 className="text-[2.25em] font-bold">180</h3>
                <span className="text-[1em] font-semibold">
                  Routes in transit
                </span>
              </div>
              <Image
                src="/icons/dashboard/gis_route.svg"
                width={54}
                height={54}
                className="  cursor-pointer"
                alt="profile-image"
              />
            </div>
          </div>

          <div className="w-full h-full shadow-sm shadow-[#2C97CF] rounded-[10px] bg-[#FFBDBC]">
            <div className="flex justify-between px-10 py-12">
              <div className="">
                <h3 className="text-[2.25em] font-bold">20</h3>
                <span className="text-[1em] font-semibold">Routes delayed</span>
              </div>
              <Image
                src="/icons/dashboard/solar_danger-triangle-broken.svg"
                width={54}
                height={54}
                className="  cursor-pointer"
                alt="profile-image"
              />
            </div>
          </div>

          <div className="w-full  h-full shadow-sm shadow-[#2C97CF] rounded-[10px] bg-[#ACFFA5]">
            <div className="flex justify-between items-center px-10 py-12">
              <div className="">
                <h3 className="text-[2.25em] font-bold">50</h3>
                <span className="text-[1em] font-semibold">
                  Active Operators
                </span>
              </div>
              <Image
                src="/icons/dashboard/eos-icons_ai-operator.svg"
                width={54}
                height={54}
                className="cursor-pointer"
                alt="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
