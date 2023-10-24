"use client";
import React from "react";
import { Layout } from "@/components/regulator/layout/layout";
import { CreateOperatorForm } from "@/components/regulator/create operator/CreateOperatorForm";

export default function Dashboard() {
  return (
    <Layout title="Welcome Oluwole">
      <div className=" ">
        <CreateOperatorForm />
      </div>
    </Layout>
  );
}
