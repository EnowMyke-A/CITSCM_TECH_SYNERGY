import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import "./home.css";
import ProductList from "./components/ProductList";
import ArtsWorks from "../../../components/ArtsWorks";
import { getAllProducts } from "../../../services/product";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../config/firebase";

const Home: React.FC = () => {
  const [Arts, setArts] = useState<any[]>([]);

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
            <img src="" alt="" />
          </div>
        </div>
        <div className="home-section-1">
          <h2>Newest Artworks</h2>

          <ProductList arts={Arts} />
        </div>

        <div className="sticky-top">
          <button
            className={tabButton == "for_you" ? "active" : ""}
            onClick={() => setActiveTabButton("for_you")}
          >
            For you
          </button>
          <button
            className={tabButton == "for_me" ? "active" : ""}
            onClick={() => setActiveTabButton("for_me")}
          >
            For me
          </button>
        </div>

        <ArtsWorks arts={Arts} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
