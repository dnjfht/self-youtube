import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Home() {
  const { keyword } = useParams();
  console.log(keyword);

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`${
        darkMode ? "bg-[#0f0f0f] text-white" : "bg-[#ffc2c246] text-[#282828]"
      } h-[100vh]`}
    >
      <div className="w-10/12 mx-auto pt-[40px]">
        <h2>{keyword ? `${keyword} Video List!` : "Trend Video List!"}</h2>
      </div>
    </div>
  );
}
