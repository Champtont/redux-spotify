import { Link } from "react-router-dom";

const BigCards = (props) => {
  return (
    <div className="col-12 col-md-3 col-lg-2 card  m-2 text-center dark-cards SongCards ">
      <a href={props.result.artist.id}>
        <img
          className="img-fluid"
          src={props.result.album.cover_xl}
          alt="img placeholder"
        />
      </a>

      <img
        className="playButtonCard"
        src="./assets/Spotify-Play-Button.png"
        alt="play"
      />

      <p>
        <a href={props.result.album.id}>{props.result.album.title}</a>
        <br />
        <a href={props.result.artist.id}>{props.result.artist.name}</a>
      </p>
    </div>
  );
};

export default BigCards;
