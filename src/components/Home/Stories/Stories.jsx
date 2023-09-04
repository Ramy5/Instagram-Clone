"use client";

import React, { useEffect, useState } from "react";
import { array, username } from "minifaker";
import "minifaker/locales/en";
import Story from "./Story";
import { useSession } from "next-auth/react";
import { BiPlus } from "react-icons/bi";

const Stories = () => {
  const [stories, setStories] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const stories = array(20, (i) => ({
      userName: username({ locale: "en" }),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    }));
    setStories(stories);
  }, []);

  return (
    <div className="flex items-center overflow-x-scroll scrollbar-none border border-gray-200 rounded-sm bg-white px-4 py-6">
      {session && (
        <div className="relative group">
          <Story
            className="text-center font-semibold pr-2"
            userName="You"
            img={session?.user?.image}
          />
          <BiPlus className="group-hover:cursor-pointer group-hover:opacity-100 group-hover:border-solid transition-all duration-500 ease-in-ou group-hover:scale-110 absolute top-0 left-4 inline-block w-12 h-16 text-white opacity-80" />
        </div>
      )}
      {stories.map((story) => (
        <Story className="" key={story.id} {...story} />
      ))}
    </div>
  );
};

export default Stories;
