import React, { useState } from "react";
import Image from "next/image";
import { Tabs } from "antd";
import type { TabsProps, Spin } from "antd";
import DashboardPage from "./DashboardPage";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Overview",
    children: <DashboardPage />,
  },
  {
    key: "2",
    label: "Create Operator",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: (
      <div className="flex">
        <span>Alert</span>
        <Image
          src="/icons/gridicons_dropdown.svg"
          width={24}
          height={24}
          className=" mx-1 cursor-pointer"
          alt="profile-image"
        />
      </div>
    ),
    children: "Route Page",
  },
];

export const DashboardActivitiesMenu = () => {
  return (
    <div className="w-full">
      <div className="sidebar-b"></div>
      <Tabs defaultActiveKey="1" centered items={items} onChange={onChange} />
      {/* {items?.map((list, index) => {
        return (
          <nav key={index} className="my-3  text-[16px] font-normal">
            <li className={`${list.id === active ? "activeMenu" : ""}`}>
              {list.title}
            </li>
          </nav>
        );
      })} */}
    </div>
  );
};
