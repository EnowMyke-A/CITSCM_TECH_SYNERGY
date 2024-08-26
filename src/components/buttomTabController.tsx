import React from "react";
import { useEffect } from "react"
import { useLocation } from "react-router";

interface Props{
    setShowCreativeTabBar: Function;
    setHideTabBar:Function;
}


const BottomTabController:React.FC<Props> = ({setShowCreativeTabBar, setHideTabBar})=>{

    const location = useLocation();

    useEffect(() => {
        location.pathname.includes('/creative/tabs')
          ? setShowCreativeTabBar(true)
          : setShowCreativeTabBar(false);
    
        location.pathname.includes('/tabs/')
          ? setHideTabBar(false)
          : setHideTabBar(true);
      }, [location.pathname]);
    
      return(
        <></>
      );
}

export default BottomTabController;