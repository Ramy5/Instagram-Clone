import Image from "next/image";
import React from "react";

const Post = ({ userImg, img, username, caption }) => {
  return (
    <article className="bg-white my-4">
      <header className="flex items-center space-x-4">
        <Image src={userImg} alt={username} width={45} height={30} />
        <h3 className="">{username}</h3>
      </header>

      <div>
        <Image src={img} alt="Post" width={1000} height={300} />
      </div>

      <footer>
        <p>{caption}</p>
      </footer>
    </article>
  );
};

export default Post;
