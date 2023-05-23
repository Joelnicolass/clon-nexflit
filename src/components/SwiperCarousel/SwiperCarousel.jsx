import React from "react";
import Swiper from "react-id-swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./SwiperCarousel.css";

const SwiperCarousel = ({ children }) => {
  return (
    <Swiper slidesPerView={5} spaceBetween={10} loop={true}>
      {children}
    </Swiper>
  );
};

export default SwiperCarousel;
