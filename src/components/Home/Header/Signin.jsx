import React from "react";
import { HomeIcon } from "@heroicons/react/24/solid";
import { MdPersonAdd } from "react-icons/md";
import Image from "next/image";

const Signin = () => {
  return (
    <div className="flex justify-between items-center mb-6 sm:my-0">
      <HomeIcon className="hidden md:inline-flex mx-4 h-6 cursor-pointer transition-all duration-300 ease-in-out hover:scale-125 hover:text-orange-600" />
      <MdPersonAdd className="h-6 w-6 mr-4 cursor-pointer transition-all duration-300 ease-in-out hover:scale-125 hover:text-orange-600" />

      <div className="">
        <Image
          className="h-12 rounded-full cursor-pointer"
          src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png"
          alt="User"
          width={45}
          height={30}
        />
      </div>
    </div>
  );
};

export default Signin;
