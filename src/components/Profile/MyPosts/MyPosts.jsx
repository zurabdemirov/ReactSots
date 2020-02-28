import React from "react";
import clases from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = props => {
  return (
    <div>
      Mu posts
      <div>New posts</div>
      <div className={clases.posts}>
        <Post message="Hi, how are you?" like="15" />
        <Post message="it's my first post" like="20" />
      </div>
    </div>
  );
};

export default MyPosts;
