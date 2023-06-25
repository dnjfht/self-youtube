import React from "react";

export default function VideoCard({ video }) {
  const { title } = video.snippet;
  const { url } = video.snippet.thumbnails.medium;
  console.log(url);

  return (
    <li key={video.id}>
      <img src={url} alt="thumbnail" />
      <p>{title}</p>
    </li>
  );
}
