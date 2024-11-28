import React from 'react'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
const Navbar = () => {
  return (
    <div className='h-24 flex items-center justify-between'>
      {/* Left */}
      <div className="md:hidden lg:block w-[20%] text-sm">
      <Link href='/'>SOCIAL APP</Link>
      </div>
      {/* Center */}
      <div className="hidden md:flex gap-6 text-gray-600 w-[50%]">
        <Link href='/' className='flex items-center gap-2'><img src="/home.png" alt="homepage" width={16} height={16} className='w-4 h-4' /> <span>Homepage</span></Link>
        <Link href='/' className='flex items-center gap-2'><img src="/friends.png" alt="homepage" width={16} height={16}className='w-4 h-4' /> <span>Friends</span></Link>
        <Link href='/' className='flex items-center gap-2'><img src="/stories.png" alt="homepage" width={16} height={16} className='w-4 h-4'/> <span>Stories</span></Link>
      </div>
      {/* Right */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <MobileMenu/>
      </div>
    </div>
  )
}

export default Navbar
