import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { DarkModeContext, DarkModeProvider } from "../context/DarkModeContext";

export default function Root() {
  const darkMode = useContext(DarkModeContext);

  return (
    <DarkModeProvider>
      <div className={`${darkMode ? "bg-[#0f0f0f]" : "bg-white"}`}>
        <Navbar />
        <Outlet />
      </div>
    </DarkModeProvider>
  );
}
