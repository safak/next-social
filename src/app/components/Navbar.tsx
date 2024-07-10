
import MobileMenu from "./MobileMenu"
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='h-24 flex items-center justify-between'>
            {/* LEFT */}
            <div className="">
                <Link className='font-bold text-xl text-red-600' href="/">SO-SOCIAL</Link>
            </div>

            {/* CENTER */}
            <div className="hidden"></div>

            {/* RIGHT */}
            <div className="">
                <MobileMenu />
            </div>
        </div>
    )
}

export default Navbar