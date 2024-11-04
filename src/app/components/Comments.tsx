import Image from "next/image"
const Comments = () => {
    return (
        <div className="">
            {/* WRITE */}
            <div className="flex items-center gap-4">
                <Image src="https://images.pexels.com/photos/17266857/pexels-photo-17266857/free-photo-of-vase-with-flowers-and-cup-of-coffee.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt="user" width={32} height={32} className="w-8 h-8 rounded-full" ></Image>
                <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl test-sm px-6 py-2 w-full">
                    <input type="text" placeholder="Write a comment..." className="bg-transparent outline-none flex-1" />
                    <Image src="/emoji.png" alt="emoji" width={16} height={16} className="cursor-pointer"></Image>
                </div>
            </div>
            {/* COMMENTS */}
            <div className="">
                {/* COMMENT */}
                <div className="flex gap-4 justify-between mt-6">
                    {/* AVATAR */}
                    <Image src="https://images.pexels.com/photos/17266857/pexels-photo-17266857/free-photo-of-vase-with-flowers-and-cup-of-coffee.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt="user" width={40} height={40} className="w-10 h-10 rounded-full" ></Image>

                    {/* DESC */}
                    <div className="flex flex-col gap-2 flex-1">
                        <span className="font-medium">testuser</span>
                        <p>Coffee is a beverage brewed from roasted coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans, primarily due to its caffeine content and i love them so much</p>
                        <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                            <div className="flex items-center gap-4">
                                <Image src="/like.png" alt="more image" width={16} height={16} className="cursor-pointer w-4 h-4"></Image>
                                <span className="text-gray-300">|</span>
                                <span className="text-gray-500">123 Likes</span>
                            </div>
                            <div className="">Reply</div>
                        </div>
                    </div>
                    {/* ICON */}
                    <Image src="/more.png" alt="more image" width={16} height={16} className="cursor-pointer w-4 h-4"></Image>
                </div>
            </div>
        </div>
    )
}

export default Comments