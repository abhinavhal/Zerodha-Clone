import React from "react";
import './Dashboard.css'
import Header from "../Header/Header";
import WatchList from "../MainComponents/WatchList/WatchList";

const Dashboard = () => {
  return (
    <div className="container">
      <Header />

      <div className="main-pagecontainer">
        <WatchList />
      </div>


      
    </div>
  );
};

export default Dashboard;
