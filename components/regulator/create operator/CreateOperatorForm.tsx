"use client";
import React, { useState } from "react";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import { Form, Input, Spin } from "antd";

export const CreateOperatorForm = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = (e: any) => {
    e.preventDefault();
    setLoading(true);
    // setLoading((preValue) => !preValue);
  };

  return (
    <div className="mx-auto flex flex-col justify-start  rounded-b-xl shadow-xl w-[722px] h-[833px]">
      <div className="px-20">
        <h1 className="text-[30px] font-bold mt-20 mb-5 text-center">
          Create Operator
        </h1>
        <form className="w-full">
          <h3 className="text-[1em] font-bold mb-2">Operator information</h3>
          <Input
            // value="Company Name"
            placeholder={"Company Name"}
            onBlur={() => {}}
            type="text"
            className="h-[46px] rounded-[10px] px-5 mb-5 border border-[#2C97CF] text-[#2C97CF] text-[16px] font-bold w-full"
          />
          <Input
            placeholder={"Company Address"}
            // value="Company Address"
            onBlur={() => {}}
            type="text"
            className="h-[46px] rounded-[10px] px-5 mb-5 border border-[#2C97CF] text-[#2C97CF] text-[16px] font-bold w-full"
          />
          <Input
            placeholder={"Liaison Name"}
            // value="Liaison Name"
            onBlur={() => {}}
            type="text"
            className="h-[46px] rounded-[10px] px-5 mb-5 border border-[#2C97CF] text-[#2C97CF] text-[16px] font-bold w-full"
          />
          <Input
            // value="Linputiaison Email Address"
            placeholder={"Liaison Email Address"}
            onBlur={() => {}}
            type="email"
            className="h-[46px] rounded-[10px] px-5 mb-5 border border-[#2C97CF] text-[#2C97CF] text-[16px] font-bold w-full"
          />
          <Input
            // value="Liaison Phone Number"
            placeholder={"Liaison Phone Number"}
            onBlur={() => {}}
            type="phone"
            className="h-[46px] rounded-[10px] px-5 mb-5 border  border-[#2C97CF] text-[#2C97CF] text-[16px] font-bold w-full"
          />
          <Input
            // value="Assign Route"
            placeholder={"Assign Route"}
            onBlur={() => {}}
            type="text"
            className="h-[46px] rounded-[10px] px-5 mb-5 border border-[#2C97CF] text-[#2C97CF] text-[16px] font-bold w-full"
          />
          <Spin spinning={loading}>
            <Button
              text="Register"
              variant="primary"
              size="large"
              onClick={() => {
                handleClick;
              }}
            />
          </Spin>
        </form>

        <p className="text-[14px] font-semibold my-5">
          Automatic email containing operator’s ID and password will be sent to
          newly register operator. CLICK HERE to resend email.
        </p>
        <p className="text-center py-5 opacity-[0.4] text-[0.85em]">
          Powered by LAMATA
        </p>
      </div>
    </div>
  );
};
