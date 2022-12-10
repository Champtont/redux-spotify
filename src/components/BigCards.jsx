import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SET_PLAYING } from "../redux/actions";

const BigCards = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="col-12 col-md-3 col-lg-2 card  m-2 text-center dark-cards SongCards ">
      <Link href={props.object.artist.id}>
        <img
          className="img-fluid"
          src={props.object.album.cover_xl}
          alt="img placeholder"
          onClick={() => {
            dispatch({ type: SET_PLAYING, payload: props.object });
          }}
        />
      </Link>

      <img
        className="playButtonCard"
        src="./assets/Spotify-Play-Button.png"
        alt="play"
      />

      <p>
        <Link href={props.object.album.id}>{props.object.album.title}</Link>
        <br />
        <Link href={props.object.artist.id}>{props.object.artist.name}</Link>
      </p>
    </div>
  );
};

export default BigCards;
