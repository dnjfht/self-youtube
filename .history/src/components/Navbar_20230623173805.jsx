import React, { useContext, useState } from "react";
import {
  BsYoutube,
  BsSearchHeart,
  BsToggleOff,
  BsToggleOn,
} from "react-icons/bs";
import { ImYoutube2 } from "react-icons/im";
import { CiSearch } from "react-icons/ci";
import { DarkModeContext } from "../context/DarkModeContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [text, setText] = useState("");
  const [focusOn, setFocusOn] = useState(false);
  console.log(focusOn);

  const navigate = useNavigate();

  return (
    <div
      className={`${
        darkMode ? "bg-[#000000] text-white" : "bg-[#ffc2c246] text-[#282828]"
      } w-full h-[100px]`}
    >
      <div className="w-10/12 h-[100%] py-[20px] box-border mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <BsYoutube className="text-[#e34141] text-[3rem]" />
          <ImYoutube2 className="text-[3.6rem] ml-2" />
        </div>

        <form
          className="w-6/12 h-[44px] relative"
          onSubmit={(e) => {
            e.preventDefault();
            navigate(`/videos/${text}`);
          }}
        >
          <input
            className={`${
              focusOn ? "w-[86%] px-8" : "w-5/6 px-5"
            } h-[100%] py-5 box-border rounded-l-full outline-none bg-transparent border-[1px] border-solid border-[#e8a0a0]`}
            type="text"
            placeholder="검색"
            onChange={(e) => {
              setText(e.target.value);
            }}
            onFocus={() => {
              setFocusOn(true);
            }}
            onBlur={() => {
              setFocusOn(false);
            }}
          />
          <div className="absolute top-0 left-0 z-[999999]">
            {focusOn && <CiSearch />}
          </div>
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
