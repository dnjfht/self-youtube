import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { DarkModeProvider } from "../context/DarkModeContext";

export default function Root() {
  return (
    <DarkModeProvider>
      <div className="w-full h-[100vh] bg-black">
        <Navbar />
        <Outlet />
      </div>
    </DarkModeProvider>
  );
}
