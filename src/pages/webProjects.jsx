import React from 'react';
import './WebProjects.css';
import { Link } from 'react-router-dom';

const WebProjects = () => {
  return (
    <div className="web-projects-page">

      <div className="web-projects-head">
        <div className="web-projects-headcontent">
          <h1>My Website Projects</h1>
        </div>
      </div>

      <div className="elements">
        <Link to="/projects/socialring" className="moonone">
          <h2>SocialRing</h2>
        </Link>
        <Link to="/projects/earthkeepers" className="starone">
          <h2>EarthKeeper</h2>
        </Link>
        <Link to="/projects/vibegrow" className="moontwo">
          <h2>VibeGrow</h2>
        </Link>
      </div>
    </div>
  );
};

export default WebProjects;
