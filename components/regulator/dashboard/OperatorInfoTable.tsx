import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ActivitiesTableProps } from "@/types/global";
import type { DrawerProps, RadioChangeEvent } from "antd";
import { Drawer, Input } from "antd";
import { PersonelDetailsModal } from "../modals/PersonelDetailsModal";
import { DriverDetailsModal } from "../modals/DriverDetailsModal";
import { RouteShedule } from "../modals/RouteShedule";
import OperatorService from "@/api-services/operator";
import Map from "@/components/map/Map";

export const OperatorInfoTable = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  // Drawer
  const showDrawer = async (op: any) => {
    console.log({ op });
    setOpen(true);
    setSelectedOperator(op);
    await fetchfleet(op?.op_id);
    await fetchPersonnelList(op?.op_id);
    await fetchDrivers(op?.op_id);
    await fetchRoutes(op?.op_id);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  // Data Fetch
  const [operators, setOperators] = useState<any[]>([]);
  const [selectedOperator, setSelectedOperator] = useState<any>({});
  const [personnel, setPersonnel] = useState<any[]>([]);
  const [fleet, setFleet] = useState<any[]>([]);
  const [drivers, setDrivers] = useState<any[]>([]);
  const [routes, setRoutes] = useState<any[]>([]);
  const [selectedRoute, setSelectedRoute] = useState<any>({ from: "", to: "" });

  useEffect(() => {
    fetchOperatorsList();
  }, []);
  async function fetchOperatorsList() {
    // let regulator = JSON.parse(sessionStorage.getItem('regulator') as string);
    let response = await OperatorService.getAll();
    if (response) {
      let operatorList = response.map((data) => ({
        ...data,
        operator: data?.name,
        fleets: (
          <button className="text-[center] border border-[#2C97CF] bg-white w-[181.712px] h-[36px] rounded-[5px]">
            BRT
          </button>
        ),
        route: "Mile 2 - Ikeja",
        status: (
          <button className="text-[#0DA300] bg-[#ACFFA5] w-[138.296px] h-[30px] rounded-[5px]">
            {data?.status}
          </button>
        ),
      }));

      setOperators(operatorList);
    }
  }

  async function fetchPersonnelList(opID: number) {
    // let regulator = JSON.parse(sessionStorage.getItem('regulator') as string);
    let response = await OperatorService.getPersonnel(opID);
    if (response) {
      setPersonnel(response);
    }
  }

  async function fetchfleet(opID: number) {
    // let regulator = JSON.parse(sessionStorage.getItem('regulator') as string);
    let response = await OperatorService.getFleet(opID);
    if (response) {
      // console.log({fleet: response})

      setFleet(response);
    }
  }

  async function fetchDrivers(opID: number) {
    // let regulator = JSON.parse(sessionStorage.getItem('regulator') as string);
    let response = await OperatorService.getDrivers(opID);
    if (response) {
      console.log({ drivers: response });

      setDrivers(response);
    }
  }

  async function fetchRoutes(opID: number) {
    // let regulator = JSON.parse(sessionStorage.getItem('regulator') as string);
    let response = await OperatorService.getRoutes(opID);
    if (response) {
      console.log({ routes: response });

      if (response?.length > 0) {
        setRoutes(response);
        let item = response[0];
        setSelectedRoute({
          id: item?.id,
          routesFro: item?.from?.description?.split(",")[0],
          from: item?.from?.place_id,
          to: item?.to?.place_id,
          routesTo: item?.to?.description?.split(",")[0],
          fleets: "BRT",
          time1: "7:00AM",
          time2: "8:30AM",
        });
      } else {
        setRoutes([]);
        setSelectedRoute({});
      }
    }
  }

  function displayRoute(payload: any) {
    setSelectedRoute(payload);
  }

  console.log({ routes });

  return (
    <div className="w-full ">
      <div className="grid grid-cols-4 text-[16px] pb-5 font-[700] border border-x-0 border-t-0 border-[#2C97CF4D]">
        <div className="flex">
          <span>Operator</span>
          {/* <Image
            src="/icons/dashboard/basil_sort-outline.svg"
            alt=""
            width={24}
            height={24}
            className="ml-5"
          /> */}
        </div>
        <div className="flex">
          <span>List of Fleets</span>
          {/* <Image
            src="/icons/dashboard/basil_sort-outline.svg"
            alt=""
            width={24}
            height={24}
            className="ml-5"
          /> */}
        </div>
        <div className="flex">
          <span>Routes</span>
          {/* <Image
            src="/icons/dashboard/basil_sort-outline.svg"
            alt=""
            width={24}
            height={24}
            className="ml-5"
          /> */}
        </div>
        <div className="flex">
          <span>Status</span>
          {/* <Image
            src="/icons/dashboard/basil_sort-outline.svg"
            alt=""
            width={24}
            height={24}
            className="ml-5"
          /> */}
        </div>
      </div>
      <div className=" ">
        {operators?.map((list, index) => {
          // console.log({ list })
          return (
            <div
              key={index}
              className="text-[1em] grid grid-cols-4 py-2 px-2 rounded-[5px] my-2"
            >
              <span className=" uppercase">{list.operator}</span>
              <span>{list.fleets}</span>
              <span>{list.route}</span>
              <div className="flex">
                <span>{list.status}</span>
                <Image
                  src="/icons/dashboard/ph_dots-three-bold.svg"
                  width={24}
                  height={24}
                  className=" ml-2 cursor-pointer"
                  alt="more-icon"
                  onClick={() => {
                    showDrawer(list);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <Drawer
        title={
          <h3 className="text-[#2C97CF] text-[1.875em] text-center">
            Operator Details
          </h3>
        }
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <form action="">
          <div className="flex justify-between w-full mb-3">
            <div className="flex flex-col">
              <label className=" ">Operator’s name</label>
              <Input
                value={selectedOperator?.name}
                className="h-[45.853px] border-[#2C97CF] w-[210px] text-[#2C97CF] font-bold "
                onBlur={() => {}}
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label className="">Fleet ID</label>
              <Input
                value={fleet[0]?.fleet_id}
                onBlur={() => {}}
                type="text"
                className="h-[45.853px] border-[#2C97CF] w-[210px] text-[#2C97CF] font-bold "
              />
            </div>
          </div>
          <div className="flex mb-3">
            <div className="flex flex-col">
              <label className=""> Operator’s Presonnel Name</label>
              <Input
                value={personnel[0]?.first_name + " " + personnel[0]?.last_name}
                onBlur={() => {}}
                type="text"
                className="h-[45.853px] border-[#2C97CF] w-[388px] text-[#2C97CF] font-bold "
              />
            </div>
            <PersonelDetailsModal personnel={personnel[0]} />
          </div>
          <div className="flex mb-3">
            <div className="flex flex-col">
              <label className=""> Driver’s Name</label>
              <Input
                value={drivers[0]?.first_name + " " + drivers[0]?.last_name}
                onBlur={() => {}}
                type="text"
                className="h-[45.853px] border-[#2C97CF] w-[388px] text-[#2C97CF] font-bold "
              />
            </div>
            <DriverDetailsModal driver={drivers[0]} />
          </div>
          <div className="flex mb-3">
            <div className="flex flex-col">
              <Input
                value={`${selectedRoute?.routesFro} - ${selectedRoute?.routesTo}`}
                onBlur={() => {}}
                type="text"
                className="h-[45.853px] border-[#2C97CF] w-[388px] text-[#2C97CF] font-bold "
              />
            </div>

            <RouteShedule routes={routes} displayRoute={displayRoute} />
          </div>
        </form>
        <button
          id="go"
          className="bg-red-500 border-4 border-blue-500 invisible"
        >
          GO
        </button>
        <Map from={selectedRoute?.from} to={selectedRoute?.to} through={[]} />
      </Drawer>
    </div>
  );
};
