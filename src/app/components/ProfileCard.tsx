import Image from "next/image"

const ProfileCard = () => {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6'>
            <div className="h-20 relative">
                <Image src="https://images.pexels.com/photos/27524853/pexels-photo-27524853/free-photo-of-the-moon-rises-over-the-mountains-in-the-distance.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className="rounded-md object-cover"></Image>
                <Image src="https://images.pexels.com/photos/28802129/pexels-photo-28802129/free-photo-of-tranquil-lake-scene-with-mountains-and-boats.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" height={48} width={48} className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"></Image>
            </div>
            <div className="h-20 flex flex-col gap-2 items-center ">
                <span className="font-semibold">Edward Gabriel May</span>
                <div className="flex items-center gap-4">
                    <div className="flex">
                        <Image src="https://images.pexels.com/photos/8230822/pexels-photo-8230822.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={12} height={12} className="rounded-full object-cover w-3 h-3"></Image>
                        <Image src="https://images.pexels.com/photos/8230822/pexels-photo-8230822.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={12} height={12} className="rounded-full object-cover w-3 h-3"></Image>
                        <Image src="https://images.pexels.com/photos/8230822/pexels-photo-8230822.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={12} height={12} className="rounded-full object-cover w-3 h-3"></Image>
                    </div>
                    <span className="text-xs text-gray-500">500 Followers</span>
                </div>
                <button className="bg-blue-500 text-white text-xs p-2 rounded-md">My Profile</button>
            </div>
        </div>
    )
}

export default ProfileCard