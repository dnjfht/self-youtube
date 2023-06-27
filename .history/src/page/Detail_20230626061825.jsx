import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { DarkModeContext } from "../context/DarkModeContext";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";

export default function Detail() {
  const { darkMode } = useContext(DarkModeContext);

  const {
    state: { video },
  } = useLocation();

  return (
    <div
      className={`${
        darkMode ? "bg-[#0f0f0f] text-white" : "bg-[#fff1f1] text-[#282828]"
      } mt-[100px]`}
    >
      <section className="w-10/12 mx-auto py-[40px]">
        <article>
          <iframe
            id="player"
            type="texy/html"
            width="100%"
            height="640px"
            src={`http://www.youtube.com/embed/${video.id}`}
            frameBorder="0"
            title={video.snippet.title}
          />
          <div>
            <h2>{video.snippet.title}</h2>
            <ChannelInfo
              id={video.snippet.channelId}
              title={video.snippet.channelTitle}
            />
          </div>
        </article>

        <section>
          <RelatedVideos id={video.id} />
        </section>
      </section>
    </div>
  );
}
