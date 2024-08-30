import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { ClerkLoaded, SignedIn, SignedOut, SignIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className='h-24 flex items-center justify-between'>
      <div className='md:hidden lg:block w-[20%]'>
        <Link href="/" className="font-bold text-xl text-blue-600">
        mono-sol
        </Link>
      </div>
      <div className='hidden md:flex lg-block w-[50%] text-sm items-center justify-between'>
        <div className='flex gap-6 text-gray-600'>
          <Link href="/" className="flex items-center gap-4">
            <Image src="/home.png" alt="homepage" width={16} height={16} className="w-4 h-4" />
            <span>Homepage</span>
          </Link>
          <Link href="/" className="flex items-center gap-4">
            <Image src="/friends.png" alt="friends" width={16} height={16} className="w-4 h-4" />
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex items-center gap-4">
            <Image src="/stories.png" alt="stories" width={16} height={16} className="w-4 h-4" />
            <span>Stories</span>
          </Link>
        </div>
        <div className='hidden xl:flex p-2 bg-slate-100 items-center rounded-xl'>
          <input type="text" placeholder="search..." className="bg-transparent outline-none"/>
          <Image src="/search.png" alt="" width={14} height={14}/>
        </div>
      </div>
      <div className='w-[30%] flex items-center gap-4 xl:gap-8 justify-end'>
        <ClerkLoaded>
        <div className="" />
        </ClerkLoaded>
        <ClerkLoaded>
          <SignedIn>
          <div className="cursor-pointer">
              <Image src="/people.png" alt="" width={24} height={24} />
            </div>
            <div className="cursor-pointer">
              <Image src="/messages.png" alt="" width={20} height={20} />
            </div>
            <div className="cursor-pointer">
              <Image src="/notifications.png" alt="" width={20} height={20} />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
          <div className="flex items-center gap-2 text-sm">
              <Image src="/login.png" alt="" width={20} height={20} />
              <Link href="/sign-in">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
      <MobileMenu/>
      </div>
    </div>
  );
};

export default Navbar;