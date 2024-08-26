import { useState, useEffect } from "react";
import "./App.css";
import { Redirect, Route, useLocation } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  homeOutline,
  searchOutline,
  chatboxOutline,
  personCircleOutline,
  home,
  search,
  chatbox,
  personCircle,
  chatboxEllipsesSharp,
  chatboxEllipses,
  searchCircleSharp,
  chatboxEllipsesOutline,
  homeSharp,
  personCircleSharp,
  searchSharp,
} from 'ionicons/icons';
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */

/* Theme variables */
//import "./theme/variables.css";
import "./App.css";

// imports for various pages and components
// creative panel
import Login from "./_creatives/pages/auth/Login";
import Register from "./_creatives/pages/auth/Register";
import ChatBot from "./_creatives/pages/chatbot/ChatBot";
import Favorites from "./_creatives/pages/favorites/Favorites";
import Home from "./_creatives/pages/home/Home";
import MessageDetails from "./_creatives/pages/messages/MessageDetail";
import MessageList from "./_creatives/pages/messages/MessageList";
import Payment from "./_creatives/pages/payments/Payment";
import SelectPayment from "./_creatives/pages/payments/SelectPayment";
import ProductDetail from "./_creatives/pages/products/ProductDetail";
import EditProfile from "./_creatives/pages/profile/EditProfile";
import UploadProduct from "./_creatives/pages/products/UploadProduct";
import Search from "./_creatives/pages/search/Search";
import Profile from "./_creatives/pages/profile/Profile";
import BottomTabController from "./components/buttomTabController";
import WelcomeScreen from "./intro_on_boarding";
import RolePage from "./intro_on_boarding/role";
import SetUpCreativeAccount from "./_creatives/pages/setup_account_onboarding";
import { render } from "@testing-library/react";
// art lover panel

setupIonicReact();

const App: React.FC = () => {
  const [hideTabBar, setHideTabBar] = useState(false);
  const [showCreativeTabBar, setShowCreativeTabBar] = useState(false);


  return (
    <IonApp>
      <IonReactRouter>
        <BottomTabController
          setHideTabBar={setHideTabBar}
          setShowCreativeTabBar={setShowCreativeTabBar}
        />
        <IonTabs>
          <IonRouterOutlet animated={true}>
            {/* Creative pages */}

            <Redirect exact path="/" to="/welcome" />

            <Route path="/creative/auth/login" component={Login} />
            <Route path="/creative/auth/register" component={Register} />
            <Route
              path="/creative/tabs/home"
              render={() => <Home />}
              exact={true}
            />
            <Route
              path="/creative/signup"
              render={() => <SetUpCreativeAccount />}
            />
            <Route path="/welcome" render={() => <WelcomeScreen />} />
            <Route path="/select/roles" render={() => <RolePage />} />
            <Route path="/creative/chatbot" component={ChatBot} />
            <Route path="/creative/favorites" component={Favorites} />
            <Route path="/creative/tabs/messages" component={MessageList} />
            <Route path="/creative/messages/:id" component={MessageDetails} />
            <Route path="/creative/payment" component={Payment} />
            <Route path="/creative/selectpayment" component={SelectPayment} />
            <Route path="/creative/products/:id" component={ProductDetail} />
            <Route path="/creative/products/add" component={UploadProduct} />
            <Route path="/creative/tabs/profile" component={Profile} />
            <Route path="/creative/profile/edit" component={EditProfile} />
            <Route path="/creative/tabs/search" component={Search} />

            {/* Arts Lover pages */}
          </IonRouterOutlet>

          

          {/* Creative Tab bar */}
          {showCreativeTabBar && (

            <IonTabBar slot="bottom" className={hideTabBar ? "hide-tab-bar" : "ion-tab-bar"}>
        <IonTabButton tab="Home" href="/creative/tabs/home">
          <IonIcon icon={location.pathname == "creative/tabs/home" ? homeSharp : homeOutline} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>

        <IonTabButton tab="search" href="/creative/tabs/search">
          <IonIcon icon={location.pathname == "/creative/tabs/search" ? searchOutline : searchSharp} />
          <IonLabel>Search</IonLabel>
        </IonTabButton>

        <IonTabButton tab="Messages" href="/creative/tabs/messages">
          <IonIcon icon={location.pathname == "/creative/tabs/messages" ? chatboxEllipsesSharp : chatboxEllipsesOutline} />
          <IonLabel>Messages</IonLabel>
        </IonTabButton>

        <IonTabButton tab="Profile" href="/creative/tabs/profile">
          <IonIcon icon={location.pathname == "/creative/tabs/profile" ? personCircleSharp : personCircleOutline} />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
          )}

          {/* Art Lover Tab bar */}
          {!showCreativeTabBar && (
            <IonTabBar
              slot="bottom"
              className={hideTabBar ? "hide-tab-bar" : ""}
            >
              <IonTabButton tab="Home" href="/creatives/tabs/home">
                <IonIcon icon={homeOutline} />
                <IonLabel>User Home</IonLabel>
              </IonTabButton>
            </IonTabBar>
          )}
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
