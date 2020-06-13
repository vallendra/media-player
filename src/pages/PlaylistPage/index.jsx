import React from "react";
import { getTopTracks } from "../../helper";
import styled from "styled-components";
import TrackCard from "../../components/TrackCard";

const Text = styled.h1`
  color: white;
`;

const Subtitle = styled.div`
  font-weight: 700;
  color: white;
`;

const TrackList = ({ tracks }) => {
  return tracks.map((track, index) => (
    <TrackCard
      name={track.name}
      trackId={track.trackId}
      thumbnailSrc={track.thumbnailSrc}
      artistName={track.artistName}
      songSrc={track.songSrc}
      key={index}
    />
  ));
};

const Loader = () => {
  return <Subtitle>Loading.. Please wait..</Subtitle>;
};

const PlaylistPage = () => {
  const [tracks, setTracks] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    async function fetchTopTracks() {
      const result = await getTopTracks();
      setTracks(result);
    }
    fetchTopTracks();
    setIsLoading(false);
  }, []);
  return (
    <div>
      <Text>Playlist Page</Text>
      {isLoading ? <Loader /> : <TrackList tracks={tracks} />}
    </div>
  );
};

export default PlaylistPage;
