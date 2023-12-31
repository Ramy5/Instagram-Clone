import Image from "next/image";
import React from "react";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

const PostHeader = ({ username , userImg}) => {
  return (
    <header className="flex items-center space-x-3 p-4 md:px-6">
      <Image
        className="border p-1 rounded-full"
        src={userImg}
        alt={username}
        width={45}
        height={30}
      />
      <h3 className="font-bold flex-1">{username}</h3>
      <PiDotsThreeOutlineFill className="text-xl cursor-pointer transition-colors duration-200 hover:text-orange-600 text-gray-800" />
    </header>
  );
};

export default PostHeader;
