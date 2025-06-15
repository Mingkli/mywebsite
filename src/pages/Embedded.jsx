import React, { useRef } from 'react';
import './Embedded.css';
import { Link } from 'react-router-dom';
import { useAudio } from '../context/AudioContext';

const EmbeddedProjects = () => {
  const needleRef = useRef(null);
  const { playSpinSound } = useAudio();

  const rotateNeedle = (degrees) => {
    if (needleRef.current) {
      needleRef.current.style.transform = `translate(-50%, -90%) rotate(${degrees}deg)`;
    }
  };

  return (
    <div className="embedded-projects-page">
      <div className="embedded-projects-head">
        <div className="embedded-projects-headcontent">
          <h1>Please click a project name</h1>
        </div>
      </div>

      <div
        className="wheel-container"
        onMouseLeave={() => rotateNeedle(0)}
      >
        <div className="needle" ref={needleRef}></div>

        <Link 
          to="/projects/crystalball"
          className="segment-selector crystalball"
          onMouseOver={() => rotateNeedle(-30)}
          onMouseEnter={playSpinSound}
          onTouchStart={playSpinSound}
        >
          <h3>Crystal Ball</h3>
        </Link>
        <Link
          to="/projects/socialring"
          className="segment-selector socialring"
          onMouseOver={() => rotateNeedle(30)}
          onMouseEnter={playSpinSound}
          onTouchStart={playSpinSound}
        >
          <h3>Social Ring</h3>
        </Link>
        <Link
          to="/projects/aqualumina"
          className="segment-selector aquallumina"
          onMouseOver={() => rotateNeedle(180)}
          onMouseEnter={playSpinSound}
          onTouchStart={playSpinSound}
        >
          <h3>Aquallumina</h3>
        </Link>
      </div>
    </div>
  );
};

export default EmbeddedProjects;
