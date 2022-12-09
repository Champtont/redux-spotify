import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./artist.css";
import "./home.css";
import "./album.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyFooter from "./components/MyFooter";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path={"/"} element={<HomePage />} />
        </Routes>
        <MyFooter />
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
