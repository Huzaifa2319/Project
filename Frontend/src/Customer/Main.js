import React from "react";
import vid from "../images/vid.mp4";
import "../style/Main_vid.css";
const Main = () => {
  return (
    <div className="main">
      <video src={vid} autoPlay loop muted />
    </div>
  );
};

export default Main;
