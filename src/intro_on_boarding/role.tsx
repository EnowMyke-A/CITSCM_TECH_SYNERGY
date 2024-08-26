import { useIonRouter } from "@ionic/react";
import "./welcome.css";

const RolePage: React.FC = () => {
  const router = useIonRouter();
  return (
    <div className="select_role_main_container">
      <div className="select_role_main">
        <div className="logo_section"></div>
        <div className="big_heading">
          <h1>what do you want to do on bla?</h1>
        </div>
        <div className="role_buttons">
          <button
            className="role_button"
            onClick={() => {
              router.push("/creative/signup");
            }}
          >
            Sell your paintings
          </button>
          <button
            className="role_button"
            onClick={() => {
              router.push("/artlover/signup");
            }}
          >
            Browse paintings
          </button>
        </div>
      </div>
    </div>
  );
};

export default RolePage;
