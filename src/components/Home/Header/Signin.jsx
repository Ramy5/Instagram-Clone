"use client";

import React from "react";
import { HomeIcon } from "@heroicons/react/24/solid";
import { MdPersonAdd } from "react-icons/md";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

const Signin = () => {
  const { data: session } = useSession();

  return (
    <div className="flex justify-between items-center sm:my-0 order-2 sm:order-3">
      <HomeIcon className="hidden md:inline-flex mx-4 h-6 cursor-pointer transition-all duration-300 ease-in-out hover:scale-125 hover:text-orange-600" />

      {!session?.user && (
        <>
          <MdPersonAdd className="h-6 w-6 mr-4 cursor-pointer transition-all duration-300 ease-in-out hover:scale-125 hover:text-orange-600" />
          <button
            onClick={() => signIn()}
            className="cursor-pointer text-orange-600 hover:text-orange-700 transition-colors duration-300 font-semibold"
            type="button"
          >
            Sign In
          </button>
        </>
      )}

      {session?.user && (
        <div className="">
          <Image
            onClick={() => signOut()}
            className="rounded-full cursor-pointer"
            src={
              session?.user
                ? session?.user?.image
                : "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png"
            }
            alt={session?.user ? session?.user?.name : "User"}
            width={45}
            height={30}
          />
        </div>
      )}
    </div>
  );
};

export default Signin;
