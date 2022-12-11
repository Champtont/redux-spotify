import { Button, Col, ListGroup } from "react-bootstrap";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE_FAV, SET_FAV } from "../redux/actions";

const SingleSong = (props) => {
  let favorites = useSelector((state) => state.music.favoriteMusic);

  const dispatch = useDispatch();

  function fmtMSS(s) {
    return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
  }
  return (
    <ListGroup.Item as="li" active className="d-flex align-items-center mb-2">
      <div className="d-flex justify-content-between" style={{ width: "100%" }}>
        <Col>
          <img src={props.song.album.cover_small} alt="album cover" />
        </Col>
        <Col className="d-flex align-items-center">
          <p>{props.song.title_short}</p>
        </Col>
        <Col className="d-flex align-items-center">
          <p>{props.song.album.title}</p>
        </Col>
        <Col className="d-flex align-items-center">
          <p>{fmtMSS(props.song.duration)}</p>
        </Col>
        <Button
          onClick={() => {
            favorites.includes(props.song)
              ? dispatch({ type: REMOVE_FAV, payload: props.song })
              : dispatch({ type: SET_FAV, payload: props.song });
          }}
        >
          {favorites.includes(props.song) ? (
            <AiFillHeart />
          ) : (
            <AiOutlineHeart />
          )}
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default SingleSong;
