import React, { useState } from "react";
import { Button, Input, Modal } from "antd";
import Image from "next/image";

export const DriverDetailsModal = ({driver}:any) => {
  const [isModalOpenDriverDetails, setIsModalOpenDriverDetails] =
    useState(false);

  const showModalDriverDetails = () => {
    setIsModalOpenDriverDetails(true);
  };

  const handleOk = () => {
    setIsModalOpenDriverDetails(false);
  };

  const handleCancel = () => {
    setIsModalOpenDriverDetails(false);
  };
  return (
    <div>
      <Button
        onClick={showModalDriverDetails}
        className="h-[45.853px] w-[62px] flex justify-center mt-7 ml-1 rounded-[10px] border-[#2C97CF]"
      >
        <Image
          src="/icons/dashboard/bi_info.svg"
          width={24}
          height={24}
          className="mt-2"
          alt="i-icon"
        />
      </Button>
      <Modal
        footer={null}
        open={isModalOpenDriverDetails}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="my-7 px-10 py-5">
          <div className="flex">
            <Image
              src="/icons/dashboard/aiony-profile.svg"
              width={40}
              height={40}
              className="rounded-[100%] w-[81.243px] h-[81.737px]"
              alt="i-icon"
            />
            <h3 className="text-[1.25em] text-[#2C97CF] font-semibold ml-5 mt-7">
              Driver Details
            </h3>
          </div>
          <div className="my-5">
            <div className="flex flex-col mb-3">
              <label htmlFor="" className="text-[#2C97CF] text-[16px]">
                Name
              </label>
              <Input
                value={driver?.first_name + ' ' + driver?.last_name}
                onBlur={() => {}}
                type="text"
                className="h-[45.853px] border-[#2C97CF] text-[#2C97CF] font-bold"
              />
            </div>
            <div>
              <div className="flex flex-col mb-3">
                <label htmlFor="" className="text-[#2C97CF] text-[16px]">
                  Date of Birth
                </label>
                <Input
                  value={"08/12/1992  (42 years)"}
                  onBlur={() => {}}
                  type="text"
                  className="h-[45.853px] border-[#2C97CF] text-[#2C97CF] font-bold"
                />
              </div>
              <div className="flex flex-col mb-3">
                <label htmlFor="" className="text-[#2C97CF] text-[16px]">
                  Phone Number
                </label>
                <Input
                  value={driver?.phone_number}
                  onBlur={() => {}}
                  type="text"
                  className="h-[45.853px] border-[#2C97CF] text-[#2C97CF] font-bold"
                />
              </div>
              <div className="flex flex-col mb-3">
                <label htmlFor="" className="text-[#2C97CF] text-[16px]">
                  Driver’s License ID
                </label>
                <Input
                  value={driver?.drivers_license_id}
                  onBlur={() => {}}
                  type="text"
                  className="h-[45.853px] border-[#2C97CF] text-[#2C97CF] font-bold"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-[#2C97CF] text-[16px]">
                  Driver’s License Expiring Date
                </label>
                <Input
                  value={(new Date(driver?.drivers_license_exp_date)).toUTCString()}
                  onBlur={() => {}}
                  type="text"
                  className="h-[45.853px] border-[#2C97CF] text-[#2C97CF] font-bold"
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
