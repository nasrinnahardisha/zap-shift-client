
import liveTracking from "../../assets/live-tracking.png";
import safeDelivery from "../../assets/safe-delivery.png";
const Benifits = () => {
  const services = [
    {
      id: 1,
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates.",
     image: liveTracking,
    },
    {
      id: 2,
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination without damage.",
    image: safeDelivery,
    },
    {
      id: 3,
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns.",
     image: safeDelivery,
    },
  ];

  return (
    <div className="py-16 space-y-6">
      {services.map((service) => (
        <div
          key={service.id}
          className="flex items-center h-66 bg-[#F5EDED] rounded-2xl p-6 shadow-sm hover:shadow-md transition"
        >
          {/* Image - 3/12 */}
          <div className="w-3/12  border-r border-dashed pr-6 flex justify-center">
            <img
              src={service.image}
              alt={service.title}
              className="w-20 h-20 object-contain"
            />
          </div>

          {/* Text - 9/12 */}
          <div className="w-9/12 pl-6">
            <h3 className="text-xl font-semibold mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Benifits;
