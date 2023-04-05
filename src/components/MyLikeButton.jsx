import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE_FAV, SET_FAV, SET_PLAYING } from "../redux/actions";

const MyLikeButton = (props) => {
  const favorites = useSelector((state) => state.music.favoriteMusic);
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    if (favorites.includes(props.song)) {
      setFavorited(true);
    }
  }, [favorites]);

  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => {
        if (favorites.includes(props.song)) {
          dispatch({
            type: REMOVE_FAV,
            payload: props.song,
          });
          setFavorited(false);
        } else {
          dispatch({ type: SET_FAV, payload: props.song });
          setFavorited(true);
        }
      }}
    >
      {favorites.length > 0 && favorited === true ? (
        <AiFillHeart size={22} />
      ) : (
        <AiOutlineHeart className="favoriteheart" size={22} />
      )}
    </Button>
  );
};

export default MyLikeButton;
