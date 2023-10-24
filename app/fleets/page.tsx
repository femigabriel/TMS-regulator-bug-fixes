"use client";
import React from "react";
import { FleetsPage } from "@/components/fleets/FleetsPage";
import { Layout } from "@/components/regulator/layout/layout";

export default function fleets() {
  return (
    <Layout title="Welcome Oluwole">
      <div className=" ">
        <FleetsPage />
      </div>
    </Layout>
  );
}
