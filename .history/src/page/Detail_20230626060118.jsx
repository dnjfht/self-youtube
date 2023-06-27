import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Detail() {
  const { darkMode } = useContext(DarkModeContext);

  const {
    state: { video },
  } = useLocation();

  return (
    <div
      className={`${
        darkMode ? "bg-[#0f0f0f] text-white" : "bg-[#fff1f1] text-[#282828]"
      } mt-[100px]`}
    >
      <div className="w-10/12 mx-auto py-[40px]">Detail page...!</div>
    </div>
  );
}
