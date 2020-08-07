import React from 'react';
import {Link} from 'react-router-dom'

import logoimg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './style.css'

const Landing = () => {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoimg} alt="Logo Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={landingImg} alt="asd" className="hero-image" />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="studyIcon" /> Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="giveClassesIcon" />
            Dar aulas
          </Link>
        </div>
        <span className="total-connections">
          Total de 200 conexões{" "}
          <img src={purpleHeartIcon} alt="giveClassesIcon" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
