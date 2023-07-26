import Image from "next/image";
import React from "react";

const Story = ({ userName, img }) => {
  return (
    <div className="space-x-3">
      <Image
        className="cursor-pointer hover:border-solid transition-all duration-500 ease-in-ou hover:scale-110 rounded-full p-[3px] border-2 border-orange-600 border-dotted m-auto"
        src={img}
        alt={userName}
        width={60}
        height={60}
      />
      <p className="text-sm truncate w-16">{userName}</p>
    </div>
  );
};

export default Story;
