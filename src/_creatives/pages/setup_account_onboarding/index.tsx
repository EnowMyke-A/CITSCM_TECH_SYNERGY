import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import SwiperCore from "swiper";

import PasswordSignUpScreen from "./welcome_slides/password_email";
import "./account_setup.css";

const SetUpCreativeAccount: React.FC = () => {
  const swiperRef = useRef<SwiperCore>();

  function nextClick() {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  }

  return (
    <div className="main_setup_creative_account">
      <Swiper
        slidesPerView={1}
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
        autoplay={{
          delay: 5000, // Time delay between slides in milliseconds
          disableOnInteraction: false,
          stopOnLastSlide: true, // Continue autoplay after user interaction
        }}
      >
        <SwiperSlide>
          <PasswordSignUpScreen nextClick={nextClick} />
        </SwiperSlide>
        <SwiperSlide>
          <PasswordSignUpScreen nextClick={nextClick} />
        </SwiperSlide>
        <SwiperSlide>
          <PasswordSignUpScreen nextClick={nextClick} />
        </SwiperSlide>
        <SwiperSlide>
          <PasswordSignUpScreen nextClick={nextClick} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SetUpCreativeAccount;
