import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import logo from '../../../assets/icons/nkossa_logo.svg'
import React, { useState, useEffect } from "react";
import "./home.css";
import ProductList from "./components/ProductList";
import ArtsWorks from "../../../components/ArtsWorks";
import { getAllProducts } from "../../../services/product";
import Collections from "./components/Collections";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { menu } from "ionicons/icons";

const Home: React.FC = () => {
  const [Arts, setArts] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState('arts')

  const [tabButton, setActiveTabButton] = useState("for_you");

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const colRef = collection(db, "Products");
    const list: any[] = [];

    const unsubscribe = onSnapshot(colRef, (snapshot) => {
      snapshot.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setArts(list);
    });
  }

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div className="home-top-section">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
<IonIcon icon={menu} size="large" />


        </div>
        <div className="home-section-1">
          <h2>Newest Artworks</h2>

          <ProductList arts={Arts} />
        </div>

        <div className="sticky-top">

          <button className={activeTab === 'arts' ? 'active' : ''} onClick={()=>{
            setActiveTab('arts')
          }}>For you</button>
          <button className={activeTab === 'collections' ? 'active' : ''} onClick={()=>{
            setActiveTab('collections')
          }}>Collections</button>

        </div>

        { activeTab === 'arts' && <ArtsWorks arts={Arts} />}
        { activeTab === 'collections' && <Collections/>
         }
      </IonContent>
    </IonPage>
  );
};

export default Home;

