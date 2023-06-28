import React from "react";
import  "./styles/Header.css";


function Header({scrollPosition}) {

  return (
    <div>
      <header>
        <div id="home" className="items">
          <h1 className="title-name">Jorge Castillo</h1>
        </div>
        <ul className={scrollPosition <= 250 ? 'nav-bar-top' : 'nav-bar'}>
        {scrollPosition <= 250 ? '' : <li className="home-li">
            <a className="anchor" href="#home">JC</a>
          </li>}
          <li>
            <a className="anchor" href="#about_me">ABOUT ME</a>
          </li>
          <li>
            <a className="anchor" href="#projects">PROJECTS</a>
          </li>
          <li>
            <a className="anchor" href="#skills">SKILLS</a>
          </li>
          <li>
            <a className="anchor" href="#contact">CONTACT ME</a>
          </li>
        </ul>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(228,235,235,0.7)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(228,235,235,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(228,235,235,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(228,235,235,1)" />
          </g>
        </svg>
      </header>
    </div>
  );
}

export default Header;
