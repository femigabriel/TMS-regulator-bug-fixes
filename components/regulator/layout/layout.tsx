"use client";

import React from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
// import BaseTemplate from "@/components/BaseTemplate";

interface Props {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const Layout = ({ children, title, description }: Props) => {
  return (
    // <BaseTemplate>
      <div className="flex w-full ">
        <Sidebar />
        <div className="w-[260px]"></div>
        <div className="min-w-[80vh] w-full base_layout">
          <div className="dashboard rounded-[30px] h-full w-full">
            <Header
              title={title || "no title"}
              description={description || "no description"}
            />
            <div className="py-10 lg:px-10">{children}</div>
          </div>
        </div>
        </div>
      // </div>
    // </BaseTemplate>
  );
};
