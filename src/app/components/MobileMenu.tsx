"use client"

import { useState } from "react";
import Link from 'next/link';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            {/* flex property sets the flexible length on flexible items. */}
            <div className="flex flex-col gap-1 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                {/* $ : if else */}
                <div className={`w-6 h-1 bg-red-500 rounded-sm ${isOpen ? "rotate-45" : ""} origin-left ease-in-out duration-500`} />
                <div className={`w-6 h-1 bg-red-500 rounded-sm ${isOpen ? "opacity-0" : ""} ease-in-out duration-500`} />
                <div className={`w-6 h-1 bg-red-500 rounded-sm ${isOpen ? "-rotate-45" : ""} origin-left ease-in-out duration-500`} />
            </div>
            {isOpen && (
                <div className='absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10'>
                    <Link href='/'>Home</Link>
                    <Link href='/'>Friends</Link>
                    <Link href='/'>Groups</Link>
                    <Link href='/'>Stories</Link>
                    <Link href='/'>Login</Link>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;