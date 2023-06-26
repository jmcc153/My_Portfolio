import React, { useState } from "react";
import image1 from "./images/stats-card.jpg";
import image2 from "./images/column-card.jpg";
import image3 from "./images/desktop-design.jpg"
import image4 from "./images/weatherReport.png"
import foto from "./images/FotoCV.jpg";
import "./styles/Content.css";
import portfolio from "./images/portafolio.JPG"
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaSass,
  FaBootstrap,
  FaLinkedin
} from "react-icons/fa";
import {AiOutlineMail} from 'react-icons/ai'
import { SiJavascript, SiMysql, SiNextdotjs } from "react-icons/si";
function Content() {
  const [description, setDescription] = useState("");
  const projects = [
    {
      id: 1,
      name: "Frontend Mentor Challenge",
      image: image1,
      description: "This is a challenge from Frontend Mentor. It is a stats preview card component. I used HTML5 and CSS3 to build it.",
      url: "https://jmcc153.github.io/Stats-preview-card-component/",
      button: "button1"
    },
    {
      id: 2,
      name: "Frontend Mentor Challenge",
      image: image2,
      description: "This is a challenge from Frontend Mentor. It is a 3-column preview card component. I used HTML5 and CSS3 to build it.",
      url: "https://jmcc153.github.io/3-column-preview-card-component-FrontendChallenge/",
      button: "button2"
    },
    {
      id: 3,
      name: "Frontend Mentor Challenge",
      image: image3,
      description: "This is a challenge from Frontend Mentor. it is a advice-generator-app. I used HTML5, Javascript and CSS3 to build it.",
      url: "https://jmcc153.github.io/advice-generator-app-FrontendChallenge/",
      button: "button3"
    },
    {
      id: 4,
      name: "Frontend FreeCodeCamp",
      image: portfolio,
      description: "This is a challenge from FreeCodeCamp. It is a portfolio page. I used React and CSS3 to build it.",
      url: "https://jmcc153.github.io/My_Portfolio/",
      button: "button4"
    },
    {
      id: 5,
      name: "Weather Report App",
      image: image4,
      description: "This is a weather report app technical interview for Teleperformance, I used React, ChartJS and Sass, and OpenWeather API to build it.",
      url: "https://jmcc153.github.io/Weather-report/",
      button: "button5"
    },
    /* {
      id: 6,
      name: "Pokedex React Native",
      image: image4,
      description: "This is a Pokedex app, I used React Native, Expo, and PokeApi to build it.",
      url: "https://github.com/jmcc153/React-Native-Pokedex",
      button: "button6"
    } */
  ];
  const skills = [
    {
      id: 1,
      name: "HTML5",
      icon: <FaHtml5 className="icon"/>,
    },
    {
      id: 2,
      name: "Css3",
      icon: <FaCss3Alt className="icon"/>,
    },
    {
      id: 3,
      name: "React",
      icon: <FaReact className="react-icon"/>,
    },
    {
      id: 4,
      name: "Javascript",
      icon: <SiJavascript className="icon"/>,
    },
    {
      id: 5,
      name: "NodeJs",
      icon: <FaNodeJs className="icon"/>,
    },
    {
      id: 6,
      name: "MySql",
      icon: <SiMysql className="icon"/>,
    },
    {
      id: 7,
      name: "GitHub",
      icon: <FaGithub className="icon"/>,
    },
    {
      id: 8,
      name: "Git",
      icon: <FaGitAlt className="icon"/>,
    },
    {
      id: 9,
      name: "NextJs",
      icon: <SiNextdotjs className="icon"/>,
    },
    {
      id: 10,
      name: "Sass",
      icon: <FaSass className="icon"/>,
    },
    {
      id: 11,
      name: "Bootstrap",
      icon: <FaBootstrap className="icon"/>,
    },
  ];

  const handleButton = (e) => {
    switch (e.target.id) {
      case "1":
        if(description === "button1"){
          setDescription("")
        }else{
        setDescription("button1");
        }
        break;
      case "2":
        if(description === "button2"){
          setDescription("")
        }else{
        setDescription("button2");
        }
        break;
      case "3":
        if(description === "button3"){
          setDescription("")
        }else{
        setDescription("button3");
        }
        break;
      case "4":
        if(description === "button4"){
          setDescription("")
        }else{
        setDescription("button4");
        }
        break;
      case "5":
        if(description === "button5"){
          setDescription("")
        }else{
        setDescription("button5");
        }
        break;
      case "6":
        if(description === "button6"){
          setDescription("")
        }else{
        setDescription("button6");
        }
        break;
      default:
        setDescription("");
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
            I'm electronic and telecommunications engineer at the University of Cauca. With experience in networks, web development and telecommunications. Serious, responsible, organized person with a desire to work and learn. With adaptability and teamwork.
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
            {projects.map((project, index) => (
              <li key={index} className="card">
                <h4>{project.name}</h4>
                <a
                  href={project.url}
                  target="_blank" rel="noreferrer"
                >
                  <img className="image-card" src={project.image} alt="imagenCards"></img>
                </a>
                <button className="btnReadMore" id={project.id} onClick={handleButton}>
                  Read More
                </button>
                <div>
                  <p
                    className={
                      project.button === description
                        ? "info-projects"
                        : "description-project-hide"
                    }
                  >
                    {project.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
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
      </div>
      <div>
        <h1 id="skills" className="title-about-me">
          SKILLS
        </h1>
        <div className="container-skills">
          <div className="body-skills">
            {skills.map((skill) => (
              <div className="box-icon" key={skill.id}>
                {skill.icon}
                <h4 className="description-skills">{skill.name}</h4>
              </div>
            ))}
            {skills.map((skill) => (
              <div className="box-icon" key={skill.id}>
                {skill.icon}
                <h4 className="description-skills">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="body-contact">
        <h1 id="contact" className="title-projects">
          CONTACT ME
        </h1>
        <div className="info-contact">
          <h3><AiOutlineMail style={{position:'relative', top:'2px', right:'10px'}}/>Email: jmcastillo153@hotmail.com</h3>
        <div className="networks-contact">
          <a className="icon-contact" href="https://github.com/jmcc153" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a className="icon-contact" href="https://www.linkedin.com/in/jorge-castillo-46a2731b9/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
