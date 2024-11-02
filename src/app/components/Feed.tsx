import Image from "next/image"
import Post from "./Post"

const Feed = () => {
  return (
    <div className='p-4 bg-white rounded-lg flex  flex-col  gap-12'>
      <Post></Post>
    </div>
  )
}

export default Feed 