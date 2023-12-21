import React from "react";
import Footer from "../Footer/Footer";
import './MainPage.css'
import SignIn from "../LoginPage/SignIn";

const MainPage = () => {
  return (
    <div className="main-container">
      <SignIn/>
      <Footer />
    </div>
  );
};

export default MainPage;
