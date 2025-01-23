import React from "react";
import FriendsRequest from "../FriendsRequest/page";
import Birthdays from "../Birthdays/page";
import Ad from "../Ad/page";

const Page = ({ userId }: { userId?: String }) => {
  return (
    <div className="flex flex-col gap-6">
      <FriendsRequest />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
};

export default Page;
