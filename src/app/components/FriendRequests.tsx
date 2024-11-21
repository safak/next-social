import Link from "next/link"
import Image from "next/image"

const FriendRequests = () => {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
            {/* TOP */}
            <div className=" flex justify-between items-center font-medium">
                <span className="text-gray-500">Friend Requests</span>
                <Link href="/" className="text-blue-500 text-xs">See all</Link>
            </div>
            {/* USER */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/27427385/pexels-photo-27427385/free-photo-of-a-man-in-a-white-shirt-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="image" width={40} height={40} className="w-10 h-10 rounded-full object-cover"></Image>
                    <span className="font-semibold">Wayne Burton</span>
                </div>
                <div className="flex gap-3 justify-end">
                    <Image src="/accept.png" alt="accept" width={20} height={20} className="cursor-pointer"></Image>
                    <Image src="/reject.png" alt="reject" width={20} height={20} className="cursor-pointer"></Image>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/27427385/pexels-photo-27427385/free-photo-of-a-man-in-a-white-shirt-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="image" width={40} height={40} className="w-10 h-10 rounded-full object-cover"></Image>
                    <span className="font-semibold">Wayne Burton</span>
                </div>
                <div className="flex gap-3 justify-end">
                    <Image src="/accept.png" alt="accept" width={20} height={20} className="cursor-pointer"></Image>
                    <Image src="/reject.png" alt="reject" width={20} height={20} className="cursor-pointer"></Image>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/27427385/pexels-photo-27427385/free-photo-of-a-man-in-a-white-shirt-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="image" width={40} height={40} className="w-10 h-10 rounded-full object-cover"></Image>
                    <span className="font-semibold">Wayne Burton</span>
                </div>
                <div className="flex gap-3 justify-end">
                    <Image src="/accept.png" alt="accept" width={20} height={20} className="cursor-pointer"></Image>
                    <Image src="/reject.png" alt="reject" width={20} height={20} className="cursor-pointer"></Image>
                </div>
            </div>  
        </div>
    )
}

export default FriendRequests