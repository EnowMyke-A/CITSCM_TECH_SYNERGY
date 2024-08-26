import { IonButton } from "@ionic/react";
import React from "react";

interface ContainerProps {
  nextClick: Function;
}

const WelcomeScreen1: React.FC<ContainerProps> = ({ nextClick }) => {
  function handleClick() {
    nextClick();
  }
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
        <div className="welcome-action-buttons"></div>
      </div>
    </div>
  );
};

export default WelcomeScreen1;
