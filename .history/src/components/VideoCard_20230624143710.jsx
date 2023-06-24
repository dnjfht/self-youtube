import React from "react";

export default function VideoCard({ videos }) {
  return (
    <div>
      {videos &&
        videos.map((video) => {
          return (
            <li>
              <p>video.snippet.title</p>
            </li>
          );
        })}
    </div>
  );
}
