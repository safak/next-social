import Link from "next/link"
import Image from "next/image"

const UserMediaCard = ({ userId }: { userId?: string }) => {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
            {/* TOP */}
            <div className=" flex justify-between items-center font-medium">
                <span className="text-gray-500">User Media</span>
                <Link href="/" className="text-blue-500 text-xs">See all</Link>
            </div>
            {/* BOTTOM */}
            <div className="flex gap-4 justify-between flex-wrap">
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/27427385/pexels-photo-27427385/free-photo-of-a-man-in-a-white-shirt-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="image" fill className="object-cover rounded-md"></Image>
                </div>

                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/27427385/pexels-photo-27427385/free-photo-of-a-man-in-a-white-shirt-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="image" fill className="object-cover rounded-md"></Image>
                </div>

                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/27427385/pexels-photo-27427385/free-photo-of-a-man-in-a-white-shirt-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="image" fill className="object-cover rounded-md"></Image>
                </div>

                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/27427385/pexels-photo-27427385/free-photo-of-a-man-in-a-white-shirt-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="image" fill className="object-cover rounded-md"></Image>
                </div>

                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/27427385/pexels-photo-27427385/free-photo-of-a-man-in-a-white-shirt-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="image" fill className="object-cover rounded-md"></Image>
                </div>

                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/27427385/pexels-photo-27427385/free-photo-of-a-man-in-a-white-shirt-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="image" fill className="object-cover rounded-md"></Image>
                </div>

                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/27427385/pexels-photo-27427385/free-photo-of-a-man-in-a-white-shirt-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="image" fill className="object-cover rounded-md"></Image>
                </div>

                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/27427385/pexels-photo-27427385/free-photo-of-a-man-in-a-white-shirt-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="image" fill className="object-cover rounded-md"></Image>
                </div>
            </div>
        </div>
    )
}

export default UserMediaCard