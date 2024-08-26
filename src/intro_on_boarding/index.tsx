import { IonPage, IonButton, IonLabel, IonHeader, IonIcon } from "@ionic/react";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";

import "swiper/css/autoplay";

SwiperCore.use([Autoplay, Navigation, Pagination]);

import "./welcome.css";

import { chevronForward } from "ionicons/icons";

import GetStartedScreen from "./welcome_pages/GetStarted";
import WelcomeScreen2 from "./welcome_pages/Welcome_screen_2";
import WelcomeScreen1 from "./welcome_pages/Welcome_screen_1";

const WelcomeScreen: React.FC = () => {
  const swiperRef = useRef<SwiperCore>();

  function nextClick() {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  }


  return (
    <IonPage className="welcome-screens">
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
          <WelcomeScreen1 nextClick={nextClick} />
        </SwiperSlide>
        <SwiperSlide>
          <WelcomeScreen2 nextClick={nextClick} />
        </SwiperSlide>
        <SwiperSlide>
          <GetStartedScreen />
        </SwiperSlide>
      </Swiper>
    </IonPage>
  );
};

export default WelcomeScreen;
