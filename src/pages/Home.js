import React from "react";
import { json } from "react-router-dom";
import aboutmedata from "./aboutmedata";
import Header from ".././components/Header";

export default function Home() {
  const handleClickScroll = () => {
    const element = document.getElementById('carouselscroll');
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  };
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

