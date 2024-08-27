import { IonButton, IonContent, IonFooter, IonHeader, IonIcon, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import BackBtn from '../../../components/BackBtn';
import { arrowUpOutline } from 'ionicons/icons';

const ProductDetail: React.FC = () => {

    return (
        <IonPage className='product-detail-page'>
            <BackBtn title='Assas Madu' />
            <IonContent className=" product-details">
            <div className="img">
                <img src="https://fineartshippers.com/wp-content/uploads/2018/12/Joshua-Kabitanya-1.jpg" alt="" />
            </div>
            <div className="product-detail-content ion-padding">
                <div className="user-details">
                    <div className="avatar"><img src="" alt="" /></div>
                    <p className="name"><b>Pa Ndongmo</b></p>
                </div>
                <h2>Across the Savannah</h2>
                <p><b>Story of this art</b></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit facilis nobis sunt eius porro quaerat enim labore dignissimos, aut ad rem ipsam esse sit fuga corrupti ut minima nihil reprehenderit obcaecati beatae eum sequi. Quis id sed nisi voluptas unde eveniet, illum laudantium at excepturi, et deserunt ducimus explicabo sint dignissimos omnis doloribus quaerat laboriosam cum rem iusto voluptatem beatae quisquam tempore? Nulla dolorem tenetur perferendis, animi, facilis, numquam earum beatae placeat quisquam voluptatum labore molestias necessitatibus atque! Accusamus odit velit natus ab consectetur atque. Soluta similique, adipisci veniam minus, expedita quis fugit, ex distinctio eveniet blanditiis accusantium voluptates explicabo suscipit temporibus natus dolor ipsam assumenda numquam repudiandae error! In, inventore suscipit quaerat aliquam ad dolorum doloribus optio ipsum sit omnis laboriosam voluptatem doloremque explicabo quia nam ducimus exercitationem, quisquam tenetur itaque perferendis? Ipsum odio, incidunt rem sed perspiciatis ad ex cupiditate maxime dolores deserunt iste facilis veniam ab repellat tempore magni corporis cumque voluptates impedit fugit ipsa nesciunt hic deleniti pariatur. Nesciunt, modi? Necessitatibus sequi, perferendis earum sunt optio neque in voluptatibus cum quod quis nemo possimus commodi deserunt placeat saepe modi eligendi ipsum nam officia nobis error consequatur maiores! Quam cupiditate ipsa reiciendis rerum soluta nemo perspiciatis aliquam.</p>

            <div className="audio">
                <p><b>Play audio story</b></p>
                <audio controls>
                    <source src='https://www.google.com/search?sca_esv=f5889c7ba9b3630a&sxsrf=ADLYWILUX_gUZNugLMRQOwQuONFHVOiRmg:1724713587726&q=cameroon+art+videos&tbm=vid&source=lnms&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWfbQph1uib-VfD_izZO2Y5sC3UdQE5x8XNnxUO1qJLaQR2rwhLa89xym2ORbEZb-gMEn9Bi7m91EFT7zcAU-HIQzmbbML_UOXYhZ97WdEzsZFz1UcTEJ6S5xcxkIFMJsuAkuMYIsuE8n4qlbbBRsS0VaDZtY&sa=X&ved=2ahUKEwjyhPHl4pOIAxUGrpUCHUWQCj0Q0pQJegQIExAB&biw=500&bih=655&dpr=1#' type='audio/mpeg' />
                    Your browser does not support the audio element.

                </audio>
            </div>

            <div className="video">
                <p><b>Play audio story and also visuals of the art</b></p>
                <video src=""></video>
            </div>
            </div>

            </IonContent>
            <IonFooter>
                <p><b>US $1, 000</b></p>
                <IonButton>
                    <IonIcon color='white' icon={arrowUpOutline} />
                    <IonLabel>Purchase</IonLabel>
                </IonButton>
            </IonFooter>
        </IonPage>
    );
};

export default ProductDetail;