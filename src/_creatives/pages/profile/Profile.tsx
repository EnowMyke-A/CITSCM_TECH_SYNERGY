import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './profile.css';
import React, { ChangeEvent, useState, useRef } from 'react';
import ArtsWorks from '../../../components/ArtsWorks';
import { add, analytics, analyticsSharp, barbellSharp, barChart, barChartOutline, settings, statsChart, statsChartSharp } from 'ionicons/icons';

const Profile: React.FC = () => {
  const [image, setImage] = useState(null);

  const fileInputRef = useRef(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <IonPage>
      <IonContent className="ion-padding user-profile">
        <div className="user-profile-content">
          <div className="profile-icons">
            <IonIcon icon={statsChartSharp} />
            <IonIcon icon={settings} />
          </div>
          <div className="img">
            <img src="https://media.istockphoto.com/id/1393187216/photo/cool-senior-man-with-fashionable-outfit-portrait.jpg?s=612x612&w=0&k=20&c=mgRYLJnyqOUBR49RNSl-8W5hf8DF3egccYYDgiBQXM4=" alt="" />
          </div>
          <div className="user-details">
            <p className="name">Pa Ndongmo Eta</p>

            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              odio eos quibusdam optio, veritatis recusandae ab! Eos
              consequuntur cum deserunt.
            </p>

            <button className="edit-profile-btn">Edit Profile</button>
          </div>
          {/* Tab Buttons */}
          <div className="tab-btn-container sticky-top">
            <div className="tab-btns">
              <button className="active">Your Creations</button>
              <button>Saved Works</button>
            </div>
          </div>

          {/* <ArtsWorks /> */}
            <input
              type="file"
              name="artImage"
              id="artImage"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef}
              style={{display: 'none'}}
            />

          <label htmlFor="artImage" className='image-label'>

            <button onClick={handleButtonClick} className="make-post-btn">
              <span>Make a post</span>
              <IonIcon icon={add} />
            </button>
          </label>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
