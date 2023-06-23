import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="bg-[#0f0f0f]">
      <Navbar />
      <Outlet />
    </div>
  );
}
