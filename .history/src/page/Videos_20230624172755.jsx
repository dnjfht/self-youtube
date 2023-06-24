import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DarkModeContext } from "../context/DarkModeContext";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";

export default function Home() {
  const { keyword } = useParams();
  const { darkMode } = useContext(DarkModeContext);

  const {
    error,
    isLoading,
    data: videos,
  } = useQuery(["videos", keyword], () => search(keyword));

  return (
    <div
      className={`${
        darkMode ? "bg-[#0f0f0f] text-white" : "bg-[#fff1f1] text-[#282828]"
      } mt-[100px]`}
    >
      <div className="w-10/12 mx-auto pt-[40px]">
        <h2>{keyword ? `${keyword} Video List!` : "Trend Video List!"}</h2>

        {videos && (
          <ul>
            {videos.map((video) => (
              <VideoCard video={video} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
