import Link from "next/link"
import Image from "next/image"

const Birthdays = () => {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
            {/* TOP */}
            <div className=" flex justify-between items-center font-medium">
                <span className="text-gray-500">Birthdays</span>
            </div>
            {/* USER */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/27427385/pexels-photo-27427385/free-photo-of-a-man-in-a-white-shirt-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="image" width={40} height={40} className="w-10 h-10 rounded-full object-cover"></Image>
                    <span className="font-semibold">Wayne Burton</span>
                </div>
                <div className="flex gap-3 justify-end">
                    <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md">Celebrate</button>
                </div>
            </div>
            {/* UPCOMING */}
            <div className="p-4 bg-slate-100 rounded-lg flex-items-center gap-4">
                <Image src="/gift.png" alt="gift image" width={24} height={24}></Image>
                <Link href="/" className="flex flex-col gap-1 text-xs">
                    <span className="text-gray-700 font-semibold">Upcoming Birtdays</span>
                    <span className="text-gray-500">See other 12 upcoming birtdays</span>
                </Link>
            </div>
        </div>
    )
}

export default Birthdays