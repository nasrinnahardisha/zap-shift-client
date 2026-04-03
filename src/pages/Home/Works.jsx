import {
  FaTruckFast,
  FaEarthAsia,
  FaWarehouse,
  FaMoneyBillWave,
} from "react-icons/fa6";
import WorkCard from "./WorkCard";

const Works = () => {
  const WorksData = [
    {
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      icon: FaTruckFast,
    },
    {
      title: "Cash On Delivery",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      icon: FaEarthAsia,
    },
    {
      title: "Delivery Hub",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      icon: FaWarehouse,
    },
    {
      title: "Booking SME & Corporate",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      icon: FaMoneyBillWave,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold  mb-12">How it Works</h2>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">
        {WorksData.map((work, index) => (
          <WorkCard key={index} work={work} />
        ))}
      </div>
    </div>
  );
};

export default Works;
