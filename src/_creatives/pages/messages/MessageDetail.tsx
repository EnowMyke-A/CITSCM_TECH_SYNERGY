import { IonContent, IonFooter, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import BackBtn from '../../../components/BackBtn';
import { send } from 'ionicons/icons';

const MessageDetails: React.FC = () => {

    return (
        <IonPage className='message-details'>
            <BackBtn title='Loic Nathan' />
            <IonContent className="ion-padding">
            Message Details
            </IonContent>
            <IonFooter className='message-footer'>
                <input type="text" name="" id="" placeholder='Type your message here' />
                <IonIcon icon={send} />
            </IonFooter>
        </IonPage>
    );
};

export default MessageDetails;