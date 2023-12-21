import React from "react";
import "./Footer.css";
import { FaApple, FaPlay } from "react-icons/fa";
import { SiZerodha } from "react-icons/si";

const Footer = () => {
  return (

    <div className="footer">
        
      <div className="footer-icons">
        <FaApple />
        <FaPlay />
      </div>

      <div className="zerodha-footer-icons">
        <SiZerodha />
        <h6>Zerodha</h6>
      </div>

      <div className="footer-signup-redirect">
        <h5>Don't have a account signUp now!!!</h5>
      </div>

      <div className="footer-text">
        <h5>Zerodha Broking Limited: Member of NSE, BSE CDSL SEBI Reg. no. IN-DP-431-2019 | Zerodha Commodities Pvt. Ltd.: MCX | Smart Online Dispute Resolution | SEBI SCORES</h5>
      </div>

    </div>
  );
};

export default Footer;
