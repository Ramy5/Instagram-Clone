"use client";

import Image from "next/image";
import React from "react";
import { signOut, useSession } from "next-auth/react";

const MiniProfile = () => {
  const values = {
    className: "my-8",
    imgUrl:
      "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png",
    name: "Username",
    imgWidth: 55,
    imgHeight: 40,
    titleDesc: "Welcome to instagram",
  };

  const { data: session } = useSession();

  return (
    <div
      className={`${values.className} flex items-center justify-between flex-wrap`}
    >
      <Image
        className="p-1 bg-white rounded-full"
        src={session?.user ? session?.user?.image : values.imgUrl}
        alt={session?.user ? session?.user?.name : values.name}
        width={values.imgWidth}
        height={values.imgHeight}
      />

      <div className="flex-1 ml-4">
        <h3 className="font-bold text-gray-800">
          {session?.user ? session?.user?.name : values.name}
        </h3>
        <p className="text-gray-400 font-semibold text-sm truncate  w-[200px]">
          {values.titleDesc}
        </p>
      </div>

      {session?.user && (
        <button
          onClick={() => signOut()}
          className="cursor-pointer text-orange-600 hover:text-orange-700 transition-colors duration-300 font-semibold"
          type="button"
        >
          Sign Out
        </button>
      )}
    </div>
  );
};

export default MiniProfile;
