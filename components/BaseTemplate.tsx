'use client'

import Button from '@/components/Button';
import Header from '@/components/Header';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function BaseTemplate({children}:any) {

  return (
    <main className="flex w-screen min-h-screen flex-col items-start justify-start text-[#2C97CF]">
      {/**Background image - optimised with next/image *//*bg-gradient-to-t from-white via-white dark:from-black dark:via-black*/}
      <div className="fixed bottom-0 top-28 left-0 flex h-screen w-full items-center justify-center bg-white">
        <Image
          src="/LAMATA_logo.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={650}
          height={560}
          priority
        />
      </div>
      
      <div className='z-10 h-screen w-full flex justify-center items-center block lg:hidden animate-pulse text-center text-[20px] md:text-[24px] font-bold '>
        <p>Please use a bigger screen for the best experience</p>
      </div>

      {/**Main page content */}
      <div className='z-10 w-full hidden lg:block'>
        {children}
      </div>
    </main>
  )
}
