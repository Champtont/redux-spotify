import { Link } from "react-router-dom";
import SpotifyLogo from "../logo/Spotify_Logo.png";
import HomeIcon from "../assets/171424_home_house_icon.png";
import LibraryIcon from "../assets/library.png";
import CreateIcon from "../assets/createicon.png";
import LikedIcon from "../assets/liked.jpeg";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getArtistAction } from "../redux/actions";

const MyNav = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(getArtistAction(value));
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-md navbar-white bg-navbar justify-content-between fixed-left"
        id="sidebar"
      >
        <div className="nav-container">
          <a className="navbar-brand" href="/home.html">
            <img src={SpotifyLogo} alt="Spotify_Logo" width="131" height="40" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="#navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul className="ul-font">
                <li>
                  <a className="nav-item nav-link" href="/home.html">
                    <img className="navbar-icons" src={HomeIcon} alt="icon" />{" "}
                    Home
                  </a>
                </li>
                <li>
                  <a className="nav-item nav-link" href="#">
                    <i className=""></i>
                    <img className="navbar-icons" src={LibraryIcon} /> Your
                    Library
                  </a>
                </li>
                <li>
                  <Link to={"/"} className="nav-item nav-link">
                    <img
                      className="navbar-icons"
                      src={CreateIcon}
                      alt="music icon"
                    />{" "}
                    Create Playlist
                  </Link>
                </li>
                <li>
                  <Link className="nav-item nav-link" to={"/"}>
                    <img
                      className="navbar-icons"
                      src={LikedIcon}
                      alt="music pic"
                    />{" "}
                    Liked Songs
                  </Link>
                </li>
                <li>
                  <Form onSubmit={handleSubmit}>
                    <Form.Control
                      type="search"
                      value={value}
                      onChange={handleChange}
                      placeholder="type and press Enter"
                    />
                  </Form>
                </li>
                <li className=" mt-1 install-app text-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-down-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                    />
                  </svg>{" "}
                  Install App
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MyNav;
