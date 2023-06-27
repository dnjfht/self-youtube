import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { YoutubeApiContext } from "../context/YoutubeApiContext";

export default function RelatedVideos({ id }) {
  const { youtube } = useContext(YoutubeApiContext);
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["related", id], () => youtube.relatedVideos(id), {
    staleTime: 1000 * 60 * 5,
    // 연관된 이미지가 빈번히 바뀌는 것이 아니기 때문
  });
  return <div></div>;
}
