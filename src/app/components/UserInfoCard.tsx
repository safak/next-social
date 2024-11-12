import Link from "next/link"
import Image from "next/image"

const UserInfoCard = ({ userId }: { userId?: string }) => {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
        {/* TOP */}
        <div className=" flex justify-between items-center font-medium">
            <span className="text-gray-500">User Info</span>
            <Link href="/" className="text-blue-500 text-xs">See all</Link>
        </div>
        {/* BOTTOM */}
        <div className="flex flex-col gap-4 text-gray-500">
            <div className="flex items-center gap-2">
                <span className="text-xl text-black">Lyod Flemming</span>
                <span className="text-sm">@jonathan</span>
            </div>
            <p>Integer finibus dolor felis, eu placerat sapien dictum sit amet. Vestibulum quis eros sed massa mollis feugiat. Integer pulvinar enim nec ultricies convallis.</p>

            <div className="flex items-center gap-2">
                <Image src="/map.png" alt="map image" width={16} height={16}></Image>
                <span>Living in <b>Denver</b></span>
            </div>

            <div className="flex items-center gap-2">
                <Image src="/school.png" alt="map image" width={16} height={16}></Image>
                <span>Went to <b>Sunny Highschool</b></span>
            </div>

            <div className="flex items-center gap-2">
                <Image src="/work.png" alt="map image" width={16} height={16}></Image>
                <span>Work at <b>Astra</b></span>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex gap-1 items-center">
                    <Image src="/link.png" alt="link image" height={16} width={16}></Image>
                    <Link href="/" className="text-blue-500 font-medium">ali.dev</Link>
                </div>
                <div className="flex gap-1 items-center">
                    <Image src="/date.png" alt="date image" height={16} width={16}></Image>
                    <span>Joined November 2024</span>
                </div>

            </div>
            <button className="bg-blue-500 text-white text-sm rounded-md p-2">Follow</button>
            <span className="text-red-400 self-end text-xs cursor-pointer">Block User</span>
        </div>
    </div>
    )
}

export default UserInfoCard