import Image from "next/image"
const Stories = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs'>
        <div className="flex gap-8 w-max">
            {/* Stories */}
            <div className="flex flex-col items-center gap-2  cursor-pointer ">
                <Image src="https://images.pexels.com/photos/24460824/pexels-photo-24460824/free-photo-of-esb-among-lower-skyscrapers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="profile" width={80} height={80} className="w-20 h-20 rounded-full ring-2"></Image>
                <span className="font-medium">Feilin</span>
            </div>
        </div>
    </div>
  )
}

export default Stories