import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./album.css";
import "./home.css";
import "./artist.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyFooter from "./components/MyFooter";
import HomePage from "./components/HomePage";
import AlbumPage from "./components/AlbumPage";
import ArtistPage from "./components/ArtistPage";
import LikedPage from "./components/LikedPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/album/:albumID"} element={<AlbumPage />} />
          <Route path={"/artist/:artistID"} element={<ArtistPage />} />
          <Route path={"/Likedsongs"} element={<LikedPage />} />
        </Routes>
        <MyFooter />
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
