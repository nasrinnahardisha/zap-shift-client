import React from "react";
import { GiStrawberry } from "react-icons/gi";
const ServiceCard = ({ service }) => {
  const { title, description, image } = service;

  return (
    <div className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:bg-[#CAEB66] transition-all duration-300 text-center">
      {/* Icon Wrapper */}
      <div className="flex justify-center transition-all duration-300 mb-4">
        <div className="text-4xl p-4 rounded-full bg-base-300 transition-all duration-300">
          <img className="w-10 h-10" src={image} alt={title} />
        </div>
      </div>

      <h3 className="text-xl text-black font-semibold mb-2">{title}</h3>

      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
