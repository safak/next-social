const Homepage = () => {
  return (
    <div className='flex gap-6'>
      {/* Left components */}
      <div className="hidden xl:block w-[20%]"></div>

      {/* Center components */}
      <div className="w-full lg:w-[70%] xl:-w[50%]"></div>
 
      {/* Right components */}
      <div className="hidden lg:block w-[30%]"></div>
    </div>
  )
}

export default Homepage