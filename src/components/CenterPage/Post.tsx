import React from "react";
import Image from "next/image";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Comments from "./Comments";
const Post = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-4">
      {/* user */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/30151342/pexels-photo-30151342/free-photo-of-romantic-couple-embracing-on-a-sandy-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 object-cover rounded-full"
          />
          <span className="font-medium">Jack Mark</span>
        </div>
        <div className="cursor-pointer">
          <MoreHorizOutlinedIcon />
        </div>
      </div>
      {/* description */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/30105701/pexels-photo-30105701/free-photo-of-winter-evening-at-james-simon-galerie-berlin.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, a
          expedita magni reiciendis, quam facere excepturi pariatur ratione,
          aperiam id error tempora accusamus tenetur!
        </p>
      </div>
      {/* interaction */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-4 md:gap-8">
          <div className="flex items-center gap-4 bg-[#F7F7F7] p-2 rounded-xl">
            <ThumbUpOutlinedIcon className="cursor-pointer" />
            <p className="text-gray-500">
              245 <span className="hidden md:inline">Likes</span>
            </p>
          </div>
          <div className="flex items-center gap-4 bg-[#F7F7F7] p-2 rounded-xl">
            <ChatBubbleOutlineOutlinedIcon className="cursor-pointer" />
            <p className="text-gray-500">
              245 <span className="hidden md:inline">Comments</span>
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4 bg-[#F7F7F7] p-2 rounded-xl">
            <ShareOutlinedIcon className="cursor-pointer" />
            <p className="text-gray-500">
              245 <span className="hidden md:inline">Shares</span>
            </p>
          </div>
        </div>
      </div>
      <Comments/>
    </div>
  );
};

export default Post;
