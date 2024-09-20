import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";

const ProfilePage = () => {
  return (
    <div className="flex gap-6 pt-6">
    <div className="hidden md:block w-[20%]">
      <LeftMenu />
    </div>
    <div className="w-full lg:w-[70%] xl:w-[50%]">
      <div className="flex flex-col gap-6">
        <Feed />
      </div>
    </div>
    <div className="hidden lg:block w-[30%]">
      <RightMenu userId="test"/>
    </div>
  </div>
  )
};

export default ProfilePage;