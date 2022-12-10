import { Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import FloatingUserBar from "./FloatingUserBar";
import MyNav from "./MyNav";

const AlbumPage = () => {
  return (
    <Row>
      <MyNav />
      <div>
        <FloatingUserBar />
      </div>
    </Row>
  );
};

export default AlbumPage;
