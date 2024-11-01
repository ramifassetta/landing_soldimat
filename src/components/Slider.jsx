import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination"; 
import { Pagination } from "swiper/modules";
import { clientes } from '../constants/index';

export const Slider = () => {
  return (
    <Swiper 
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 1 },
      }}
      pagination={{ clickable: true }} 
      loop={true}
    >
      {clientes.map((cliente, index) => (
        <SwiperSlide key={index}>
          <div className="slide-content p-6 rounded-lg shadow-lg">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">
              {cliente.title.toUpperCase()}
            </h2>
            <div className="images flex bg-white rounded-md py-2 justify-center md:space-x-4 lg:space-x-8 xl:space-x-52 mb-5">
              {cliente.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image.src}
                  alt={image.alt}
                  className="w-12 h-12 mx-1 md:w-32 md:h-32 object-contain m-2 rounded"
                />
              ))}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
