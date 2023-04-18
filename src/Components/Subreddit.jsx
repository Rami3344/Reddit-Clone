import React from "react";
export function Subreddit() {
  const data = [
    {
      img: "https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?w=2000",
      name: "Jacob Barber",
      id: "1",
    },
    {
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80",
      name: "Ariana Richard",
      id: "2",
    },
    {
      img: "https://www.worldphoto.org/sites/default/files/default-media/Piercy.jpg",
      name: "Robert Jackson",
      id: "3",
    },
  ];
  return (
    <div className="profiles">
      <h1>Subreddit</h1>
      <ul>
        {data.map((e) => (
          <li>
            <img src={e.img} alt="" />
            <span>{e.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
