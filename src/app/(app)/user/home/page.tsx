import React from "react";
import LeftMenu from "@/components/LeftMenu/page";
import RightMenu from "@/components/RightMenu/page";
import UserStories from "@/components/CenterPage/UserStories";
import AddPost from "@/components/CenterPage/AddPost";
import Feeds from "@/components/CenterPage/Feeds";

const Page = () => {
  return (
    <div className="flex gap-6 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 pt-3">
      <div className="hidden xl:block w-[25%]">
        <LeftMenu />
      </div>
      <div className="w-full lg:w-[60%] xl:[50%]">
        <div className="flex flex-col gap-6">
          <UserStories />
          <AddPost />
          <Feeds />
        </div>
      </div>
      <div className="hidden lg:block w-[40%]">
        <RightMenu />
      </div>
    </div>
  );
};

export default Page;
