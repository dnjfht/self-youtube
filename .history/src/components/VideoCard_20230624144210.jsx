import React from "react";

export default function VideoCard({ video }) {
  return (
    <ul>
      <li>{video.snippet.title}</li>
    </ul>
  );
}
