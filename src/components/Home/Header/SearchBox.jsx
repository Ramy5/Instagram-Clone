import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchBox = () => {
  return (
    <form action="" className="relative w-3/4 sm:w-auto mx-4">
      <div className="h-6 w-6 absolute text-gray-500 top-2 ml-2">
        <MagnifyingGlassIcon />
      </div>
      <input
        placeholder="Search"
        type="search"
        name="search"
        className="focus:ring-orange-600 focus:border-orange-600 caret-orange-600 rounded pl-10 w-full sm:w-auto bg-gray-50 text-gray-700"
      />
    </form>
  );
};

export default SearchBox;
