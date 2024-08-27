import { useRef,useState } from "react";
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
import { signUp } from "../../../services/Auth";

const SetUpCreativeAccount: React.FC = () => {
  const swiperRef = useRef<SwiperCore>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [telephone, setTelephone] = useState('');
  const [profile_photo, setProfilePhoto] = useState('')
  const [bio, setBio] = useState('');
  const [artist_name, setArtistName] = useState('');

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
  
 async function handleRegister() {
    const post = {
      location,telephone,profile_photo,bio,artist_name
    }
    try {
     const userId = await signUp(email,password,post)
    } catch (error) {
      console.error(error);
    }
    
    console.log(post);
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
          <PasswordSignUpScreen nextClick={nextClick} prevClick={prevClick} setEmail={setEmail} setPassword={ setPassword} />
        </SwiperSlide>
        <SwiperSlide>
          <ContactLocationScreen nextClick={nextClick} prevClick={prevClick} setTelephone={setTelephone} setLocation={ setLocation} />
        </SwiperSlide>
        <SwiperSlide>
          <BioPhotoScreen nextClick={nextClick} prevClick={prevClick} setBio={setBio} setProfilePhoto={setProfilePhoto}/>
        </SwiperSlide>
        <SwiperSlide>
          <ArtistName prevClick={prevClick} setArtistName={setArtistName} handleRegister={ handleRegister} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SetUpCreativeAccount;
