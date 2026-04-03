import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaQuoteRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => {
  const testimonials = [
    {
      id: 1,
      name: "Awlad Hossain",
      designation: "Senior Product Designer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      desc: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    },
    {
      id: 2,
      name: "Nasir Uddin",
      designation: "Senior Officer",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      desc: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine.",
    },
    {
      id: 3,
      name: "Rasel Ahmed",
      designation: "Marketing Head",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      desc: "A posture corrector works by providing support and gentle alignment.",
    },
    {
      id: 4,
      name: "Jannat Ara",
      designation: "HR Manager",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      desc: "A posture corrector works by providing support and gentle alignment.",
    },
  ];

  return (
    <div className="py-20 bg-[#f8f8f8]">
      {/* Top Content */}
      <div className="text-center mb-14">
        <h2 className="text-3xl font-bold mb-3">
          What our customers are saying
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Enhance posture, mobility and well-being effortlessly.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              {({ isActive }) => (
                <div
                  className={`relative p-8 rounded-2xl transition-all duration-500
                  ${
                    isActive
                      ? "bg-white shadow-2xl opacity-100 scale-100"
                      : "bg-white opacity-40 scale-95"
                  }`}
                >
                  <FaQuoteRight className="text-4xl text-[#C3DFE2] mb-4" />

                  <p className="text-gray-600 mb-6">{item.desc}</p>

                  <div className="border-t border-dotted border-gray-300 mb-6"></div>

                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-lg">{item.name}</h4>
                      <p className="text-sm text-gray-500">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Prev Button */}
        <button
          className="custom-prev absolute -left-16 top-1/2 -translate-y-1/2 
        bg-white shadow-lg w-12 h-12 rounded-full flex items-center justify-center 
        hover:bg-[#C3DFE2] transition"
        >
          ❮
        </button>

        {/* Next Button */}
        <button
          className="custom-next absolute -right-16 top-1/2 -translate-y-1/2 
        bg-white shadow-lg w-12 h-12 rounded-full flex items-center justify-center 
        hover:bg-[#C3DFE2] transition"
        >
          ❯
        </button>

        {/* Pagination */}
        <div className="custom-pagination mt-10 flex justify-center"></div>
      </div>
    </div>
  );
};

export default Carousel;
