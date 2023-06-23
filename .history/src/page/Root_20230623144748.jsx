import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { DarkModeContext, DarkModeProvider } from "../context/DarkModeContext";

export default function Root() {
  const darkMode = useContext(DarkModeContext);
  return (
    <DarkModeProvider>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </DarkModeProvider>
  );
}
