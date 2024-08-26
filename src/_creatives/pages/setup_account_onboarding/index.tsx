import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import SwiperCore from "swiper";

import PasswordSignUpScreen from "./welcome_slides/password_email";
import ContactLocationScreen from "./welcome_slides/contact_location";
import BioPhotoScreen from "./welcome_slides/bio_photo";
import ArtistName from "./welcome_slides/artist_name";
import "./account_setup.css";

const SetUpCreativeAccount: React.FC = () => {
  const swiperRef = useRef<SwiperCore>();

  function nextClick() {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
    }
    
    function prevClick() {
      if (swiperRef.current) {
        swiperRef.current.slidePrev();
      }
    }

  return (
    <div className="main_setup_creative_account">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={1}
        pagination={true}
        allowTouchMove={false}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <PasswordSignUpScreen nextClick={nextClick} prevClick={prevClick} />
        </SwiperSlide>
        <SwiperSlide>
          <ContactLocationScreen nextClick={nextClick} prevClick={prevClick} />
        </SwiperSlide>
        <SwiperSlide>
          <BioPhotoScreen nextClick={nextClick} prevClick={prevClick} />
        </SwiperSlide>
        <SwiperSlide>
          <ArtistName prevClick={prevClick} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SetUpCreativeAccount;
