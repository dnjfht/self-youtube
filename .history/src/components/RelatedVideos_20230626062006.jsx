import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function RelatedVideos({ id }) {
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["related", id], () => {});
  return <div></div>;
}
