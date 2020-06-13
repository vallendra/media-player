import React from "react";
import styled from 'styled-components';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-contents: center;
  align-items: center;
`;

const Header = styled.h1`
  color: #DFE6E9;
  text-align: center;
`;
const Subtitle = styled.div`
  color: #DFE6E9;
`;

const HomePage = () => {
  return <HomePageWrapper>
    <MusicNoteIcon style={{ color: 'white', fontSize: '100px'}}/>
    <Header>
      Welcome to MyPlayer
    </Header>
    <Subtitle>
      Play your favorite song here.
    </Subtitle>
  </HomePageWrapper>;
};

export default HomePage;
