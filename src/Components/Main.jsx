import React, { useState } from "react";
import { NavBar } from "./NavBar.jsx";
import { Subreddit } from "./Subreddit.jsx";
import PostCardList from "./Post/PostCardList.jsx";
function Main() {
  const data = [
    {
      heading: "Winter Window with some pluis",
      url: "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg",
      id: 1,
      upDown: 452,
      user: "SigmaKarma",
      period: "5 hours ago",
      comments: 985,
    },
    {
      heading: "Amazing view with the blue color and a huge beautiful montains",
      url: "https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg",
      id: 2,
      upDown: 23,
      user: "Necromencer",
      period: "2 days",
      comments: 15,
    },
  ];

  const API_ROOT = "https://www.reddit.com";

  const getSubredditPosts = async (subreddit) => {
    const response = await fetch(`${API_ROOT}${subreddit}.json`);
    const json = await response.json();
    return json.data.children.map((post) => post.data);
  };
  console.log(getSubredditPosts);
  const [val, setVal] = useState("");
  function search(evt) {
    setVal(evt);
  }
  return (
    <div>
      <div className="nav">
        <NavBar handleSearch={(e) => search(e.target.value)} val={val} />
      </div>
      <div className="home">
        <Subreddit />
        <hr />
        <PostCardList
          data={data.filter((el) =>
            el.heading.toLowerCase().includes(val.toLowerCase())
          )}
        />
      </div>
    </div>
  );
}

export default Main;
