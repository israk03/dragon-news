import React from "react";
import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center w-11/12 mx-auto">
      <div className=""></div>
      <div className="nav flex space-x-3 font-semibold">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div>
          <img src={userIcon} alt="" />
        </div>
        <div>
          <button className=" btn btn-neutral bg-gray-800 rounded-none">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
