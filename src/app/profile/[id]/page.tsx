import LeftMenu from "../../components/LeftMenu";
import RightMenu from "../../components/RightMenu";
import Feed from "../../components/Feed";
import Image from "next/image"

const ProfilePage = () => {
  return (
    <div className='flex gap-6 pt-6'>
      {/* Left components */}
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile"></LeftMenu>
      </div>

      {/* Center components */}
      <div className="w-full lg:w-[70%] xl:-w[50%] ">
        <div className="flex flex-col gap-6 ">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image src="https://images.pexels.com/photos/28184441/pexels-photo-28184441/free-photo-of-a-beach-with-a-mountain-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className="rounded-md object-cover"></Image>
              <Image src="https://images.pexels.com/photos/4624904/pexels-photo-4624904.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={128} height={128} className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white object-cover"></Image>
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">Justinian</h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">123</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">2k</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">1k</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          <Feed></Feed>
        </div>
      </div>

      {/* Right components */}
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="test"></RightMenu>
      </div>
    </div>
  )
}

export default ProfilePage