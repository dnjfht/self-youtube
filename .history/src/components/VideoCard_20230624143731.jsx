import React from "react";

export default function VideoCard({ videos }) {
  return (
    <li>
      {videos &&
        videos.map((video) => {
          return (
            <>
              <p>{video.snippet.title}</p>
            </>
          );
        })}
    </li>
  );
}
