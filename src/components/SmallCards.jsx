const SmallCards = (props) => {
  return (
    <div className="col-5  col-lg-2  goodMorningDivs m-2 mb-5">
      <div className="img-div">
        <img
          className=" img-fluid "
          src={props.song.album.cover_small}
          alt="img placeholder"
          style={{ height: "60px" }}
        />
      </div>

      <div className="text-div">
        <a className=" a-gm ml-2" href="/album.html">
          {props.song.album.title}
        </a>
      </div>
    </div>
  );
};

export default SmallCards;
