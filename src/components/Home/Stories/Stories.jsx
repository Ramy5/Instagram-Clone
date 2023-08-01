"use client";

import React, { useEffect, useState } from "react";
import { array, username } from "minifaker";
import "minifaker/locales/en";
import Story from "./Story";

const Stories = () => {
  const [stories, setStories] = useState([]);

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
      {stories.map((story) => (
        <Story key={story.id} {...story} />
      ))}
    </div>
  );
};

export default Stories;
