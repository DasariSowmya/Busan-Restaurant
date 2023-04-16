import React from "react";
import image1 from "../assets/image1.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${image1})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Hello foodies!! our korean food restuarent serves the best korean food. 
          Our first and most aim is to cook food with love and make our customers happy.
          Busan Restaurant provide you with different cuisines of food to satisfy your hunger.
          We believe in the commitment to our community and in fostering long term relationships
          with local farmers and fishermen. Our menus reflect these connections, featuring local, seasonal produce and sustainably sourced seafood and meats.
          We use the freshest ingredients in preparing our food to provide the best quality and taste. 
          Try our delicious food today! 

        </p>
      </div>
    </div>
  );
}

export default About;
