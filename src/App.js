import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import PlaylistPage from "./pages/PlaylistPage";
import PlayingPage from "./pages/PlayingPage";
import HomePage from "./pages/HomePage";
import BottomNavigationComponent from "./components/BottomNavigation";
import { SongProvider } from "./context";

function App() {
  // Persiapkan nilai awalnya
  const initialState = {
    thumbnailSrc: "",
    songSrc: "",
    name: "",
    artistName: "",
    trackId: "",
  };
  return (
    // Kita gunakan context dengan value yang akan digunakan di komponen-komponen
    // Challenge: Setiap di-refresh, state kita akan kembali ke value. Bagaimana caranya kalau setiap refresh
    // value state kita masih tetap ada?
    // Clue: gunakan localStorage dari browser untuk simpan nilai state (tanpa Backend)
    <SongProvider initialSong={initialState}>
      {/* Kita gunakan Router agar setiap URL yang pengguna buka akan merender halaman yang diinginkan */}
      <Router>
        {/* Daftar rute (<Route />) yang kita gunakan taruh di <Switch /> */}
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
        {/* Komponen navigasi yang akan digunakan */}
        <BottomNavigationComponent />
      </Router>
    </SongProvider>
  );
}

export default App;
