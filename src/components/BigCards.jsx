import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getSingleArtistAction,
  getSingleArtistTopAction,
  SET_PLAYING,
} from "../redux/actions";

const BigCards = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="col-12 col-md-3 col-lg-2 card  m-2 text-center dark-cards SongCards ">
      <img
        className="img-fluid"
        src={props.object.album.cover_xl}
        alt="img placeholder"
        onClick={() => {
          dispatch({ type: SET_PLAYING, payload: props.object });
        }}
      />

      <img
        className="playButtonCard"
        src="./assets/Spotify-Play-Button.png"
        alt="play"
      />

      <p>
        <Link to={`/album/${props.object.album.id}`}>
          {props.object.album.title}
        </Link>
        <br />
        <Link
          to={`/artist/${props.object.artist.id}`}
          onClick={() => {
            dispatch(getSingleArtistAction(props.object.artist.id));
            dispatch(getSingleArtistTopAction(props.object.artist.id));
          }}
        >
          {props.object.artist.name}
        </Link>
      </p>
    </div>
  );
};

export default BigCards;
