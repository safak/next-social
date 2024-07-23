import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <div className=" h-24 flex items-center justify-between">
      <div className="">
        {/* LEFT */}
        <Link href={"/"} className="font-bold text-xl text-blue-600">
          LAMASOCIAL
        </Link>
      </div>
      <div className="hidden">{/* CENTER */}</div>
      <div className="">
        {/* RIGHT */}
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
