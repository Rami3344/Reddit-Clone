import React from "react";
import logo from "../logo.png";
import Search from "./Search";
export function NavBar({ val, handleSearch }) {
  return (
    <div className="nav-bar">
      <div className="logo">
        <img src={logo} alt="logo" /> <span>Reddit Bombastic</span>
      </div>
      <Search val={val} handleSearch={handleSearch} />
    </div>
  );
}
