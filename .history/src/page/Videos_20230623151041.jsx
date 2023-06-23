import React from "react";
import { useParams } from "react-router-dom";

export default function Home() {
  const { keyword } = useParams();
  console.log(keyword);

  return (
    <div>
      Videos page
      <h2>{keyword} Videos</h2>
    </div>
  );
}
