import React from "react";

const WorkCard = ({ work }) => {
  const { title, description, icon: Icon } = work;

  return (
    <div className="bg-white w-full sm:max-w-75 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
      <div className="text-4xl mb-4">
        <Icon />
      </div>

      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default WorkCard;
