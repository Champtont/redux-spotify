import { useEffect, useState } from "react";
import { ListGroup, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import FloatingUserBar from "./FloatingUserBar";
import MyNav from "./MyNav";
import {
  getSingleArtistAction,
  getSingleArtistTopAction,
} from "../redux/actions";
import SingleSong from "./SingleSong";

/*add popmusic[0].data later... data does not exist until later on */

const ArtistPage = () => {
  const params = useParams();
  const artistID = params.artistID;
  const dispatch = useDispatch();
  const artistInfo = useSelector((state) => state.music.singleArtist);
  const topSongs = useSelector((state) => state.music.popularMusic);
  const favorites = useSelector((state) => state.music.favoriteMusic);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const playBtn = document.getElementById("play");
    const pauseBtn = document.getElementById("pause");
    if (isPlaying === false) {
      setIsPlaying(true);
      pauseBtn.classList.remove("hidden");
      playBtn.classList.add("hidden");
    } else if (isPlaying === true) {
      setIsPlaying(false);
      pauseBtn.classList.add("hidden");
      playBtn.classList.remove("hidden");
    }
  };

  useEffect(() => {
    dispatch(getSingleArtistAction(artistID));
    dispatch(getSingleArtistTopAction(artistID));
  }, []);

  console.log(params.artistID);

  return (
    <>
      <Row>
        <MyNav />
        <div>
          <FloatingUserBar />
          {artistInfo.length === 0 && <div></div>}
          {artistInfo.length > 0 && (
            <div
              id="mainRight"
              className="col-sm-12 p-0 fluid"
              style={{
                marginLeft: "15.5%",
              }}
            >
              <div
                id="mainPanel"
                className="jumbotron jumbotron-fluid p-0 m-0"
                style={{ backgroundImage: `url(${artistInfo[0].picture_xl})` }}
              >
                <div className="container ms-0 p-0">
                  {
                    <div id="artistsinfo" className="px-4">
                      <div
                        className="d-flex align-items-center"
                        style={{ gap: "15px" }}
                      >
                        <div
                          id="check-mark"
                          style={{
                            width: "10px",
                            height: "10px",
                            backgroundColor: "white",
                            position: "relative",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="blue"
                            className="bi bi-patch-check-fill"
                            viewBox="0 0 16 16"
                            style={{
                              position: "absolute",
                              top: "-6",
                              left: "-6",
                            }}
                          >
                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                          </svg>
                        </div>
                        <p className="m-0">Verified Artist</p>
                      </div>
                      <h1 className="text-start">{artistInfo[0].name}</h1>
                      <p className="lead m-0 text-start">
                        {artistInfo[0].nb_fan.toLocaleString()} monthly
                        listeners
                      </p>
                    </div>
                  }
                </div>
              </div>
            </div>
          )}
        </div>
      </Row>
      <Row>
        <div id="mainContent">
          <div
            id="playpause"
            className="d-flex align-items-center px-4 pb-0 pt-4"
            style={{ marginLeft: "15.5%" }}
          >
            <div
              id="pause"
              className="hidden mr-3"
              style={{
                width: "50px",
                height: "50px",
                fontWeight: "900",
                fontSize: "20pt",
              }}
              onClick={() => {
                togglePlayPause();
              }}
            >
              ||
            </div>
            <div
              id="play"
              className="rounded-circle mr-3"
              style={{ width: "50px", height: "50px", position: "relative" }}
              onClick={() => {
                togglePlayPause();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="black"
                className="bi bi-play-fill"
                viewBox="0 0 16 16"
                style={{ position: "absolute", top: "6px", left: "6px" }}
              >
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
              </svg>
            </div>
            <div id="follow" className="mr-3">
              <button
                id="followbtn"
                className="rounded py-1"
                style={{ fontWeight: "bold" }}
              >
                FOLLOW
              </button>
            </div>
            <div id="ellip">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-three-dots"
                viewBox="0 0 16 16"
              >
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </div>
          </div>
          <div className="row px-4 mt-4">
            <div id="pageCategories" className="col-md-8 px-0">
              <div id="popularMusic">
                <h4>Popular</h4>
                <ListGroup as="ol" numbered id="popular">
                  {topSongs.length > 0 &&
                    topSongs[0].data.map((song) => (
                      <SingleSong
                        key={song.id}
                        song={song}
                        favorites={favorites}
                      />
                    ))}
                </ListGroup>
                <p>See More</p>
              </div>
            </div>
            <div id="smrightpanel" className="col-md-4">
              <h4>Artist Pick</h4>
            </div>
          </div>
          <div id="popularBox">
            <h4>Popular Releases</h4>
            <div id="disco" className="row row-cols-lg-5"></div>
          </div>
        </div>
      </Row>
    </>
  );
};

export default ArtistPage;
