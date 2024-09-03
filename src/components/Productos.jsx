import { productos } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export const Productos = () => {
  return (
    <section className="bg-black py-12" id="productos">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          NUESTROS <span className="text-red-700">PRODUCTOS</span>
        </h2>

        <div className="block lg:hidden">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
          >
            {productos.map((producto, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-4 rounded-sm shadow-md">
                  <img
                    src={producto.src}
                    alt={producto.alt}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold text-center">
                    {producto.alt}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
          {productos.map((producto, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-sm shadow-md transform transition duration-300 hover:scale-105"
            >
              <img
                src={producto.src}
                alt={producto.alt}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-center">
                {producto.alt}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
