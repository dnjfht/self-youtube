import React from "react";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video }) {
  const { title } = video.snippet;
  const { url } = video.snippet.thumbnails.medium;

  const navigate = useNavigate();

  return (
    <li
      key={video.id}
      onClick={() => {
        navigate(`/videos/watch/${video.id}`), { state: { video } };
      }}
    >
      <img src={url} alt="thumbnail" />
      <p>{title}</p>
    </li>
  );
}
