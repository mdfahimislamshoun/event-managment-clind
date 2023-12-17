import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutFrome";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
const Prement = () => {
    return (
        <div>
             <div className="mt-10 mb-5">
                <Elements stripe={stripePromise}>
                    <CheckOutForm />
                </Elements>
            </div>            
        </div>
    );
};

export default Prement;