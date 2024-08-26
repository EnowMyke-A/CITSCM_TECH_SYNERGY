import "./welcome_slide.css";
import { signInWithGoogle } from "../../../../services/Auth";

interface prop {
  nextClick: Function;
  prevClick: Function;
}

const PasswordSignUpScreen: React.FC<prop> = ({ nextClick, prevClick }) => {
  function handleClickNext() {
    //Do some validation here
    nextClick();
  }

  function handleClickPrev() {
    //Do some validation here
    prevClick();
  }

  async function googleAuth() {
    await signInWithGoogle();
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
              <label htmlFor="email_signup">Email</label>
              <input
                type="email"
                name="email_field"
                id="email_signup"
                placeholder="email"
              />
              <label htmlFor="password_signup" style={{ marginTop: "15px" }}>
                Password
              </label>
              <input
                type="password"
                name="password_field"
                id="password_signup"
                placeholder="password"
              />
              <button onClick={handleClickNext}>Next</button>
            </div>
          </div>
          <div className="third_party_section_seperator">
            <hr className="seperator_line" />
            <span>OR</span>
            <hr className="seperator_line" />
          </div>
          <button className="google_authenication" onClick={googleAuth}>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.7465 0C5.98355 0 0.5 5.373 0.5 12C0.5 18.627 5.98355 24 12.7465 24C22.9589 24 25.2596 14.707 24.3016 10H22.9447H20.6313H12.7425V14H20.6372C19.7297 17.4483 16.5438 20 12.7425 20C8.23525 20 4.58085 16.418 4.58085 12C4.58085 7.582 8.23525 4 12.7425 4C14.7922 4 16.6593 4.74575 18.0927 5.96875L20.9919 3.12891C18.8148 1.18491 15.9225 0 12.7465 0Z"
                fill="#040404"
              />
            </svg>

            <span>Sign up with Google</span>
          </button>
          <button className="apple_authenication">
            <svg
              width="24"
              height="30"
              viewBox="0 0 24 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.2493 10.3225C23.1184 10.4045 20.0007 12.1347 20.0007 15.9711C20.1476 20.3463 23.935 21.8806 24 21.8806C23.935 21.9626 23.4282 23.9708 21.9269 26.0759C20.7354 27.8892 19.4129 29.7174 17.4048 29.7174C15.4946 29.7174 14.8089 28.5089 12.6048 28.5089C10.2378 28.5089 9.56802 29.7174 7.75577 29.7174C5.7476 29.7174 4.32719 27.7912 3.07075 25.9949C1.43845 23.6439 0.0510477 19.9545 0.00206801 16.4119C-0.0309401 14.5347 0.328954 12.6895 1.24253 11.1221C2.53198 8.93402 4.83402 7.44866 7.34796 7.39968C9.27414 7.33473 10.9884 8.72213 12.1639 8.72213C13.2905 8.72213 15.3966 7.39968 17.7796 7.39968C18.8081 7.40075 21.551 7.7106 23.2493 10.3225ZM12.001 7.02488C11.6582 5.31059 12.6048 3.5963 13.4864 2.50277C14.6129 1.18032 16.3922 0.282715 17.9265 0.282715C18.0245 1.99701 17.4037 3.67829 16.2942 4.90278C15.2986 6.22523 13.5844 7.2208 12.001 7.02488Z"
                fill="#040404"
              />
            </svg>
            <span className="third_party_name">Sign up with Apple</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordSignUpScreen;