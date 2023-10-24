"use client";
import React from "react";
import { Layout } from "@/components/operator/dashboard layout/layout";
import { DriversPage } from "@/components/drivers/DriversPage";

export default function Drivers() {
  return (
    <Layout title="Welcome Oluwole">
      <div className=" py-10 lg:px-10">
       <DriversPage />
      </div>
    </Layout>
  );
}
