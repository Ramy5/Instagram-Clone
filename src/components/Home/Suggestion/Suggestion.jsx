"use client";

import Suggest from "@/components/UI/Suggest";
import minifaker, { array, jobDescriptor, jobTitle, username } from "minifaker";
import React, { useEffect, useState } from "react";

const Suggestion = () => {
  const [suggestionsData, setSuggestionsData] = useState([]);

  useEffect(() => {
    const suggestion = array(5, (i) => ({
      name: username({ locale: "en" }),
      imgUrl: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      imgWidth: 50,
      imgHeight: 50,
      btnText: "Follow",
      titleDesc: jobTitle({ locale: "en" }),
      id: i,
    }));

    setSuggestionsData(suggestion);
  }, []);

  return (
    <>
      <div className="flex items-center justify-between mb-4 text-sm">
        <h4 className="text-gray-400 font-semibold">Suggestion for you</h4>
        <button className="cursor-pointer text-gray-600" type="button">
          See all
        </button>
      </div>

      {suggestionsData.map((suggestion) => {
        return (
          <Suggest
            className="my-1 text-sm"
            key={suggestion.id}
            {...suggestion}
          />
        );
      })}
    </>
  );
};

export default Suggestion;
