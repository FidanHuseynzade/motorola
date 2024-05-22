import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./index.scss";

import { Navigation } from "swiper/modules";

export default function Main() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img
            src="https://www.telecominvest.az/uploads/slider/20190121054337561.jpg"
            alt=""
          />
          <div className="text">
            <p>Telecom Invest</p>
            <h2>11 Years of ISO 9001:2015 Certified Experience</h2>
            <button>More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.telecominvest.az/uploads/slider/2019012105313669.jpg"
            alt=""
          />
          <div className="text">
            <p>Telecom Invest</p>
            <h2>Perpetual license to provide wireless communication service</h2>
            <button>More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.telecominvest.az/uploads/slider/20190121052549715.jpg"
            alt=""
          />
          <div className="text">
            <p>Awarded by Motorola Solutions</p>
            <h2>TETRA project European Games Baku 2015 and the first TETRA system in Azerbaijan</h2>
            <button>More</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
