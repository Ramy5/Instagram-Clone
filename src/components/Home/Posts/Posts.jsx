import React from "react";
import Post from "./Post";

const Posts = () => {
  const posts = [
    {
      userImg:
        "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png",
      img: "https://images.unsplash.com/photo-1682687981807-35e55307a7bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      username: "Ramy",
      id: crypto.randomUUID(),
      caption: "Nice post",
    },
    {
      userImg:
        "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png",
      img: "https://plus.unsplash.com/premium_photo-1668407671498-6dc802bea175?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
      username: "Sabry",
      id: crypto.randomUUID(),
      caption: "Muy bueno",
    },
  ];

  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </>
  );
};

export default Posts;
