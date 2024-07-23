import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

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
              <Image className="w-4 h-4" src="/home.png" alt="Homepage" width={16} height={16} />
              <span>Homepage</span>
            </Link>
            <Link className="flex gap-2 items-center" href={"/"}>
              <Image className="w-4 h-4" src="/friends.png" alt="Friends" width={16} height={16} />
              <span>Friends</span>
            </Link>
            <Link className="flex gap-2 items-center" href={"/"}>
              <Image className="w-4 h-4" src="/stories.png" alt="Stories" width={16} height={16} />
              <span>Stories</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        {/* RIGHT */}
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
