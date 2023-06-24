import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DarkModeContext } from "../context/DarkModeContext";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { keyword } = useParams();
  console.log(keyword);

  const { darkMode } = useContext(DarkModeContext);

  const {
    error,
    isLoading,
    data: videos,
  } = useQuery(["videos", keyword], async () => {
    return axios //
      .get(`videos/${keyword ? "keyword" : "mostPopular"}.json`) //
      .then((res) => res.data.items);
  });

  return (
    <div
      className={`${
        darkMode ? "bg-[#0f0f0f] text-white" : "bg-[#fff1f1] text-[#282828]"
      } h-[100vh] mt-[100px]`}
    >
      <div className="w-10/12 mx-auto pt-[40px]">
        <h2>{keyword ? `${keyword} Video List!` : "Trend Video List!"}</h2>
      </div>
    </div>
  );
}
