"use client";

import Image from "next/image";
import React from "react";
import { useSession } from "next-auth/react";

import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

const Post = ({ userImg, img, username, caption }) => {
  const { data: session } = useSession();

  return (
    <article className="bg-white my-12 rounded-sm border">
      {/* POST HEADER */}
      <PostHeader
        username={session?.user ? session?.user?.name : username}
        userImg={session?.user ? session?.user?.image : userImg}
      />

      {/* POST BODY OR CONTENT */}
      <Image
        className="object-cover bg-cover"
        src={img}
        alt="Post"
        width={1100}
        height={300}
      />

      {/* POST FOOTER */}
      <PostFooter
        username={session?.user ? session?.user?.name : username}
        caption={caption}
      />
    </article>
  );
};

export default Post;
