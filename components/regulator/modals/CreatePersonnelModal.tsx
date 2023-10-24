import React, { useState } from "react";
import { Button, Input, Modal } from "antd";
import Image from "next/image";

export const CreatePersonnelModal = () => {
  const [isModalOpenCreateOersonnel, setIsModalOpenCreatePersonnel] =
    useState(false);
    const [errors, setErrors] = useState("");


  const showModalCreatePersonnel = () => {
    setIsModalOpenCreatePersonnel(true);
  };

  const handleOk = () => {
    setIsModalOpenCreatePersonnel(false);
  };

  const handleCancel = () => {
    setIsModalOpenCreatePersonnel(false);
  };

  const handleChange = (e: any) => {
    // setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="flex item-center justify-center">
        <Button
          onClick={showModalCreatePersonnel}
          className="bg-[#2C97CF] w-[282px] rounded-[10px] h-[54px] text-[#fff] text-[1em] font-bold"
        >
          Create
        </Button>
      </div>
      <Modal
        footer={null}
        open={isModalOpenCreateOersonnel}
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
            <h3 className="text-[16px] text-[#2C97CF] font-semibold ml-5 mt-7">
              Personnel Details
            </h3>
          </div>
          <div className="my-5">
            <div className="flex flex-col mb-3">
              <label htmlFor="" className="text-[#2C97CF] text-[16px]">
                Name
              </label>
              <Input
                placeholder={"John Umoh Frank Nonso"}
                onBlur={() => {}}
                type="text"
                className="h-[45.853px] border-[#2C97CF] text-[#2C97CF] font-bold"
              />
            </div>
            <div>
              <div className="flex flex-col mb-3">
                <label htmlFor="" className="text-[#2C97CF] text-[16px]">
                  Phone Number
                </label>
                <Input
                  placeholder={"+234 - 1112 24698"}
                  onBlur={() => {}}
                  type="text"
                  className="h-[45.853px] border-[#2C97CF] text-[#2C97CF] font-bold "
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-[#2C97CF] text-[16px]">
                  Email Address
                </label>
                <Input
                  placeholder={"Johnumoh@gmail.com"}
                  onBlur={() => {}}
                  type="text"
                  className="h-[45.853px] border-[#2C97CF] text-[#2C97CF] font-bold"
                />
              </div>
              <div className="flex justify-center mt-7 ">
                <Button className="w-[282px] rounded-[10px] bg-[#2C97CF] h-[54px] text-[#fff] text-[1em] font-bold">
                  Edit Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
