import { useLoaderData } from "react-router";
import BangladeshMap from "./BangladeshMap";

const Coverage = () => {
  const coverageData = useLoaderData();

  return (
    <div className="py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-10">
        We are available in 64 districts
      </h2>

      <BangladeshMap coverageData={coverageData} />
    </div>
  );
};

export default Coverage;
