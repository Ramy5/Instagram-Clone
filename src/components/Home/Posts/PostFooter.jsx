import React from "react";

import { BsChatDots, BsEmojiSmile } from "react-icons/bs";
import { FaRegBookmark, FaRegHeart } from "react-icons/fa";

const PostFooter = ({ username, caption }) => {
  return (
    <footer>
      <div className="flex items-center px-5 justify-between pt-5">
        <div className="flex items-center flex-1 space-x-4">
          <FaRegHeart className="posts__icon" />
          <BsChatDots className="posts__icon" />
        </div>
        <FaRegBookmark className="posts__icon" />
      </div>

      <p className="p-5 truncate">
        <span className="font-bold mr-2">{username}</span>
        {caption}
      </p>

      <form action="" className="flex items-center px-5 pb-5">
        <BsEmojiSmile className="posts__icon" />
        <input
          type="text"
          name="comment"
          placeholder="Enter your comment..."
          className="flex-1 border-none focus:ring-0 text-gray-800 ml-1"
        />
        <button
          type="submit"
          className=" text-orange-700 font-bold cursor-pointer"
        >
          Post
        </button>
      </form>
    </footer>
  );
};

export default PostFooter;
