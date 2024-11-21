import FriendRequests from "./FriendRequests"
import Birthdays from "./Birthdays"
import Ad from "./Ad"
import UserInfoCard from "./UserInfoCard"
import UserMediaCard from "./UserMediaCard"
const RightMenu = ({userId}: {userId?:string}) => {
  return (
    <div className='flex flex-col gap-6'>
      {userId ? (<>
      <UserInfoCard userId ={userId}></UserInfoCard>
      <UserMediaCard userId ={userId}></UserMediaCard>
      </>) : null}
      <FriendRequests></FriendRequests>
      <Birthdays></Birthdays>
      <Ad size="md"></Ad>
    </div>
  )
}

export default RightMenu