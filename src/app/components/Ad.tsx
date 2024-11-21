import Link from "next/link"
import Image from "next/image"

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm'>
      {/* TOP */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Ads</span>
        <Image src="/more.png" alt="more image" width={16} height={16}></Image>
      </div>
      {/* BOTTOM */}
      <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
        <div className={`relative w-full ${size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"}`}>
          <Image src="https://images.pexels.com/photos/12815080/pexels-photo-12815080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="ads image" fill className="rounded-lg object-cover"></Image>
        </div>
        <div className="flex items-center gap-4">
          <Image src="https://images.pexels.com/photos/12815080/pexels-photo-12815080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="ads profile" width={24} height={24} className="rounded-full w-6 h-6 object-cover"></Image>
          <span className="text-blue-500 font-medium">Big Chef's Lounge</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-xs"}>
          {size === "sm" ? "Integer finibus dolor felis, eu placerat sapien dictum sit amet." : size === "md" ? "Integer finibus dolor felis, eu placerat sapien dictum sit amet. Vestibulum quis eros sed massa mollis feugiat. Integer pulvinar enim nec ultricies convallis." : "Integer finibus dolor felis, eu placerat sapien dictum sit amet. Vestibulum quis eros sed massa mollis feugiat. Integer pulvinar enim nec ultricies convallis."}
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">Learn More</button>
      </div>
    </div>
  )
}
  export default Ad