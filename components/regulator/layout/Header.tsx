import { AuthList } from '@/types/global'
import React from 'react'
import Image from 'next/image';


export const Header = (props: AuthList) => {
  return (
    <div>
    <div className="header bg-white w-full rounded-[30px]">
      <header className="flex justify-between px-10 py-5 border border-x-0 border-t-0 border-[#2C97CF4D]">
        <div>
          <h1 className="text-[1.25em] mt-5 font-bold">
            {props.title}
          </h1>
        </div>
        <div className="flex rounded-full cursor-pointer">
        <Image
               src="/icons/sidebar/carbon_notification.svg"
                width={32}
                height={32}
                className=" mx-3 mt-3 cursor-pointer"
                alt="profile-image"
              />
    
            <div className="flex justify-between mt-1">
              <Image
                  src="/icons/dashboard/aiony-profile.svg"
                width={36.12}
                height={45.24}
                className="w-[40px] mt-2 h-[40px] mx-3 cursor-pointer rounded-full"
                alt="profile-image"
              />

            </div>
       
        </div>
      </header>
    </div>
  </div>
  )
}
