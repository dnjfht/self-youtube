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
    <div
      className={`${
        darkMode ? "bg-[#0f0f0f] text-white" : "bg-[#ffc2c29c] text-[#282828]"
      } w-full h-[100px]`}
    >
      <div className="w-10/12 py-[20px] border- mx-auto flex justify-between items-center">
        <div className="flex">
          <BsYoutube />
          <ImYoutube2 />
        </div>

        <form
          className="w-6/12 h-[100%]"
          onSubmit={(e) => {
            e.preventDefault();
            navigate(`/videos/${text}`);
          }}
        >
          <input
            className="w-5/6 h-[100%]"
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

        <button onClick={toggleDarkMode}>
          {darkMode ? <BsToggleOn /> : <BsToggleOff />}
        </button>
      </div>
    </div>
  );
}
