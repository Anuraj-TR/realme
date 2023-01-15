// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// components
import { BannerSlider } from "../molicule/banner-slider";


// Data
import { bannerData } from "../../Data/data";

import "swiper/css/bundle";

export const Banner = () => {
  return (
    <div className="rlm-banner">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        speed={1000}
        autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
        pagination={{ clickable: true }}
      >
        {bannerData.map((data) => {
          return (
            <SwiperSlide key={data.id}>
              <BannerSlider
                mob={data.images.mob}
                desk={data.images.desk}
                large={data.images.large}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
