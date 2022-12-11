import { Row } from "react-bootstrap";
import MyNav from "./MyNav";
import FloatingUserBar from "./FloatingUserBar";
import { useSelector } from "react-redux";
import SingleSong from "./SingleSong";
import likedIcon from "../assets/liked.jpeg";

const LikedPage = () => {
  const favorites = useSelector((state) => state.music.favoriteMusic);

  return (
    <Row>
      <MyNav />
      <div>
        <FloatingUserBar />
        <div
          style={{
            marginLeft: "15.5%",
            display: "flex",
            flexWrap: "wrap",
            alignContent: "flex-end",
            height: "300px",
            backgroundColor: "#5d2222",
            paddingBottom: "1em",
            paddingLeft: "1em",
          }}
        >
          <div style={{ marginRight: "1em" }}>
            <img src={likedIcon} alt="liked icon" />
          </div>
          <div style={{ color: "white", margin: "0", textAlign: "left" }}>
            <p className="m-0">Playlist</p>
            <h1 className="m-0" style={{ lineHeight: "88px" }}>
              Liked Songs
            </h1>
            <p className="m-0" style={{ lineHeight: "0" }}>
              User {favorites.length}
            </p>
          </div>
        </div>
        {favorites.length > 0 ? (
          <div className="pt-5">
            <ul
              style={{
                marginLeft: "15.5%",
                paddingRight: "1em",
                color: "white",
              }}
            >
              {favorites.map((song) => (
                <SingleSong key={song.id} song={song} />
              ))}
            </ul>
          </div>
        ) : (
          <div
            style={{
              height: "100vh",
              backgroundImage: "linear-gradient",
              paddingTop: "1em",
            }}
          >
            <h2>Add some Music here!!!</h2>
          </div>
        )}
      </div>
    </Row>
  );
};

export default LikedPage;
