import Link from "next/link"
import MobileMenu from "./MobileMenu"
import Image from "next/image"
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"


const Navbar = () => {
    return (
        <div className="h-24 flex items-center justify-between">
            {/* LEFT */}
            <div className="md:hidden lg:block w-[20%]">
                <Link href='/' className="font-bold text-xl text-green-600">
                <Image src="/logo.jpg" width={64} height={64} alt="PetsSocials"/>
                  Horse&Co
                </Link>
            </div>
            {/* CENTER */}
            <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
                {/* LINKS */}
                <div className="flex gap-6 text-gray-800">
                    <Link href="/" className="flex items-center gap-2">
                    <Image src="/home.png" alt="Homepage" width={16} height={16} className="w-4 h-4"/>
                    <span>Homepage</span>   
                    </Link>
                    <Link href="/" className="flex items-center gap-2">
                    <Image src="/friends.png" alt="Friends" width={16} height={16} className="w-4 h-4"/>
                    <span>Friends</span>   
                    </Link>
                    <Link href="/" className="flex items-center gap-2">
                    <Image src="/stories.png" alt="Stories"width={16} height={16} className="w-4 h-4"/>
                    <span>Stories</span>   
                    </Link>
                </div>
                <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
                    <input type="text" className="bg-transparent outline-none" placeholder="Search..."/>
                    <Image src="/search.png" alt="search" width={14} height={14}/>
                </div>
            </div>
            {/* RIGHT */}
            <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
                <ClerkLoading>
                <div
                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-success motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span>
                </div>
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <div className="cursor-pointer">
                            <Image src="/people.png" alt="User" width={30} height={30} />
                        </div>
                        <div className="cursor-pointer">
                            <Image src="/messages.png" alt="Messages" width={25} height={25} />
                        </div>
                        <div className="cursor-pointer">
                            <Image src="/notifications.png" alt="Notifications" width={25} height={25} />
                        </div>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <div className="flex items-center gap-2 text-sm">
                            <Image src="/login.png" alt="Login" width={20} height={20} className="w-8 h-8 rounded-full" />
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