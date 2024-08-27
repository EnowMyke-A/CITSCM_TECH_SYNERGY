import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";

import { Redirect, Route, useLocation } from "react-router-dom";

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
} from "ionicons/icons";

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


import { useRef, useEffect, useState } from "react";

import homeIcon from "./assets/icons/home.svg";
import messageIcon from "./assets/icons/message.svg";
import searchIcon from "./assets/icons/search.svg";
import profileIcon from "./assets/icons/account_circle.svg";




const AppBody: React.FC = () => {
  const [hideTabBar, setHideTabBar] = useState(false);
  const [showCreativeTabBar, setShowCreativeTabBar] = useState(false);
  

  const currentLocation = useLocation();

  return (
    <>
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
          <IonTabBar
            slot="bottom"
            className={hideTabBar ? "hide-tab-bar" : "ion-tab-bar"}
          >
            <IonTabButton
              tab="home"
              href="/creative/tabs/home"
              className={
                currentLocation.pathname == "/creative/tabs/home"
                  ? "tab-selected"
                  : ""
              }
            >
              <IonIcon src={homeIcon} />
            </IonTabButton>

            <IonTabButton
              tab="search"
              href="/creative/tabs/search"
              className={
                currentLocation.pathname == "/creative/tabs/search"
                  ? "tab-selected"
                  : ""
              }
            >
              <IonIcon src={searchIcon} />
            </IonTabButton>

            <IonTabButton
              tab="messages"
              href="/creative/tabs/messages"
              className={
                currentLocation.pathname == "/creative/tabs/messages"
                  ? "tab-selected"
                  : ""
              }
            >
              <IonIcon src={messageIcon} />
            </IonTabButton>

            <IonTabButton
              tab="profile"
              href="/creative/tabs/profile"
              className={
                currentLocation.pathname == "/creative/tabs/profile"
                  ? "tab-selected"
                  : ""
              }
            >
              <IonIcon src={profileIcon} />
            </IonTabButton>
          </IonTabBar>
        )}

        {/* Art Lover Tab bar */}
        {!showCreativeTabBar && (
          <IonTabBar slot="bottom" className={hideTabBar ? "hide-tab-bar" : ""}>
            <IonTabButton tab="Home" href="/creatives/tabs/home">
              <IonIcon icon={homeOutline} />
              <IonLabel>User Home</IonLabel>
            </IonTabButton>
          </IonTabBar>
        )}
      </IonTabs>
    </>
  );
};

export default AppBody;
