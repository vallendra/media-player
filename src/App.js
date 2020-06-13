import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import PlaylistPage from "./pages/PlaylistPage";
import PlayingPage from "./pages/PlayingPage";
import HomePage from "./pages/HomePage";
import BottomNavigationComponent from "./components/BottomNavigation";
import { SongProvider } from "./context";

function App() {
  const initialState = {
    thumbnailSrc: "",
    songSrc: "",
    name: "",
    artistName: "",
    trackId: "",
  };
  return (
    <SongProvider initialSong={initialState}>
      <Router>
        <Switch>
          <Route path="/playing">
            <PlayingPage />
          </Route>
          <Route path="/playlist">
            <PlaylistPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <BottomNavigationComponent />
      </Router>
    </SongProvider>
  );
}

export default App;
