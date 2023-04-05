import { useEffect, useState } from "react";
import { Button, Col, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE_FAV, SET_FAV, SET_PLAYING } from "../redux/actions";
import MyLikeButton from "./MyLikeButton";

const SingleSong = (props) => {
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
              dispatch({ type: SET_PLAYING, payload: props.song });
            }}
          >
            {props.song.title_short}
          </p>
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <p>{fmtMSS(props.song.duration)}</p>
        </Col>
        <MyLikeButton song={props.song} />
      </div>
    </ListGroup.Item>
  );
};

export default SingleSong;
