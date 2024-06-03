import React, {  useEffect } from "react";
import "./App.css"; // Ensure this file contains your CSS
import bgImage from "./bgportfolio.png"; // Ensure you have this image in your project directory
import cv from "./ayubcv.png"
export default function Home() {
  useEffect(() => {
    window.addEventListener('load', () => {
      document.body.classList.add('loaded');
    });
  }, []);
  // const time = new Date().toLocaleString();
  // const [toggle, setToggle] = useState(false);
  // const style = {
  //   color: "white",
  // };

  // const handleToggle = () => {
  //   setToggle(!toggle);
  // };

  return (
    <>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>

    </head>
      <style>
        {`
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poetsen+One&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

          body {
            background-image: url(${bgImage});
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
            margin: 0;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
          }
        `}
      </style>
      <div className="context">
        <header>
          <nav>
          <a href={cv} download >
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAYtJREFUaEPtmQGOAiEMRTs3c0+2ejK92a4/8ccGYahQBibpJMZoB+ijv8B0Njn5tZ3cfwmA2RH8JgJXEfl1cPj27AN9uVwWgIuI3F1Ge3fiBmEBgPOA8L5cICwAf96eq/66IY4EgLO5HOqCOBIAY5UWgmaIowGgHleIGQCuELMA3CBmArhAzAbohlgBoAtiFYA9iF0fVwIoQSwD0HoiCYCRhzlLVCICEQGLTnbuCQmFhEJCrQnyaleSkE4uVC3w4TNvakNXsLG6kUtMyzgfKD1nIbZlkQrffFzM2TA4SzSpnYC5uR62CqFjFr0eIvKjfmsbnKI9BbQsEMMBIA1UFeCknmFd0SMAYOA0naKktPzSKAwF0IPpakMaAdyn/1sGgDOXlh5TANZ9GBUCLCGhXOGXAFpeuSReGqAkL8qJ+VDb54blQG1gL3sAWHTqNduHbmQjndZ9h4S8Xu61REzv4Nn2lsOcdblrcbDWBucrQBQvK0Bpx6050Go3v7GxArQ6MrxdAAyf4soAp4/AP2SKaDFm3NjXAAAAAElFTkSuQmCC" alt="Download CV" />
            </a>
          <a href="https://github.com/Ayub-AH" target="_blank" className="nav" rel="noreferrer"><i id="github"className="fab fa-github fa-2x"></i></a>
          <a href="https://www.linkedin.com/in/ayub-hassan55/" target="_blank" className="nav" rel="noreferrer"><i className="fab fa-linkedin fa-2x" style={{ color: '#0077b5' }}></i></a>
            {/* <a href="#" className="tooltip">My Tech Stack<span className="tooltiptext">Ruby,Python,Java,Javascript,Django,Ruby On Rails,React,Vue.Js,Stimulus, HTML, CSS , Bootstrap, </span></a> */}
          </nav>
        </header>
        <div className="big-div">
          <div id="smaller-div" className="child">
            <h1>Welcome!</h1>
            <div className="smalldiv">
            <h3>My Name is <span className="span">Ayub</span> and I am a <span className="span">FullStack Developer!</span></h3>
             <p>

                I am a tech devotee who relishes the programmer lifestyle. My journey began the moment I clicked my first button on a screen, navigating through applications.
                <br />
                <br/>
                The instant fascination of exploring an app ignited a passion within me, compelling me to create that same sense of wonder for others.
                <br />
                <br/>

                That spark has driven me to where I am today, dedicated to crafting engaging and innovative software for the next generation of tech enthusiasts.
              </p>
              </div>
          </div>
          <div id="side-div" className="child">
            <h2 className="projects">Projects</h2>
            <a target= "_blank" href="https://github.com/peeta98/shape-sync-project" rel="noreferrer">ShapeSync</a>
            <a  target= "_blank" href="https://github.com/Ayub-AH/GoalGraze" rel="noreferrer">GoalGraze</a>
            <a target= "_blank" href="https://github.com/peeta98/earthbnb-clone" rel="noreferrer">EarthBnB</a>
          </div>
        </div>
        {/* <div className="techStack">
          <figure>
          <img src={rorimg} alt="Ruby On Rails" height="50px" width="50px"/>
          <figcaption>Ruby On Rails</figcaption>
          </figure>
          <figure>
          <img src={ruby} alt="Ruby" height="50px" width="50px"/>
          <figcaption>Ruby</figcaption>

          </figure>
          <figure>
        <img src={python} alt="Python" height="50px" width="50px"/>
        <figcaption>Python</figcaption>

        </figure>
        <figure>
        <img src={django} alt="Django" height="50px" width="50px"/>
        <figcaption>Django</figcaption>

        </figure>
        <figure>
        <img src={js} alt="Javascript" height="50px" width="50px"/>
        <figcaption>Javascript</figcaption>

        </figure>
        <figure>
        <img src={react} alt="React" height="50px" width="50px"/>
        <figcaption>React</figcaption>

        </figure>
        <figure>
        <img src={stimulus} alt="Stimulus" height="50px" width="50px"/>
        <figcaption>Stimulus</figcaption>

        </figure>
        <figure>
        <img src={bootstrap} alt="Bootstrap" height="50px" width="50px"/>
        <figcaption>Bootstrap</figcaption>
        </figure>
        <figure>
        <img src={aws} alt="AWS" height="50px" width="50px"/>
        <figcaption>AWS</figcaption>
        </figure>
        <figure>
        <img src={sql} alt="SQL" height="50px" width="50px"/>
        <figcaption>SQL</figcaption>
      </figure> */}

        {/* </div> */}
        <div className="footer">
        <div className="techStack">
      <h2 >My Tech Stack</h2>
          <p >Python | Ruby | Django | Ruby On Rails | Javascript | React | Stimulus | AWS</p>
          </div>
          <div className="contact">
            <h2>Contact Me</h2>
          <a href="mailto:ayyubahmed555@gmail.com" id="specialone" target="_blank" rel="noreferrer">ayyubahmed555@gmail.com</a>
            <p>+447476324547</p>
          </div>
          </div>
      </div>
    </>
  );
}
