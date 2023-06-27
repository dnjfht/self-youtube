import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { YoutubeApiContext } from "../context/YoutubeApiContext";

export default function ChannelInfo({ id, title }) {
  const { youtube } = useContext(YoutubeApiContext);
  const { data: url } = useQuery(
    ["channel", id],
    () => youtube.channelImgUrl(id),
    { staleTime: 1000 * 60 * 5 }
  );

  return (
    <div>
      {url && <img src={url} alt={title} />}
      <p>{title}</p>
    </div>
  );
}
