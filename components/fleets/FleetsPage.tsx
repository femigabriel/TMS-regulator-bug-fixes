import React from "react";
import { FleetsTable } from "./FleetsTable";
import Image from "next/image";
import { FleetsInfomation } from "./FleetsInfomation";

export const FleetsPage = () => {
  return (
    <div className="bg-[#EAF5FAE0] w-full">
      <div className="">
        <Image
          src="/icons/dashboard/mapImage.svg"
          width={40}
          height={40}
          className="w-full"
          alt="i-icon"
        />
      </div>
     <div className="flex w-full ">
     <FleetsTable />
      <FleetsInfomation />
     </div>
    </div>
  );
};
