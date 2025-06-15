import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import { useAudio } from '../context/AudioContext';

const Projects = () => {
    const { playHoverSound } = useAudio();

  return (
    <div className="projects-page">

      <div className="projects-head">
        <div className="projects-headcontent">
          <h1>Please choose a card to click</h1>
        </div>
      </div>

      <div className="cards">
        <Link to="/webProjects" className="card-link">
          <div className="card"
            onMouseEnter={playHoverSound}
            onTouchStart={playHoverSound}>
            <div className="card-inner">
              <div className="card-front-web">
                <h2>Website</h2>
              </div>
              <div className="card-back">
                <p>These are my website projects.</p>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/embeddedProjects" className="card-link">
          <div className="card"
            onMouseEnter={playHoverSound}
            onTouchStart={playHoverSound}>
            <div className="card-inner">
              <div className="card-front-ed">
                <h2>Embedded Development</h2>
              </div>
              <div className="card-back">
                <p>These are my embedded development projects.</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
