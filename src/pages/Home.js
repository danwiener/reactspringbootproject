import React, { useState, useEffect } from 'react';
import { json } from "react-router-dom";
import aboutmedata from "./aboutmedata";
import Header from ".././components/Header";

// List of available themes
const themes = {
  default: "home.css",
  theme2: "test3.css",
  theme3: "test2.css",
  theme4: "test4.css",
  theme6: "test6.css",
  theme7: "test7.css",
  theme8: "test8.css",
  theme9: "test9.css",
  theme10: "test10.css",
  theme11: "test11.css",
  theme12: "test12.css",
  theme13: "test13.css",
  theme14: "test14.css"
  // Add more themes as needed
};

export default function Home() {
  return (
    <div className="parent-container">

      <div className="introduction flex-with-left">
        <div className="title-container">
          <div className="titlehover">
            <h1>DAN WIENER</h1>
            <div id="line" className="line"></div>
          </div>
          <p className="titlehoversubtext d-flex justify-content-between">I love making software.</p>
        </div>
      </div>
      
      <div className="aboutmetext" id='projectsid'>
          {aboutmedata.map(aboutme=>{
            return <div className="col-md-4">
              <div className="position-relative project">
                <div className="project-content">
                  <p>{aboutme.description}</p>
                </div>
              </div>
            </div>
          })}
      </div>


    </div>
  );
  
}

