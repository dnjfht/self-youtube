import React from "react";

export default function VideoCard({ video }) {
  const { title } = video.snippet;

  return <li>{title}</li>;
}
