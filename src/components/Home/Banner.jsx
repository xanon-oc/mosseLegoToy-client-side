import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";
import { Autoplay, Pagination, Navigation } from "swiper";
// images

import banner_1 from "/Banner/Banner_1.jpg";
import banner_2 from "/Banner/Banner_2.jpg";
import banner_3 from "/Banner/Banner_3.jpg";
import banner_4 from "/Banner/Banner_4.jpg";
import banner_5 from "/Banner/Banner_5.png";
import banner_6 from "/Banner/Banner_6.jpg";
import banner_7 from "/Banner/Banner_7.jpg";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="relative">
      <div className="">
        <Swiper
          navigation={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper h-[39.5rem]"
        >
          <SwiperSlide>
            <img className="object-cover " src={banner_1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="object-cover " src={banner_2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="object-cover object-top " src={banner_3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="object-cover " src={banner_4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="object-cover object-top" src={banner_5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="object-cover " src={banner_6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="object-cover " src={banner_7} alt="" />
          </SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
      <div className="absolute bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(45, 25, 41, 0)]  flex items-center h-full gap-5  left-0  bottom-0  z-40 text-white">
        <div className="ml-[15%] mt-[50%]">
          <h1 className="text-7xl mb-2">One BoxToy</h1>
          <p className="text-xl mt-8">Flat 10% Off On Order Above $29.99</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
