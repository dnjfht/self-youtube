import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Detail() {
  const { darkMode } = useContext(DarkModeContext);

  const {
    state: { video },
  } = useLocation();

  return <div className={darkMode ? "" : ""}>Detail page...!</div>;
}
