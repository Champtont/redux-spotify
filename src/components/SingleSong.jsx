import { useEffect, useState } from "react";
import { Button, Col, ListGroup } from "react-bootstrap";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE_FAV, SET_FAV, SET_PLAYING } from "../redux/actions";

const SingleSong = (props) => {
  const favorites = useSelector((state) => state.music.favoriteMusic);
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    if (favorites.includes(props.song)) {
      setFavorited(true);
    }
  }, [favorites]);

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
          <p
            onClick={() => {
              dispatch({ type: SET_PLAYING, payload: props.object });
            }}
          >
            {props.song.title_short}
          </p>
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
              ? dispatch({
                  type: REMOVE_FAV,
                  payload: props.song,
                }).setFavorited(false)
              : dispatch({ type: SET_FAV, payload: props.song });
          }}
        >
          {favorites.length > 0 && favorited === true ? (
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
