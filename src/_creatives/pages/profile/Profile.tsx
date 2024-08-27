import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from '@ionic/react';
import './profile.css';
import React, { ChangeEvent, useState, useRef } from 'react';
import { add, settings, statsChartSharp } from 'ionicons/icons';

const Profile: React.FC = () => {
  const router = useIonRouter()
  const [image, setImage] = useState(null);

  const fileInputRef = useRef(null);


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
            <p className="name">Pa. Ndongmo Eta</p>

            <p className="desc">
            Painter specializing in surreal landscapes and abstract compositions. My work explores the interplay of light and color, creating dreamlike worlds that invite introspection. I use my arts to capture the ethereal beauty and hidden depths of my imagined landscapes. 
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
            {/* <input
              type="file"
              name="artImage"
              id="artImage"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef}
              style={{display: 'none'}}
            /> */}

          <label className='image-label'>

            <button onClick={()=>{
              router.push('/creative/products/add')
            }} className="make-post-btn">
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
