import "./welcome_slide.css";

interface prop {
  nextClick: Function;
  prevClick: Function;
  setTelephone: React.Dispatch<React.SetStateAction<string>>,
  setLocation:React.Dispatch<React.SetStateAction<string>>
}

const ContactLocationScreen: React.FC<prop> = ({ nextClick, prevClick,setTelephone,setLocation }) => {
  function handleClickNext() {
    //Do some validation here
    nextClick();
  }

  function handleClickPrev() {
    //Do some validation here
    prevClick();
  }

  return (
    <div className="main_signup_container">
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
      <div className="main_signup_content">
        <div className="logo_section"></div>
        <div className="signup_content_proper">
          <div className="sign_up_form_section">
            <div className="form-container">
              <label htmlFor="phone_signup">Phone</label>
              <input
                type="number"
                name="phone_field"
                id="phone_signup"
                placeholder="e.g +237670899677"
                onChange={(e:any)=>{setTelephone(e.target.value)}}
              />
              <label htmlFor="location_signup" style={{ marginTop: "15px" }}>
                Location
              </label>
              <input
                type="text"
                name="location_field"
                id="location_signup"
                placeholder="where in cameroon?"
                onChange={ (e:any)=>{setLocation(e.target.value)}}
              />
              <button
                onClick={() => {
                  handleClickNext();
                }}
                style={{ marginTop: "30px" }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLocationScreen;
