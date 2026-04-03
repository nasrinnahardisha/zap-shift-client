import { useState } from "react";
import StripePayment from "./StripePayment";
import SSLPayment from "./SSLPayment";


const Payment = () => {
  const [method, setMethod] = useState("");

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Choose Payment Method</h2>

      <div className="space-y-3">
        <button
          onClick={() => setMethod("stripe")}
          className="btn btn-outline w-full"
        >
          Pay with Stripe
        </button>

        <button
          onClick={() => setMethod("ssl")}
          className="btn btn-outline w-full"
        >
          Pay with SSLCommerz
        </button>
      </div>

      <div className="mt-6">
        {method === "stripe" && <StripePayment />}
        {method === "ssl" && <SSLPayment />}
      </div>
    </div>
  );
};

export default Payment;