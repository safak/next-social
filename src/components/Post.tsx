import Image from "next/image";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* User */}
      <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image 
          src="/monoGamesLogo.png" 
          width={40} 
          height={40} 
          alt="" 
          className="w-10 h-10 rounded-full"/>
        <span className="font-med">Steven Mcleod</span>
      </div>
      <Image 
          src="/more.png" 
          width={16} 
          height={16} 
          alt="" 
          />
      </div>
      {/* Description */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
        <Image 
          src="/monoGamesLogo.png" 
          fill 
          className="object-cover rounded-md"
          alt="" 
          />
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </p>
      </div>
      {/* Interaction */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
          <Image 
          src="/like.png" 
          width={16}
          height={16}
          alt="" 
          className="cursor-pointer"
          />
          <span className="text-grey-300"></span>
          <span className="text-grey-500">
            123<span className="hidden md:inline"> Likes</span>
          </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
          <Image 
          src="/comment.png" 
          width={16}
          height={16}
          alt="" 
          className="cursor-pointer"
          />
          <span className="text-grey-300"></span>
          <span className="text-grey-500">
            123<span className="hidden md:inline"> Comments</span>
          </span>
          </div>
        </div>
        <div className="">
        <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
          <Image 
          src="/share.png" 
          width={16}
          height={16}
          alt="" 
          className="cursor-pointer"
          />
          <span className="text-grey-300"></span>
          <span className="text-grey-500">
            123<span className="hidden md:inline"> Share</span>
          </span>
          </div>
        </div>
      </div>
      <Comments/>
    </div>
  )
};

export default Post;