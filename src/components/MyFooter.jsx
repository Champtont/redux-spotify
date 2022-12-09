import { useSelector } from "react-redux";

const MyFooter = () => {
  return (
    <footer id="bottom" className="m-0 justify-content-between">
      <div className="row flex-nowrap  playBar py-3">
        <div className="col-3">
          <div className="playerArtistInfo d-flex" style="height:50px;">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/4/4d/Another_one_bites_the_dust.jpg"
              id="smalbumpic"
              alt="some pic"
            />
            <div id="artistfooter" className="d-flex flex-column pl-2 ">
              <h6 className="music-player-info">Another One Bites The Dust</h6>
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
            <p className="ml-1"></p>
            <audio id="audio"></audio>
          </div>
        </div>
        <div className="col-6">
          <div className="playerControls w-50 d-flex justify-content-between">
            <a href="#">
              <img src="playerbuttons/Shuffle.png" alt="shuffle" />
            </a>
            <a href="#">
              <img src="playerbuttons/Previous.png" alt="previous" />
            </a>
            <a id="miniplay">
              <img src="playerbuttons/Play.png" alt="play" />
            </a>
            <a id="minipause">
              <img src="playerbuttons/Pause.png" alt="" />
            </a>
            <a href="#">
              <img src="playerbuttons/Next.png" alt="next" />
            </a>
            <a href="#">
              <img src="playerbuttons/Repeat.png" alt="repeat" />
            </a>
          </div>
          <div className="progressContainer d-flex align-items-center">
            <span className="currentTime">00:00</span>
            <div className="progress w-100">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="20"
              >
                <audio></audio>
              </div>
            </div>
            <span className="duration">00:00</span>
          </div>
        </div>
        <div className="col-auto ml-5 ">
          <div className="playerVolume">
            <i className="fa fa-volume-up"></i>
            <input type="range" value="100" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
