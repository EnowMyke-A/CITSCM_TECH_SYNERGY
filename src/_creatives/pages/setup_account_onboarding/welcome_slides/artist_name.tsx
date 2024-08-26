import "./welcome_slide.css";
import { useIonRouter } from "@ionic/react";

interface prop {
  prevClick: Function;
}

const ArtistName: React.FC<prop> = ({ prevClick }) => {
  function handleClickPrev() {
    //Do some validation here
    prevClick();
  }

  const router = useIonRouter();

  function handleAccountCreation() {  

    //put all code for account creation here

    router.push("/creative/tabs/home");
  }

  return (
    <div className="select_role_main_container">
      <button onClick={handleClickPrev} className="float_back_button_auth">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="300"
          height="300"
          viewBox="0 0 16 16"
        >
          <path
            fill="#000000"
            fill-rule="evenodd"
            d="M10.53 2.97a.75.75 0 0 1 0 1.06L6.56 8l3.97 3.97a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 0"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div className="select_role_main">
        <div className="logo_section"></div>
        <div className="big_heading">
          <h1>what would want the world to call you?</h1>
        </div>
        <div className="artist_name_form">
          <label htmlFor="artist_name">Artist name</label>
          <input
            type="text"
            id="artist_name"
            name="artist_field"
            placeholder="your name"
          />
        </div>
        <button
          className="primary-black-button"
          onClick={() => {
            handleAccountCreation();
          }}
        >
          Let's go
        </button>
      </div>
    </div>
  );
};

export default ArtistName;
