import React from "react";
import styled from "styled-components";
import { songContext } from "../../context";
import { getCurrentSongData } from "../../helper";
import MediaPlayer from "../../components/MediaPlayer";

const Text = styled.h1`
  color: white;
`;

const NoSongPlayed = () => {
  return <Text>No music played. Please choose music first at playlist!</Text>;
};

const PlayingPage = () => {
  const {currentSong, setCurrentSong} = React.useContext(songContext);

  React.useEffect(() => {
    async function fetchSongDetails() {
      const {
        thumbnailSrc,
        name,
        artistName,
        songSrc,
      } = await getCurrentSongData(currentSong.trackId);

      console.log(songSrc);
      setCurrentSong({
        ...currentSong,
        thumbnailSrc,
        name,
        artistName,
        songSrc,
      });
    }
    currentSong.trackId && fetchSongDetails();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {(currentSong.trackId === '') && <NoSongPlayed />}
      {(currentSong.trackId !== '') && (

      <>
      <Text>
      Current Playing...
    </Text>
        <MediaPlayer
          name={currentSong.name}
          thumbnailSrc={currentSong.thumbnailSrc}
          songSrc={currentSong.songSrc}
          artistName={currentSong.artistName}
        /></>
      )}
    </div>
  );
};

export default PlayingPage;
