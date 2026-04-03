import parcelImg from "../../assets/location-merchant.png";
import BgImg from "../../assets/be-a-merchant-bg.png";

const MerchantSection = () => {
  return (
    <div className="relative  rounded-2xl overflow-hidden my-20 bg-[#03373D]">
      {/* Overlay */}
      <div className="bg-black/70  w-full h-full px-10 py-16 text-white">
      <div className="top-0 left-0 absolute z-10">
          <img
            src={BgImg}
            alt="Parcel Box"
            className=" opacity-90"
          />
        </div>
        <div className="relative z-20">
        <div className="max-w-180.75 z-20">
          <h2 className="text-3xl md:text-[42px] font-bold mb-4">
            Merchant and Customer Satisfaction is Our First Priority
          </h2>

          <p className="text-gray-300 max-w-129 mb-6">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Our courier delivers parcels all
            over Bangladesh.
          </p>

          <div className="flex gap-4">
            <button className="bg-[#CAEB66] text-black px-6 py-3 rounded-full font-bold text-[20px]hover:scale-105 transition">
              Become a Merchant
            </button>

            <button className="border border-[#CAEB66] text-[#CAEB66] px-6 py-3 rounded-full font-bold text-[20px] hover:bg-[#CAEB66] hover:text-black transition">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>
        </div>
        <div className="bottom-10 right-10 absolute">
          <img
            src={parcelImg}
            alt="Parcel Box"
            className=" opacity-90"
          />
        </div>
      </div>
    </div>
  );
};

export default MerchantSection;
