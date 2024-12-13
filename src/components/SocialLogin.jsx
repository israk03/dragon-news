import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function SocialLogin() {
  return (
    <div>
      <h2 className="font-semibold mb-3">Log in with</h2>
      <div className="*:w-full space-y-3">
        <button className="btn">
          <FaGoogle></FaGoogle> Log in with Google
        </button>
        <button className="btn">
          <FaGithub></FaGithub> Log in with GitHub
        </button>
      </div>
    </div>
  );
}
