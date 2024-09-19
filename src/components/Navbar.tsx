import Link from "next/link"
import MobileMenu from "./MobileMenu"

const Navbar = () => {
  return (
    <div className="h-24 flex justify-between items-center">
        {/* LEFT  */}
        <div className="">
            <Link href="/" className="font-bold text-lg text-blue-600">LAMASOCIAL</Link>
        </div>
        {/* CENTER  */}
        <div className="hidden"></div>
        {/* RIGHT  */}
        <div className="">
            <MobileMenu />
        </div>
    </div>
  )
}

export default Navbar