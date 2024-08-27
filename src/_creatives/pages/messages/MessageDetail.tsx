import {
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import BackBtn from '../../../components/BackBtn';
import { send } from 'ionicons/icons';

const MessageDetails: React.FC = () => {
  const messages = [
    {
      sender: 'Alice Johnson',
      message:
        "Hi Sam, I saw your art piece 'Samir' on the platform and I have to admit, I wasn't initially sure what to make of it. I'm not familiar with that style.",
      dateTime: '10:35 AM',
      align: 'left',
    },
    {
      sender: 'Sam',
      message:
        "Hey Alice! Thanks for checking it out. It's a bit different, I know.  What specifically didn't click for you?",
      dateTime: '10:40 AM',
      align: 'right',
    },
    {
      sender: 'Alice Johnson',
      message:
        "I think it was just the [Specific element of the art that confused her] that threw me off. I wasn't sure what it represented.",
      dateTime: '10:45 AM',
      align: 'left',
    },
    {
      sender: 'Sam',
      message:
        "Ah, I understand. That element is meant to symbolize [Meaning behind the element].  It's a bit abstract, I admit.  But, I'd love to tell you more about the story behind the piece.",
      dateTime: '10:50 AM',
      align: 'right',
    },
    {
      sender: 'Alice Johnson',
      message: "Oh, please do! I'm really interested now.",
      dateTime: '10:55 AM',
      align: 'left',
    },
    {
      sender: 'Sam',
      message:
        "Sure!  'Samir' is inspired by [Inspiration/Story behind the art piece]. [Briefly explain the story, highlighting the connection to the element that Alice found confusing]. It's a powerful story about [Key theme of the art].",
      dateTime: '11:00 AM',
      align: 'right',
    },
    {
      sender: 'Alice Johnson',
      message:
        "Wow, that's incredible! I never would have guessed that was the story behind it. It completely changes the way I see the art now. It's so beautiful and meaningful.",
      dateTime: '11:05 AM',
      align: 'left',
    },
    {
      sender: 'Sam',
      message:
        "I'm glad to hear that, Alice.  Art is often about more than just what you see at first glance. The story behind it can be just as important.  You know, you can actually purchase 'Samir' on the platform if you're interested. It would be an honor to have it in your collection.",
      dateTime: '11:10 AM',
      align: 'right',
    },
  ];

  return (
    <IonPage className="message-details">
      <BackBtn title="Loic Nathan" />
      <IonContent className="ion-padding">
        <div className="chat-container">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.align}`}>
              <p>{message.message}</p>
              <span className="timestamp">{message.dateTime}</span>
            </div>
          ))}
        </div>
      </IonContent>
      <IonFooter className="message-footer">
        <input type="text" name="" id="" placeholder="Type your message here" />
        <IonIcon icon={send} />
      </IonFooter>
    </IonPage>
  );
};

export default MessageDetails;
