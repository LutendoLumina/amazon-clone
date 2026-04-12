import { Link } from "react-router-dom";
import { useContext } from "react";
import "./Header.css";
import Search from "@mui/icons-material/Search";
import ShoppingBasket from "@mui/icons-material/ShoppingBasket";
import logo from "../../assets/amazon-logo.png";
import ShoppingContext from "../../contexts/shopping/shoppingContext";
import { auth } from "../../firebase";

const Header = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user } = shoppingContext;

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <header className="header">
      <Link to={"/"}>
        <img src={logo} alt="Amazon logo" className="header_logo" />
      </Link>
      <p>deliver to South Africa</p>
      <div className="header_search">
        <input className="header_input" type="text" placeholder="Search" />
        <Search className="search_icon" />
      </div>

      <div className="header_nav">

        <Link to={!user && "/login"}>
          <div className="header_option" onClick={handleAuthentication}>
            <span className="header_optionOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header_optionTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionOne">Returns</span>
          <span className="header_optionTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionOne">Your</span>
          <span className="header_optionTwo">Prime</span>
        </div>

        <div className="header_optionBasket">
          <ShoppingBasket />
          <span className="header_optionTwo header_basketCount">
            {basket?.length}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
