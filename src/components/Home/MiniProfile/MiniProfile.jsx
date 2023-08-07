import Image from "next/image";
import React from "react";

const MiniProfile = () => {
  return (
    <div className="my-8 flex items-center justify-between flex-wrap">
      <Image
        className="p-1 bg-white rounded-full"
        src={
          "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png"
        }
        alt="Username"
        width={55}
        height={40}
      />

      <div className="flex-1 ml-4">
        <h3 className="font-bold">Username</h3>
        <p className="text-gray-400 font-semibold text-sm">
          Welcome to instagram
        </p>
      </div>

      <button
        className="cursor-pointer text-orange-600 hover:text-orange-700 transition-colors duration-300 font-semibold"
        type="button"
      >
        Sign out
      </button>
    </div>
  );
};

export default MiniProfile;
