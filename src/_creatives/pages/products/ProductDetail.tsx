import { IonButton, IonContent, IonFooter, IonHeader, IonIcon, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import BackBtn from '../../../components/BackBtn';
import { arrowUpOutline } from 'ionicons/icons';
import { useParams } from 'react-router';
import { getProductById } from '../../../services/product';

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>(); 
    const [product, setProduct] = useState<any>({}); 

    useEffect(() => {
        if (id) {
            getProduct(id); 
        }
    }, [id]);

    async function getProduct(id: string) {
        try {
            const pdt = await getProductById(id);
            if (pdt) {
                setProduct(pdt);
            }
            console.log(product);
        } catch (error) {
            console.error(error);
        }
    }

return (
        <IonPage className='product-detail-page'>
            <BackBtn title='Assas Madu' />
            <IonContent className="product-details">
                <div className="img">
                    <img src={product.product_link} alt="" />
                </div>
                <div className="product-detail-content ion-padding">
                    <div className="user-details">
                        <div className="avatar"><img src={product.product_link} alt="" /></div>
                        <p className="name"><b>{product.author_name}</b></p>
                    </div>
                    <h2>Across the Savannah</h2>
                    <p><b>Story of this art</b></p>
                    <p>Lorem ipsum dolor sit amet...</p>

                    <div className="audio">
                        <p><b>Play audio story</b></p>
                        <audio controls>
                            <source src='audio-link' type='audio/mpeg' />
                            Your browser does not support the audio element.
                        </audio>
                    </div>

                    <div className="video">
                        <p><b>Play audio story and also visuals of the art</b></p>
                        <video src="video-link"></video>
                    </div>
                </div>
            </IonContent>
            <IonFooter>
                <p><b>US $1,000</b></p>
                <IonButton>
                    <IonIcon color='white' icon={arrowUpOutline} />
                    <IonLabel>Purchase</IonLabel>
                </IonButton>
            </IonFooter>
        </IonPage>
    );
};

export default ProductDetail;
