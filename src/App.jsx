import "./App.css";
import { useEffect, useContext } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./components/home";
import Product from "./components/Products";
import Header from "./components/layout/Header";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import { auth } from "./firebase";
import ShoppingContext from "./contexts/shopping/shoppingContext";
import CheckoutProduct from "./components/CheckoutProduct";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import StripeWrapper from "./components/StripeWrapper";

const App = () => {
  const location = useLocation();

  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is -> ", authUser);

      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/:username" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/checkout_product" element={<CheckoutProduct />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/payment"
            element={
              <StripeWrapper>
                <Payment />
              </StripeWrapper>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
