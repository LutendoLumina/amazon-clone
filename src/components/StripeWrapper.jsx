import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const StripeWrapper = ({ children }) => {
  return (
    <Elements stripe={promise}>{children}</Elements>
  )
}

export default StripeWrapper