import { createContext } from "react";
import Youtube from "../api/youtube";
import YoutubeClient from "../api/youtubeClient";
import FakeYoutubeClient from "../api/FakeYoutubeClient";
// import Youtube2 from "../api/youtube2";

export const YoutubeApiContext = createContext();

//const {youtube} = new Youtube2();
// const client = new YoutubeClient();
const client = new FakeYoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}
