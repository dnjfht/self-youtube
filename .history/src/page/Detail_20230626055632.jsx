import React from "react";
import { useLocation } from "react-router-dom";

export default function Detail() {
  const y = useLocation();
  console.log(y);

  return <div>Detail page...!</div>;
}
