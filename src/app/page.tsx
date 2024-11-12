import LeftMenu from "./components/LeftMenu";
import RightMenu from "./components/RightMenu";
import Feed from "./components/Feed";
import AddPost from "./components/AddPost";
import Stories from "./components/Stories";
const Homepage = () => {
  return (
    <div className='flex gap-6 pt-6'>
      {/* Left components */}
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="home"></LeftMenu>
      </div>

      {/* Center components */}
      <div className="w-full lg:w-[70%] xl:-w[50%] ">
        <div className="flex flex-col gap-6 ">
          <Stories></Stories>
          <AddPost></AddPost>
          <Feed></Feed>
        </div>
      </div>
 
      {/* Right components */}
      <div className="hidden lg:block w-[30%]">
        <RightMenu></RightMenu>
      </div>
    </div>
  )
}

export default Homepage