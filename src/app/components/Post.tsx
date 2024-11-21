"use user"
import Image from "next/image"
import Comments from "./Comments"
const Post = () => {
    return (
        <div className='flex flex-col gap-4'>
            {/* USER */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="user" width={40} height={40} className="w-10 h-10 rounded-full"></Image>
                    <span className="font-medium">Feilin</span>
                </div>
                <Image src="/more.png"
                    alt="user" width={16} height={16} ></Image>
            </div>

            {/* DESC */}
            <div className="flex flex-col gap-4">
                <div className="w-full min-h-96 relative">
                    <Image src="https://images.pexels.com/photos/17266857/pexels-photo-17266857/free-photo-of-vase-with-flowers-and-cup-of-coffee.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt="user" fill className="object-cover rounded-md" ></Image>
                </div>
                <p>Coffee is a beverage brewed from roasted coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans, primarily due to its caffeine content</p>
            </div>
            {/* INTERACTION */}
            <div className="flex items-center justify-between text-sm my-4">
                {/* Likes */}
                <div className="flex gap-8">
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image src="/liked.png"
                            alt="liked" width={16} height={16} className="cursor-pointer" ></Image>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">500 <span className="hidden md:inline">Likes</span></span>
                    </div>
                </div>
                {/* Comment */}
                <div className="flex gap-8">
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image src="/comment.png"
                            alt="comment" width={16} height={16} className="cursor-pointer" ></Image>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">500 <span className="hidden md:inline">Comments</span></span>
                    </div>
                </div>
                <div className="">
                    <div className="flex gap-8">
                        <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                            <Image src="/share.png"
                                alt="share" width={16} height={16} className="cursor-pointer" ></Image>
                            <span className="text-gray-300">|</span>
                            <span className="text-gray-500">500 <span className="hidden md:inline">Shares</span></span>
                        </div>
                    </div>
                </div>
            </div>
            <Comments/>
        </div>
    )
}

export default Post