import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

export default function Header({
  signin = false,
  signinType = 1,
  setSigninType = (type: number) => {},
}) {
  return (
    <div className="w-full flex justify-between">
      <Link href="/" className="h-[124px] p-2 flex items-center">
        <Image
          src="/LAMATA-logo.svg"
          alt="LAMATA Logo"
          className="dark:invert"
          width={88}
          height={88}
          priority
        />
      </Link>
      <div className="flex flex-1 justify-end items-center space-x-6 text-[#2C97CF] text-[16px] px-7">
        {signin ? (
          <div className="cursor-pointer flex flex-1 justify-end items-center space-x-6 text-[#2C97CF] text-[16px]">
            <div
              onClick={() => setSigninType(1)}
              className={`${signinType === 1 && "font-bold underline"}`}
            >
              <p> Regulator </p>
            </div>
            <div
              onClick={() => setSigninType(2)}
              className={`${signinType === 2 && "font-bold underline"}`}
            >
              <p> Operator </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-1 justify-end items-center space-x-6 text-[#2C97CF] text-[16px]">
            <div>
              <a> About Us </a>
            </div>
            <div>
              <a> Contact </a>
            </div>
          </div>
        )}
        <Link href="/signin">
          <Button
            text="Sign In"
            onClick={() => {}}
            variant="primary"
            size="medium"
          />
        </Link>
        <Link href="/signin">
          <Button
            text="Sign Up"
            onClick={() => {}}
            variant="secondary"
            size="medium"
          />
        </Link>
        {/* <div>
                <Button
                    text="Search" 
                    onClick={()=>{}}
                    variant="custom"
                    size="medium"
                >
                    <div className='w-full flex justify-center space-x-4 px-4'>
                        <Image 
                            src="/icons/search.svg" 
                            alt="search" 
                            width={20}
                            height={20}
                        />
                        <p>Search</p>
                    </div>                       
                </Button>
            </div> */}
        {/* <div>
                <Button
                    text="Search" 
                    onClick={()=>{}}
                    variant="custom"
                    size="small"
                >
                    <div className='w-full flex justify-between px-4'>
                        <p>EN</p>
                        <Image 
                            src="/icons/dropdown.svg" 
                            alt="" 
                            width={24}
                            height={24}
                        />
                    </div>                       
                </Button>
            </div> */}
      </div>
    </div>
  );
}
