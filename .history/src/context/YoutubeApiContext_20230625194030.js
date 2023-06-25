import { createContext } from "react";
import Youtube from "../api/youtube";
import YoutubeCLient from "../api/youtubeClient";
// import Youtube2 from "../api/youtube2";

export const YoutubeApiContext = createContext();

//const {youtube} = new Youtube2();
const client = new YoutubeCLient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}
