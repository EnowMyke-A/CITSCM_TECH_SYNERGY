import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import React from 'react';
import './message.css'

const MessageList: React.FC = () => {

const router = useIonRouter()

    const messages = [
        {
          receiverName: "Alice Johnson",
          receiverImage: "https://media.istockphoto.com/id/1411155612/photo/side-profile-of-a-beautiful-young-black-woman-thinking-and-looking-powerful-standing-against.jpg?s=612x612&w=0&k=20&c=q64YMacmkFA78WDmlShv9Q44va-8k2iDaYFIkWNeyqg=",
          lastMessage: "Hey, how are you?",
          dateTime: "10:45 AM",
        },
        {
          receiverName: "Bob Williams",
          receiverImage: "https://i.pinimg.com/736x/a3/fc/98/a3fc98cd46931905114589e2e8abdc49.jpg",
          lastMessage: "See you tomorrow!",
          dateTime: "Yesterday",
        },
        {
          receiverName: "Charlie Brown",
          receiverImage: "https://media.istockphoto.com/id/1393187216/photo/cool-senior-man-with-fashionable-outfit-portrait.jpg?s=612x612&w=0&k=20&c=mgRYLJnyqOUBR49RNSl-8W5hf8DF3egccYYDgiBQXM4=",
          lastMessage: "Let's catch up soon.",
          dateTime: "12/25",
        },
        {
          receiverName: "David Smith",
          receiverImage: "https://assets.rbl.ms/10390941/origin.jpg",
          lastMessage: "I'm working on that project.",
          dateTime: "12/24",
        },
        {
          receiverName: "Emily Jones",
          receiverImage: "https://ellieclaireartblog.wordpress.com/wp-content/uploads/2017/01/11181731_728103307307685_8382243050577298897_n.jpg",
          lastMessage: "Got it, thanks!",
          dateTime: "12/23",
        },
        {
          receiverName: "Frank Garcia",
          receiverImage: "https://gpjs3bucket.s3.amazonaws.com/wp-content/uploads/2012/09/27021154/story-shiri-painting-jpg.jpg",
          lastMessage: "I'll send you the details.",
          dateTime: "12/22",
        },
        {
          receiverName: "Gina Lee",
          receiverImage: "https://www.okayafrica.com/media-library/image.jpg?id=10390943&width=800&quality=85",
          lastMessage: "Sounds good, let's do it!",
          dateTime: "12/21",
        },
      ];
      
    return (
        <IonPage className='message-list-page'>
            <h1 className='ion-padding-horizontal'>Messages</h1>
            <IonContent className="ion-padding-vertical">
                <div className='message-lists'>
                {messages.map((message, index) => (
                    <div className="message-list-items" key={index} onClick={()=>{
                        router.push('/creative/messages/yi')
                    }}>
                        <div className="img"><img src={message.receiverImage} alt="" /></div>
                        <div className="content">
                            <div className="name-date">
                                <p className="name">{message.receiverName}</p>
                                <span className="date">{message.dateTime}</span>
                            </div>
                            <p className="last-message">{message.lastMessage}</p>
                        </div>
                    </div>
                ))}
                </div>
            </IonContent>
        </IonPage>
    );
};

export default MessageList;