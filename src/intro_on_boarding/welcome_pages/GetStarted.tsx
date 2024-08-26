import { useIonRouter } from "@ionic/react";
import React from "react";

const GetStartedScreen: React.FC = () => {
  const router = useIonRouter();
  return (
    <div className="welcome-page">
      <div className="welcome-page-screen-container">
        <div className="welcome-page-screen-content">
          <div className="welcome-illustration"></div>
          <div className="welcome-caption">
            <p>
              The home of Cameroon’s most creative paintings. Every brush stroke
              tells an soul-touching story.
            </p>
          </div>
        </div>
        <div className="welcome-action-buttons">
          <button
            className="welcome-signup primary-button"
            onClick={() => router.push("/select/roles")}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStartedScreen;
