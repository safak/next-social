import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className=" h-24 flex items-center justify-between">
      <div className="md:hidden lg:block w-[20%]">
        {/* LEFT */}
        <Link href={"/"} className="font-bold text-xl text-blue-600">
          LAMASOCIAL
        </Link>
      </div>
      <div className="hidden md:flex w-[50%]">
        {/* CENTER */}
        <div>
          {/* LINKS */}
          <div className="flex gap-6 text-gray-600 text-sm">
            <Link className="flex gap-2 items-center" href={"/"}>
              <Image
                className="w-4 h-4"
                src="/home.png"
                alt="Homepage"
                width={16}
                height={16}
              />
              <span>Homepage</span>
            </Link>
            <Link className="flex gap-2 items-center" href={"/"}>
              <Image
                className="w-4 h-4"
                src="/friends.png"
                alt="Friends"
                width={16}
                height={16}
              />
              <span>Friends</span>
            </Link>
            <Link className="flex gap-2 items-center" href={"/"}>
              <Image
                className="w-4 h-4"
                src="/stories.png"
                alt="Stories"
                width={16}
                height={16}
              />
              <span>Stories</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        {/* RIGHT */}
        <ClerkLoading>
          <div
            className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current  border-gray-500 border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            role="status"
          />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image src="/people.png" alt="" width={20} height={20} />
            </div>
            <div className="cursor-pointer">
              <Image src="/messages.png" alt="" width={20} height={20} />
            </div>
            <div className="cursor-pointer">
              <Image src="/notification.png" alt="" width={20} height={20} />
            </div>
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 text-sm">
              <Image src="/noAvatar.png" alt="" width={20} height={20} />
              <Link href="/sign-in">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
