"use client";
import React from "react";
import { Layout } from "@/components/regulator/layout/layout";
import { PersonnelPage } from "@/components/regulator/personnel/PersonnelPage";

export default function personnel() {
  return (
    <Layout title="Welcome Oluwole">
      <div className=" py-10 lg:px-10">
        <PersonnelPage />
      </div>
    </Layout>
  );
}
