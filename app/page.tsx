'use client'

import BaseTemplate from '@/components/BaseTemplate';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { QueryClient, QueryClientProvider } from "react-query";


export default function Home() {
  let router = useRouter();
  const queryClient = new QueryClient();

  return (
    <main className="flex min-h-screen flex-col items-start justify-start text-[#2C97CF]">
      {/**Main page content */}
      <QueryClientProvider client={queryClient}>
      <BaseTemplate>
        <div className='w-full'>
          <Header />
          <div className='flex items-start h-[190px] overflow-hidden'>
            <Image
              src="/hero-display.svg"
              alt="Hero Image"
              className="dark:invert w-full"
              width={1440}
              height={299}
              priority
            />
          </div>
          <p className='w-full text-center text-red-500 text-[20px] font-bold'>
            PLAN 
            <span className='text-gray-600 mx-[20px]'>|</span> 
            IMPLEMENTATION 
            <span className='text-gray-600 mx-[20px]'>|</span> 
            FRANCHISE 
            <span className='text-gray-600 mx-[20px]'>|</span>
            REGULATE
          </p>
          <div className='py-10 flex flex-col justify-center items-center'>
            <h4 className='font-bold text-[28px]'>LAMATA REGULATOR</h4>
            <p className='text-[20px]'>Service and support tool</p>
          </div>
          <div className='flex justify-center'>
            <Button
              text='Sign In'
              variant='primary'
              size='medium'
              onClick={()=>{router.push('/signin')}}
            />
          </div>
        </div>
      </BaseTemplate>
      </QueryClientProvider>

    </main>
    
  )
}


