import React from "react";

export default function VideoCard({ video }) {
  return (
    <li>
      <p>{video.snippet.title}</p>
    </li>
  );
}
