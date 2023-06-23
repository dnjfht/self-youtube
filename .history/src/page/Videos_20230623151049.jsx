import React from "react";
import { useParams } from "react-router-dom";

export default function Home() {
  const { keyword } = useParams();
  console.log(keyword);

  return (
    <div>
      <h2>{keyword} Video List!</h2>
    </div>
  );
}
