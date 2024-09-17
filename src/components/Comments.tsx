import Image from "next/image";

const Comments = () => {
  return (
    <div className="">
      {/* Write */}
      <div className="flex items-center gap-4">
        <Image src="https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" width={32} height={32} className="w-8 h-8 rounded-full"/>
      </div>
      <div className="">
        <input type="text" placeholder="Write a comment ..." className="bg-transparent outline-none" />
      </div>
      {/* Write */}
      <div className="">
        
      </div>
    </div>
  )
};

export default Comments;