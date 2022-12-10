import { Row } from "react-bootstrap";
import MyNav from "./MyNav";
import FloatingUserBar from "./FloatingUserBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SmallCards from "./SmallCards";
import BigCards from "./BigCards";

const HomePage = () => {
  const searchedMusic = useSelector((state) => state.music.artists);

  const [christmas, setChristmas] = useState([]);

  useEffect(() => {
    getChristmasMusic();
    console.log("working");
  }, []);

  const getChristmasMusic = async () => {
    const baseEndpoint =
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=Santa";

    console.log("getting c music...");
    try {
      const response = await fetch(baseEndpoint);
      if (response.ok) {
        const data = await response.json();
        console.log(data.data);
        setChristmas(data.data);
      } else {
        console.log("error fetching c music");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Row>
        <MyNav />
        <div>
          <FloatingUserBar />
          <div
            className="container col-sm-10  col-10"
            style={{ marginLeft: "15%" }}
          >
            <h3 className="mt-5 text-white ml-2 pl-5 ml-5 mb-5">
              Christmas Hits
            </h3>

            <div
              className="pl-5 row goodMorning justifty-content-center"
              style={{ marginLeft: "10%" }}
            >
              {christmas.slice(0, 6).map((song) => (
                <SmallCards song={song} key={song.id} />
              ))}
            </div>
          </div>
          <div className="row " style={{ justifyContent: "end" }}>
            <div className="col-10 pl-5 ">
              <div id="searchResults" className="pl-5">
                <h2 className="searchResult">Search Results</h2>
                <div
                  className="row imgLinks py-3"
                  style={{ justifyContent: "center" }}
                >
                  {searchedMusic.length > 0 &&
                    searchedMusic[0].map((object) => (
                      <BigCards key={object.id} object={object} />
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-12 pl-5"></div>
          </div>
        </div>
      </Row>
    </>
  );
};

export default HomePage;
