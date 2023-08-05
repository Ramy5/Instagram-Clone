import Image from "next/image";
import React from "react";

import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

const Post = ({ userImg, img, username, caption }) => {
  return (
    <article className="bg-white my-12 rounded-sm border">
      {/* POST HEADER */}
      <PostHeader username={username} userImg={userImg} />

      {/* POST BODY OR CONTENT */}
      <Image
        className="object-cover bg-cover"
        src={img}
        alt="Post"
        width={1100}
        height={300}
      />

      {/* POST FOOTER */}
      <PostFooter username={username} caption={caption} />
    </article>
  );
};

export default Post;
