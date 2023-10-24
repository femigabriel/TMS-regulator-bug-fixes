"use client";
import React from "react";
import { Layout } from "@/components/operator/dashboard layout/layout";
import { FleetsPage } from "@/components/fleets/FleetsPage";

export default function fleets() {
  return (
    <Layout title="Welcome Oluwole">
      <div className=" ">
        <FleetsPage />
      </div>
    </Layout>
  );
}
