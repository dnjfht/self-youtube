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
        darkMode ? "bg-[#000000] text-white" : "bg-[#ffc2c29c] text-[#282828]"
      } w-full h-[100px]`}
    >
      <div className="w-10/12 h-[100%] py-[20px] box-border mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <BsYoutube className="text-[#e34141] text-[3rem]" />
          <ImYoutube2 className="text-[3.6rem] ml-2" />
        </div>

        <form
          className="w-6/12 h-[44px]"
          onSubmit={(e) => {
            e.preventDefault();
            navigate(`/videos/${text}`);
          }}
        >
          <input
            className="w-5/6 h-[100%] rounded-full outline-none bg-transparent border-[2px] border-solid border-white"
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
