import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/food.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Busan Restaurant </h1>
        <p> WE CAN'T WAIT TO SERVE YOU ! <br />
          Live ... Love ... Eat
        </p>
       
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
