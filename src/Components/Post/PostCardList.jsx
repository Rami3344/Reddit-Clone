import React from "react";
import LikeDislike from "./LikeDislike";
import Comments from "./Comments";

function PostCardList({ data }) {
  return (
    <div className="post-card">
      <ul>
        {data.map((e) => (
          <li>
            <div>
              <h1>{e.heading}</h1>
            </div>
            <div className="section1">
              <LikeDislike upDown={e.upDown} />
              <img src={e.url} alt="" />
            </div>
            <div className="section2">
              <span className="user">{e.user}</span>
              <span>{e.period}</span>
              <Comments comments={e.comments} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostCardList;
/*

*/
