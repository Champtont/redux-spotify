import { Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import FloatingUserBar from "./FloatingUserBar";
import MyNav from "./MyNav";

const ArtistPage = () => {
  return (
    <Row>
      <MyNav />
      <div>
        <FloatingUserBar />
      </div>
    </Row>
  );
};

export default ArtistPage;
