import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState } from "react";
import { BsVolumeUpFill } from "react-icons/bs";
import Nextbtn from "../playerbuttons/Next.png";
import Pausebtn from "../playerbuttons/Pause.png";
import Playbtn from "../playerbuttons/Play.png";
import Prevbtn from "../playerbuttons/Previous.png";
import Repeatbtn from "../playerbuttons/Repeat.png";
import Shufflebtn from "../playerbuttons/Shuffle.png";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const MyFooter = () => {
  const currentSelection = useSelector((state) => state.music.setPlaying);
  const favorites = useSelector((state) => state.music.favoriteMusic);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const miniPlayBtn = document.getElementById("miniplay");
    const miniPauseBtn = document.getElementById("minipause");
    if (isPlaying === false) {
      setIsPlaying(true);
      miniPauseBtn.classList.remove("hidden");
      miniPlayBtn.classList.add("hidden");
    } else if (isPlaying === true) {
      setIsPlaying(false);
      miniPauseBtn.classList.add("hidden");
      miniPlayBtn.classList.remove("hidden");
    }
  };

  return (
    <footer
      id="bottom"
      className="m-0 justify-content-between"
      style={{ zIndex: "3" }}
    >
      <Row>
        <Col lg={4}>
          <div
            className="playerArtistInfo d-flex justify-content-between ps-2"
            style={{ height: "50px" }}
          >
            {currentSelection.length === 0 ? (
              <>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/4/4d/Another_one_bites_the_dust.jpg"
                  id="smalbumpic"
                  alt="album cover"
                />
                <div id="artistfooter" className="d-flex flex-column pl-2 ">
                  <h6 className="music-player-info">
                    Another One Bites The Dust
                  </h6>
                  <p className="artist-small-player">Queen</p>
                </div>
                <p>
                  <svg
                    className="ml-3 mt-1 bi bi-heart"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                </p>
              </>
            ) : (
              <>
                <img
                  src={currentSelection[0].album.cover_small}
                  id="smalbumpic"
                  alt="tiny album cover"
                />
                <div id="artistfooter" className="d-flex flex-column pl-2 ">
                  <h6 className="music-player-info">
                    {currentSelection[0].album.title}
                  </h6>
                  <p className="artist-small-player">
                    {currentSelection[0].artist.name}
                  </p>
                </div>
                <p>
                  <svg
                    className="ml-3 mt-1 bi bi-heart"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                </p>
              </>
            )}
            <p className="ml-1"></p>
            <audio id="audio"></audio>
          </div>
        </Col>
        <Col lg={5} className="d-flex align-items-center">
          <div className="playerControls w-50 d-flex justify-content-between">
            <div>
              <img src={Shufflebtn} alt="shuffle" />
            </div>
            <div>
              <img src={Prevbtn} alt="previous" />
            </div>
            <div
              id="miniplay"
              onClick={(e) => {
                togglePlayPause();
              }}
            >
              <img src={Playbtn} alt="play" />
            </div>
            <div
              id="minipause"
              className="hidden"
              onClick={(e) => {
                togglePlayPause();
              }}
            >
              <img src={Pausebtn} alt="pause" />
            </div>
            <div>
              <img src={Nextbtn} alt="next" />
            </div>
            <div>
              <img src={Repeatbtn} alt="repeat" />
            </div>
          </div>
        </Col>
        <Col lg={3}>
          <div className="playerVolume">
            <BsVolumeUpFill />
            <input type="range" />
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default MyFooter;
