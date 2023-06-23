import React, { useContext } from "react";
import { BsYoutube, BsSearchHeart } from "react-icons/bs";
import { ImYoutube2 } from "react-icons/im";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  console.log(darkMode);

  return (
    <div className={`${darkMode ? "bg-[#0f0f0f]" : "bg-white"}`}>
      <div>
        <BsYoutube />
        <ImYoutube2 />
      </div>

      <form>
        <input type="text" placeholder="검색" />
        <button onSubmit={toggleDarkMode}>
          <BsSearchHeart />
        </button>
      </form>
    </div>
  );
}
