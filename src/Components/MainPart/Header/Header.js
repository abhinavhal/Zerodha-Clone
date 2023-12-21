import React from "react";
import { SiZerodha } from "react-icons/si";
import Abhi_Photo from "./Abhi_Photo.jpg";
import { IoNotificationsOutline } from "react-icons/io5";
import './Header.css'

const Header = () => {
  return (
    <div className="dashboard-header">
      <div className="left-header">
        <h3>Nifty</h3>
        <h3>Sensex</h3>
      </div>

      <div className="right-header">
        <div className="right-header-icon">
          <SiZerodha />
        </div>

        <div className="right-header-contents">
          <h3>Dashboard</h3>
          <h3>Holdings</h3>
          <h3>Funds</h3>
        </div>

        <div className="right-right-header">
          <IoNotificationsOutline />
          <img src={Abhi_Photo} alt="" />
          <h3>Abhishek</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
