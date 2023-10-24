"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuBarist } from "@/types/global";
import sidebar from "../../../styles/dashboard/sidebar.module.css";
import Image from "next/image";

const menu: MenuBarist[] = [
  {
    id: 1,
    title: "Dashboard",
    icon: (
      <Image
        src="/icons/sidebar/ep_menu (2).svg"
        alt=""
        width={24}
        height={24}
      />

    ),

    link: "/dashboard",
  },
  {
    id: 2,
    title: "Personnel",
    icon: (
      <Image
        src="/icons/sidebar/ep_menu (1).svg"
        alt=""
        width={24}
        height={24}
      />
    ),

    link: "/personnel",
  },
  {
    id: 3,
    title: "Drivers",
    icon: (
      <Image
        src="/icons/sidebar/arcticons_caynaxsportstracker.svg"
        alt=""
        width={24}
        height={24}
      />
    ),
    link: "/drivers",
  },
  {
    id: 4,
    title: "Fleet Live",
    icon: (
      <Image
        src="/icons/sidebar/arcticons_onlyoffice-documents.svg"
        alt=""
        width={24}
        height={24}
      />
    ),
    link: "/fleet_live",
  },
  {
    id: 5,
    title: "Schedules",
    icon: (
      <Image
        src="/icons/sidebar/clarity_employee-solid.svg"
        alt=""
        width={24}
        height={24}
      />
    ),
    link: "/schedules",
  },
  {
    id: 6,
    title: "History",
    icon: (
      <Image
        src="/icons/sidebar/clarity_employee-solid.svg"
        alt=""
        width={24}
        height={24}
      />
    ),
    link: "/history",
  },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className={sidebar.sidebar}>
      <div className=" ">
        <Image
          src="/sidebarLogo.png"
          alt="sidebar-logo"
          width={79}
          height={79}
          className="mb-10  m-5"
        />
      </div>
      <nav className="sidebar_nav flex flex-col justify-between px-3">
        <div>
          {menu?.map((list, index) => {
            return (
              <Link
                key={index}
                href={list.link}
                className={`${
                  pathname === list.link ? "font-bold" : "font-normal"
                } flex mb- py-5 text-[16px] `}
              >
                <span className="px-3">{list.icon}</span>
                <span className="">{list.title}</span>
              </Link>
            );
          })}
        </div>
        <li className="px-3 flex mt-48">
          <Image
            src="/icons/sidebar/clarity_employee-solid.svg"
            alt=""
            width={24}
            height={24}
            className="mr-3"
          />
          <Link href="/">Log Out</Link>
        </li>
      </nav>
    </div>
  );
};
