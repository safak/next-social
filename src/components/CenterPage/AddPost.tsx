import React from "react";
import Image from "next/image";
import Imoji from "@/assets/img/rb_2151345565.png";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
const AddPost = () => {
  return (
    <div className="p-4 bg-white rounded-lg flex gap-4 justify-between text-sm shadow-md">
      <div>
        <Image
          src="https://images.pexels.com/photos/27893231/pexels-photo-27893231/free-photo-of-a-woman-taking-a-picture-with-her-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width={48}
          height={48}
          className="w-12 h-12 object-cover rounded-full"
        />
      </div>
      <div className="flex-1">
        <div className="flex gap-4">
          <textarea
            name=""
            id=""
            placeholder="What's on your mind?"
            className="bg-[#F7F7F7] flex-1 p-2 rounded-lg"
          ></textarea>
          <Image
            src={Imoji}
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end"
          />
        </div>
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <AddPhotoAlternateOutlinedIcon className="text-blue-950" />
            <p className="hidden md:block">Photo</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <VideoCallOutlinedIcon className="text-blue-950" />
            <p className="hidden md:block">Video</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <CalendarMonthOutlinedIcon className="text-blue-950" />
            <p className="hidden md:block">Events</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <PollOutlinedIcon className="text-blue-950" />
            <p className="hidden md:block">Polls</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
