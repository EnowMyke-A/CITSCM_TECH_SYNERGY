import { IonBackButton, IonButtons, IonHeader, IonToolbar } from '@ionic/react';
import React from 'react';
    
interface BackBtnProps {
    title: string; 
    onclick?: () => void; 
  }

  const BackBtn: React.FC<BackBtnProps> = ({title, onclick}) => {

  return (
    <IonHeader class='ion-no-border' color='none'>
      <IonToolbar>
        <IonButtons slot="start">
          {onclick ? (
            <IonBackButton color='dark'>{title}</IonBackButton>
          ) : (
            <IonBackButton color='dark'>{title}</IonBackButton>
          )}
        </IonButtons>
        <span style={{ marginLeft: '-24px', fontSize: '20px', fontWeight: '700', width: '100%', display: 'inline-block', textAlign: 'center'}}>{title}</span>
         </IonToolbar>
    </IonHeader>
  );
};

export default BackBtn;