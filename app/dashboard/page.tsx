"use client";
import React from "react";
import { Layout } from "@/components/regulator/layout/layout";
import { DashboardActivitiesMenu } from "@/components/regulator/dashboard/DashboardActivitiesMenu";

export default function dashboard() {
  
  return (
    <Layout title="Welcome Oluwole">
      <div className="overflow-y-auto pb-[25.5rem] ">
        <DashboardActivitiesMenu />
      </div>
    </Layout>
  );
}
