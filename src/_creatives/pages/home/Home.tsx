import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './home.css'
import ProductList from './components/ProductList';
import ArtsWorks from '../../../components/ArtsWorks';

const Home: React.FC = () => {

    return (
        <IonPage>
            <IonContent className="ion-padding">
            <div className="home-top-section">
                <div className="logo">
                    <img src="" alt="" />
                </div>
            </div>
                <div className="home-section-1">
                    <h2>Newest Artworks</h2>
                    <ProductList />
                </div>

                <div className="sticky-top">
                    <button className='active'>For you</button>
                    <button>For me</button>
                </div>

                <ArtsWorks />
            </IonContent>
        </IonPage>
    );
};

export default Home;