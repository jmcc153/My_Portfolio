import React, { useState } from "react";
import svg from "./web-development-svgrepo-com.svg";
import image1 from "./images/stats-card.jpg";
import image2 from "./images/column-card.jpg";
import foto from "./images/_DSC0022.JPG";
import "./styles/Content.css";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaSass,
  FaBootstrap,
} from "react-icons/fa";
import { SiJavascript, SiMysql, SiNextdotjs } from "react-icons/si";
function Content() {
  const [description, setDescription] = useState({
    buttons: {
      button1: false,
      button2: false,
      button3: false,
      button4: false,
      button5: false,
      button6: false,
    },
  });

  const handleButton = (e) => {
    switch (e.target.id) {
      case "button1":
        setDescription({
          ...description,
          buttons: {
            button1: !description.buttons.button1,
          },
        });
        break;
      case "button2":
        setDescription({
          ...description,
          buttons: {
            button2: !description.buttons.button2,
          },
        });
        break;
      case "button3":
        setDescription({
          ...description,
          buttons: {
            button3: !description.buttons.button3,
          },
        });
        break;
      case "button4":
        setDescription({
          ...description,
          buttons: {
            button4: !description.buttons.button4,
          },
        });
        break;
      case "button5":
        setDescription({
          ...description,
          buttons: {
            button5: !description.buttons.button5,
          },
        });
        break;
      case "button6":
        setDescription({
          ...description,
          buttons: {
            button6: !description.buttons.button6,
          },
        });
        break;
    }
  };

  return (
    <div>
      <h1 id="about_me" className="title-about-me">
        About me
      </h1>
      <div className="content-body">
        <div className="container-photo">
          <img src={foto} alt="" />
        </div>
        <div className="box-description">
          <div className="container-description">
            <h3>Hey!</h3>
            <p>
              I'M A FRONTEND DEVELOPMENT CURRENTLY I'M DOING MY LAST SEMESTER AT
              UNIVERSITY
            </p>
          </div>
        </div>
      </div>
      <div className="body-projects">
        <hr></hr>
        <h1 id="projects" className="title-projects">
          Projects
        </h1>
        <div>
          <ul className="container-projects">
            <li className="card">
              <h4>Frontend Challenge</h4>
              <a
                href="https://jmcc153.github.io/Stats-preview-card-component/"
                target="_blank"
              >
                <img className="image-card" src={image1}></img>
              </a>
              <button id="button5" onClick={handleButton}>
                Read More
              </button>
              <div>
                <p
                  className={
                    description.buttons.button5
                      ? ""
                      : "description-project-hide"
                  }
                >
                  AJSFKAFJSKASFJKASFJKASFJKASKFKSF
                </p>
              </div>
            </li>
            <li className="card">
              <h4>Frontend Challenge</h4>
              <a href="https://codepen.io/jmcc153/pen/XWMxeRO" target="_blank">
                <img className="image-card" src={image2}></img>
              </a>
              <button id="button6" onClick={handleButton}>
                Read More
              </button>
              <div>
                <p
                  className={
                    description.buttons.button6
                      ? ""
                      : "description-project-hide"
                  }
                >
                  AJSFKAFJSKASFJKASFJKASFJKASKFKSF
                </p>
              </div>
            </li>
            <li className="card">
              <h4>Frontend Challenge</h4>
              <a href="https://codepen.io/jmcc153/pen/XWMxeRO" target="_blank">
                <img
                  className="image-card"
                  src="https://shots.codepen.io/jmcc153/pen/poeZwYP-320.webp?version=1623191224"
                ></img>
              </a>
              <button id="button1" onClick={handleButton}>
                Read More
              </button>
              <div>
                <p
                  className={
                    description.buttons.button1
                      ? ""
                      : "description-project-hide"
                  }
                >
                  AJSFKAFJSKASFJKASFJKASFJKASKFKSF
                </p>
              </div>
            </li>
            <li className="card">
              <h4>Frontend Challenge</h4>
              <a href="https://codepen.io/jmcc153/pen/XWMxeRO" target="_blank">
                <img
                  className="image-card"
                  src="https://shots.codepen.io/jmcc153/pen/wvJEKxw-320.webp?version=1623359476"
                ></img>
              </a>
              <button id="button2" onClick={handleButton}>
                Read More
              </button>
              <div>
                <p
                  className={
                    description.buttons.button2
                      ? ""
                      : "description-project-hide"
                  }
                >
                  AJSFKAFJSKASFJKASFJKASFJKASKFKSF
                </p>
              </div>
            </li>
            <li className="card">
              <h4>Frontend Challenge</h4>
              <a href="https://codepen.io/jmcc153/pen/XWMxeRO" target="_blank">
                <img
                  className="image-card"
                  src="https://shots.codepen.io/jmcc153/pen/YzZOgvv-320.webp?version=1623370069"
                ></img>
              </a>
              <button id="button3" onClick={handleButton}>
                Read More
              </button>
              <div>
                <p
                  className={
                    description.buttons.button3
                      ? ""
                      : "description-project-hide"
                  }
                >
                  AJSFKAFJSKASFJKASFJKASFJKASKFKSF
                </p>
              </div>
            </li>
            <li className="card">
              <h4>Frontend Challenge</h4>
              <a href="https://codepen.io/jmcc153/pen/XWMxeRO" target="_blank">
                <img
                  className="image-card"
                  src="https://shots.codepen.io/jmcc153/pen/XWMxeRO-512.webp?version=1623705502"
                ></img>
              </a>
              <button id="button4" onClick={handleButton}>
                Read More
              </button>
              <div>
                <p
                  className={
                    description.buttons.button4
                      ? ""
                      : "description-project-hide"
                  }
                >
                  AJSFKAFJSKASFJKASFJKASFJKASKFKSF
                </p>
              </div>
            </li>
          </ul>
        </div>
        <svg
          class="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g class="parallax">
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
      </div>
      <div>
        <h1 id="skills" className="title-about-me">
          SKILLS
        </h1>
        <div className="container-skills">
          <div className="body-skills">
            <div className="box-icon">
              <FaReact className="react-icon" />
              <h4 className="description-skills">React</h4>
            </div>
            <div className="box-icon">
              <FaHtml5 className="icon" />
              <h4 className="description-skills">HTML5</h4>
            </div>
            <div className="box-icon">
              <FaCss3Alt className="icon" />
              <h4 className="description-skills">Css3</h4>
            </div>
            <div className="box-icon">
              <SiJavascript className="icon" />
              <h4 className="description-skills">Javascript</h4>
            </div>
            <div className="box-icon">
              <FaNodeJs className="icon" />
              <h4 className="description-skills">NodeJs</h4>
            </div>
            <div className="box-icon">
              <SiMysql className="icon" />
              <h4 className="description-skills">MySql</h4>
            </div>
            <div className="box-icon">
              <FaGithub className="icon" />
              <h4 className="description-skills">Github</h4>
            </div>
            <div className="box-icon">
              <FaGitAlt className="icon" />
              <h4 className="description-skills">Git</h4>
            </div>
            <div className="box-icon">
              <SiNextdotjs className="icon" />
              <h4 className="description-skills">NextJs</h4>
            </div>
            <div className="box-icon">
              <FaSass className="icon" />
              <h4 className="description-skills">Sass</h4>
            </div>
            <div className="box-icon">
              <FaBootstrap className="icon" />
              <h4 className="description-skills">Bootstrap</h4>
            </div>

            <div className="box-icon">
              <FaReact className="react-icon" />
              <h4 className="description-skills">React</h4>
            </div>
            <div className="box-icon">
              <FaHtml5 className="icon" />
              <h4 className="description-skills">HTML5</h4>
            </div>
            <div className="box-icon">
              <FaCss3Alt className="icon" />
              <h4 className="description-skills">Css3</h4>
            </div>
            <div className="box-icon">
              <SiJavascript className="icon" />
              <h4 className="description-skills">Javascript</h4>
            </div>
            <div className="box-icon">
              <FaNodeJs className="icon" />
              <h4 className="description-skills">NodeJs</h4>
            </div>
            <div className="box-icon">
              <SiMysql className="icon" />
              <h4 className="description-skills">MySql</h4>
            </div>
            <div className="box-icon">
              <FaGithub className="icon" />
              <h4 className="description-skills">Github</h4>
            </div>
            <div className="box-icon">
              <FaGitAlt className="icon" />
              <h4 className="description-skills">Git</h4>
            </div>
            <div className="box-icon">
              <SiNextdotjs className="icon" />
              <h4 className="description-skills">NextJs</h4>
            </div>
            <div className="box-icon">
              <FaSass className="icon" />
              <h4 className="description-skills">Sass</h4>
            </div>
            <div className="box-icon">
              <FaBootstrap className="icon" />
              <h4 className="description-skills">Bootstrap</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="body-contact">
        <h1 id="contact" className="title-projects">
          CONTACT ME
        </h1>
      </div>
    </div>
  );
}

export default Content;
