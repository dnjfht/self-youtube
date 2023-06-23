import React, { useContext } from "react";
import { BsYoutube } from "react-icons/bs";
import { ImYoutube2 } from "react-icons/im";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Navbar() {
  const { darkMode } = useContext(DarkModeContext);
  console.log(darkMode);

  return (
    <div>
      <div>
        <BsYoutube />
        <ImYoutube2 />
      </div>
    </div>
  );
}
