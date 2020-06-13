import React, {useState, createContext } from "react";

export const songContext = createContext({
  currentSong:  {
    thumbnailSrc: "",
    songSrc: "",
    name: "",
    artistName: "",
    trackId: ""
  },
  setCurrentSong: () => undefined,
});

export const SongProvider = ({ children, initialSong }) => {
  const [currentSong, setCurrentSong] = useState(initialSong);
  return (
    <songContext.Provider
      value={{
        currentSong,
        setCurrentSong,
      }}
    >
      {children}
    </songContext.Provider>
  );
};
