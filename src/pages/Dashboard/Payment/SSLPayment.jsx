import { useParams } from "react-router";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../Hooks/UseAuth";

const SSLPayment = () => {
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecure();
  const { user } = UseAuth();

  const { data: parcelInfo = {} } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  const handleSSLPayment = async () => {
    const res = await axiosSecure.post("ssl-payment", {
      parcelId,
      amount: parcelInfo.cost,
      email: user.email,
    });

    window.location.replace(res.data.url);
  };

  return (
    <button
      onClick={handleSSLPayment}
      className="btn btn-success w-full"
    >
      Pay with SSLCommerz ৳{parcelInfo.cost}
    </button>
  );
};

export default SSLPayment;