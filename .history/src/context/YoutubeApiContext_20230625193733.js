import { createContext } from "react";
import Youtube from "../api/youtube";
import Youtube2 from "../api/youtube2";

export const YoutubeApiContext = createContext();

const youtube = new Youtube2();

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}
