"use client";
import React from "react";
import { DriversPage } from "@/components/drivers/DriversPage";
import { Layout } from "@/components/regulator/layout/layout";

export default function Drivers() {
  return (
    <Layout title="Welcome Oluwole">
      <div className=" py-10 lg:px-10">
       <DriversPage />
      </div>
    </Layout>
  );
}
