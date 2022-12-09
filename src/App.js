import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FloatingUserBar from "./components/FloatingUserBar";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <FloatingUserBar />
        <Routes></Routes>
        <MyFooter />
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
