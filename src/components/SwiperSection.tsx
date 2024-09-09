import SliderCard from "./SliderCard";
import employer1 from "../assets/images/employer2.png";
import employer2 from "../assets/images/employer3.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import "../styles.css";
import { arrowPrev } from "../assets/icons/leftArrow";
import { arrowNext } from "../assets/icons/rightArrow";

// import required modules

const employerArray = [
  {
    img: employer1,
    name: "ნინო ბერიძე",
    role: "App მარკეტერი",
  },
  {
    img: employer2,
    name: "გიორგი ხუციშვილი",
    role: "ინტერიერის დიზაინერი",
  },
  {
    img: employer1,
    name: "ვახო შენგელია",
    role: "დიზაინერი",
  },
  {
    img: employer1,
    name: "ნინო ბერიძე",
    role: "App მარკეტერი",
  },
  {
    img: employer2,
    name: "გიორგი ხუციშვილი",
    role: "ინტერიერის დიზაინერი",
  },
  {
    img: employer1,
    name: "ვახო შენგელია",
    role: "დიზაინერი",
  },
  {
    img: employer1,
    name: "ნინო ბერიძე",
    role: "App მარკეტერი",
  },
  {
    img: employer2,
    name: "გიორგი ხუციშვილი",
    role: "ინტერიერის დიზაინერი",
  },
  {
    img: employer1,
    name: "ვახო შენგელია",
    role: "დიზაინერი",
  },
];

const SwiperSection = () => {
  return (
    <div>
      <h2
        className="text-center bg-gradient-to-b from-primary  to-secondaryBlue 
      bg-clip-text text-transparent text-[36px] font-[900] leading-[46px]"
      >
        ექსპერტები, რომლებიც წარმართავენ <br /> თქვენს გზას წარმატებისკენ
      </h2>

      <div className="relative w-fit mx-auto">
        <Swiper
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
          slidesPerView={3}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {employerArray.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <SliderCard
                  image={item.img}
                  cardTitle={item.name}
                  cardText={item.role}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <span className="absolute top-1/2 -translate-y-1/2 -left-20 cursor-pointer image-swiper-button-prev">
          {arrowPrev}
        </span>
        <span className="absolute top-1/2 -translate-y-1/2 -right-[48px] cursor-pointer image-swiper-button-next">
          {arrowNext}
        </span>
      </div>
    </div>
  );
};

export default SwiperSection;
