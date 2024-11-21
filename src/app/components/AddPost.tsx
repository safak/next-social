import Image from "next/image"

const AddPost = () => {
    return (
        <div className='p-4 bg-white rounded-lg flex gap-4 justify-between text-sm'>
            {/* Avatar */}
            <Image src="https://images.pexels.com/photos/71241/pexels-photo-71241.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="avatar" width={48} height={48} className="w-12 h-12 object-cover rounded-full">
            </Image>
            {/* post */}
            <div className="flex-1">
                {/* text input */}
                <div className="flex gap-4">
                    <textarea placeholder="What's on you mind?" className="bg-slate-100 flex-1 rounded-lg p-2"></textarea>
                    <Image src="/emoji.png"
                        alt="avatar" width={20} height={20} className="w-5 h-5 cursor-pointer self-end">
                    </Image>
                </div>

                {/* post option */}
                <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
                    {/* add image */}
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/addimage.png"
                            alt="addPhoto" width={20} height={20}>
                        </Image>
                        Photo
                    </div>
                    {/* add video */}
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/addVideo.png"
                            alt="addVideo" width={20} height={20}>
                        </Image>
                        Videos
                    </div>
                    {/* add poll */}
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/poll.png"
                            alt="poll" width={20} height={20}>
                        </Image>
                        Poll
                    </div>
                    {/* add event */}
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/addevent.png"
                            alt="addevent" width={20} height={20}>
                        </Image>
                        Event
                    </div>

                </div>
            </div>

        </div>
    )


}

export default AddPost