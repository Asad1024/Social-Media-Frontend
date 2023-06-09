import React from "react";
import Post from "../Post/Post";
import Share from "../Share/Share";
import { Posts } from "../../dummyData";
import "./feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedContainer">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
