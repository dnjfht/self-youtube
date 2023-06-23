import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Home() {
  const { keyword } = useParams();
  console.log(keyword);

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`${darkMode ? "bg-[#0f0f0f]" : "bg-[#ffc2c29c]"}`}>
      <h2>{keyword ? `${keyword} Video List!` : "Trend Video List!"}</h2>
    </div>
  );
}
