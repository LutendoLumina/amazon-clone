import "./Checkout.css";
import { useContext } from "react";
import ShoppingContext from "../contexts/shopping/shoppingContext";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal";

const Checkout = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user } = shoppingContext;

  return (
    <div className="checkout">
      <div className="checkout_left">
        {/* <img className="checkout_ad" src="https://via.placeholder.com/728x90" alt="" /> */}
      </div>

      <div>
        <h3>Hello, {user?.email}</h3>
        <h2 className="checkout_title">Your Shopping Basket</h2>

        {basket.map((item) => (
          <CheckoutProduct
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>

      <div className="checkout_right">
        <SubTotal />
      </div>
    </div>
  );
};

export default Checkout;
