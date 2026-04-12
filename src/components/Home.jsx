import homeImage from "../assets/home_image.jpg";
import "./Home.css";
import Products from "./Products"

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img src={homeImage} alt="Home Image" className="home_image" />
        <Products />
      </div>
    </div>
  );
};

export default Home;
