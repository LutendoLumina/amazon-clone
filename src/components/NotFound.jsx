import Dog from "../assets/dog.jpg";
import NotFoundImg from "../assets/not_found_img.png";
import "./NotFound.css";
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not_found">
      <Link to="/">
        <div>
          <img className="img_top" src={NotFoundImg} alt="Not Found Image" />
        </div>
        <div>
          <img src={Dog} alt="Dog Image" />
        </div>
      </Link>
    </div>
  );
};

export default NotFound;
