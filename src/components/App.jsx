import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { SvgCulcIcon, SvgMailIcon, SvgPhoneIcon } from "./SvgIcons";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export const App = () => {

   return (
      <div className="wrapper">
         <Header />
         <Footer />
      </div>
   )
}

export default App