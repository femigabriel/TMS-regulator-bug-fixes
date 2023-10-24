"use client";
import React, { useEffect } from "react";
import { OperatorsInfo } from "./OperatorsInfo";
import { RecentActivities } from "./RecentActivities";

export default function DashboardPage() {

  // useEffect(()=>{
  //   let recentActivities;
  // }, [])

  return (
    <div className="dashboardPage text-[#2C97CF]">
      <RecentActivities />
      <OperatorsInfo />
    </div>
  );
}
