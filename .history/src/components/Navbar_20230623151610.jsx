import React, { useContext, useState } from "react";
import {
  BsYoutube,
  BsSearchHeart,
  BsToggleOff,
  BsToggleOn,
} from "react-icons/bs";
import { ImYoutube2 } from "react-icons/im";
import { DarkModeContext } from "../context/DarkModeContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [text, setText] = useState("");
  console.log(text);

  const navigate = useNavigate();

  return (
    <div className={`${darkMode ? "bg-[#e5c2c2]" : "bg-white"}`}>
      <div>
        <BsYoutube />
        <ImYoutube2 />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate(`/videos/${text}`);
        }}
      >
        <input
          type="text"
          placeholder="검색"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button>
          <BsSearchHeart />
        </button>
      </form>

      <div>{darkMode ? <BsToggleOn /> : <BsToggleOff />}</div>
    </div>
  );
}
