import React, { useContext, useState } from "react";
import {
  BsYoutube,
  BsSearchHeart,
  BsToggleOff,
  BsToggleOn,
  BsKeyboardFill,
} from "react-icons/bs";
import { ImYoutube2 } from "react-icons/im";
import { CiSearch } from "react-icons/ci";
import { GoX } from "react-icons/go";
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
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
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
              focusOn
                ? "w-[86%] pl-10 border-[#3d39b2]"
                : "w-5/6 pl-5 border-[#e8a0a0]"
            } h-[100%] py-5 pr-5 box-border rounded-l-full outline-none bg-transparent border-[1px] border-solid text-[#cd6f6f] text-[1.1rem] placeholder:text-[#e8a0a0]`}
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
          <div
            className={`${
              focusOn ? "opacity-100" : "opacity-0"
            } absolute top-[50%] mt-[-11px] left-3 text-[1.4rem] text-[#e8a0a0] transition-all duration-700`}
          >
            <CiSearch />
          </div>
          <div
            className={`${
              text.length > 0 && focusOn
                ? "right-[19%]"
                : text.length > 0 && focusOn === false
                ? "right-[22%]"
                : text.length <= 0 && focusOn
                ? "right-[16.2%]"
                : "right-[19.2%]"
            } absolute top-[50%] mt-[-11px] text-[1.4rem] text-[#e8a0a0]`}
          >
            <BsKeyboardFill />
          </div>
          <div
            onClick={() => {
              setText(null);
            }}
            className={`${
              text.length > 0 && focusOn
                ? "opacity-100 right-[15%]"
                : text.length > 0 && focusOn === false
                ? "opacity-100 right-[18%]"
                : "opacity-0"
            }
            } absolute top-[50%] mt-[-11px] text-[1.4rem] text-[#e8a0a0] transition-all duration-700`}
          >
            <GoX />
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
