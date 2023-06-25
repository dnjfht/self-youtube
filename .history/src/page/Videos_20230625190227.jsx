import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DarkModeContext } from "../context/DarkModeContext";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
// import { search } from "../api/basic_youtube";
import FakeYoutube from "../api/fakeYoutube";
import Youtube2 from "../api/youtube2";

export default function Home() {
  const { keyword } = useParams();
  const { darkMode } = useContext(DarkModeContext);

  const {
    error,
    isLoading,
    data: videos,
  } = useQuery(["videos", keyword], () => {
    const youtube = new FakeYoutube();
    return youtube.search(keyword);
  });

  return (
    <div
      className={`${
        darkMode ? "bg-[#0f0f0f] text-white" : "bg-[#fff1f1] text-[#282828]"
      } mt-[100px]`}
    >
      <div className="w-10/12 mx-auto py-[40px]">
        {error && <p>Error has occurred...!</p>}
        {isLoading && <p>Loading....</p>}

        <h2 className="mb-10">
          {keyword ? `${keyword} Video List!` : "Trend Video List!"}
        </h2>

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
