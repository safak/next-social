import React from "react";
import Image from "next/image";
import Imoji from "@/assets/img/rb_2151345565.png";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";

const Comments = () => {
  return (
    <div>
      {/* write */}
      <div className="flex items-center gap-4 justify-between">
        <Image
          src="https://images.pexels.com/photos/29371349/pexels-photo-29371349/free-photo-of-fashionable-man-in-orange-shirt-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 object-cover rounded-full"
        />
        <div className="flex-1 flex items-center justify-between bg-[#F7F7F7] rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="write a comment.."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src={Imoji}
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 object-cover cursor-pointer self-end"
          />
        </div>
      </div>
      {/* comments */}
      <div>
        {/* comments */}
        <div className="flex gap-4 justify-between mt-6">
          <Image
            src="https://images.pexels.com/photos/29371349/pexels-photo-29371349/free-photo-of-fashionable-man-in-orange-shirt-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 object-cover rounded-full"
          />
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Helen Ibuzor</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
              iure provident mollitia illum delectus, soluta voluptatum dolorum
              eum voluptas itaque enim! Quae labore qui quibusdam eius, deserunt
              ea. Quis, rerum!
            </p>
            <div className="flex gap-4 md:gap-8 text-xs text-gray-500">
              <div className="flex items-center gap-4 bg-[#F7F7F7] p-2 rounded-xl">
                <ThumbUpOutlinedIcon className="cursor-pointer" />
                <p className="text-gray-500">
                  245 <span className="hidden md:inline">Likes</span>
                </p>
              </div>
              <div className="bg-[#F7F7F7] p-2 rounded-xl cursor-pointer">
                Reply
              </div>
            </div>
          </div>
          <div className="cursor-pointer">
            <MoreHorizOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
