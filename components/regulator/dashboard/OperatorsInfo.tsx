import React, { useEffect } from "react";
import { OperatorInfoTable } from "./OperatorInfoTable";
import Image from "next/image";

export const OperatorsInfo = () => {

  return (
    <div className="">
      <div className="flex justify-between py-10">
        <h3 className="text-[1.05em] font-bold ">Operators information</h3>
        <div className="flex">
          <Image
            src="/icons/dashboard/fluent-emoji-high-contrast_leftt-arrow.svg"
            alt=""
            width={24}
            height={24}
            className="mr-2 cursor-pointer"
          />
          <Image
            src="/icons/dashboard/fluent-emoji-high-contrast_right-arrow.svg"
            alt=""
            width={24}
            height={24}
            className="ml-2 cursor-pointer"
          />
        </div>
      </div>
      <OperatorInfoTable />
    </div>
  );
};
