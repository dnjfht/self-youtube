import React, { useContext, useState } from "react";
import { BsYoutube, BsSearchHeart } from "react-icons/bs";
import { ImYoutube2 } from "react-icons/im";
import { DarkModeContext } from "../context/DarkModeContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [text, setText] = useState("");

  const navigate = useNavigate();

  return (
    <div className={`${darkMode ? "bg-[#0f0f0f]" : "bg-white"}`}>
      <div>
        <BsYoutube />
        <ImYoutube2 />
      </div>

      <form>
        <input
          type="text"
          placeholder="검색"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button onSubmit={(toggleDarkMode, navigate(`/videos/${text}`))}>
          <BsSearchHeart />
        </button>
      </form>
    </div>
  );
}
