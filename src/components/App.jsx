import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { SvgCulcIcon, SvgMailIcon, SvgPhoneIcon } from "./SvgIcons";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import { ShowContext } from "./UseContext";

export const App = () => {

   let [showPhone, setShowPhone] = useState(false)
   let [showCulc, setShowCulc] = useState(false)
   return (
      <ShowContext.Provider value={{
         phone: showPhone,
         setPhone: setShowPhone,
         culc: showCulc,
         setCulc: setShowCulc,
      }}>
         <div className="wrapper">
            <Header />
            <Main />
            <Footer />
         </div>
      </ShowContext.Provider>
   )
}

export default App