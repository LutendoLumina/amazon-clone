import CurrencyFormat from "react-currency-format";
import { useContext } from "react";
import ShoppingContext from "../contexts/shopping/shoppingContext";
import "./SubTotal.css";

const SubTotal = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, getBasketTotal } = shoppingContext;

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items) :<strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        prefix={"R"}
      />
      <button>Proceed to Checkout</button>    
    </div>
  );
};

export default SubTotal;
