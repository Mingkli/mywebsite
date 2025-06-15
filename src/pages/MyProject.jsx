// src/pages/MyProject.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../pages/MyProject.css';
import { useAudio } from '../context/AudioContext';

const MyProject = () => {
  const { playHoverSound } = useAudio();
  const [flippedCards, setFlippedCards] = useState({
    aboutMe: false,
    projects: false
  });

  // Handle card flip on touch devices
  const handleCardFlip = (cardName) => {
    setFlippedCards(prev => ({
      ...prev,
      [cardName]: !prev[cardName]
    }));
    playHoverSound();
  };

  return (
    <div className="my-project-page">
      <div className="projects-head">
        <div className="projects-headcontent">
          <h1>Please choose a card to click</h1>
        </div>
      </div>
      
      <div className="cards">
        <Link 
          to="/aboutMe" 
          className={`card-link ${flippedCards.aboutMe ? 'flipped' : ''}`}
          onClick={(e) => {
            // Prevent navigation if this is just a flip action on touch devices
            if (window.matchMedia('(max-width: 768px)').matches && !flippedCards.aboutMe) {
              e.preventDefault();
              handleCardFlip('aboutMe');
            }
          }}
        >
          <div 
            className="card"
            onMouseEnter={playHoverSound}
            onTouchStart={() => handleCardFlip('aboutMe')}
          >
            <div className="card-inner">
              <div className="card-front-me">
                <h2>About Me</h2>
              </div>
              <div className="card-back">
                <p>Learn more about who I am and what I do.</p>
                {flippedCards.aboutMe && window.matchMedia('(max-width: 768px)').matches && (
                  <p className="tap-hint">Tap again to visit</p>
                )}
              </div>
            </div>
          </div>
        </Link>

        <Link 
          to="/projects" 
          className={`card-link ${flippedCards.projects ? 'flipped' : ''}`}
          onClick={(e) => {
            // Prevent navigation if this is just a flip action on touch devices
            if (window.matchMedia('(max-width: 768px)').matches && !flippedCards.projects) {
              e.preventDefault();
              handleCardFlip('projects');
            }
          }}
        >
          <div 
            className="card"
            onMouseEnter={playHoverSound}
            onTouchStart={() => handleCardFlip('projects')}
          >
            <div className="card-inner">
              <div className="card-front-project">
                <h2>My Projects</h2>
              </div>
              <div className="card-back">
                <p>Explore my projects and creative works.</p>
                {flippedCards.projects && window.matchMedia('(max-width: 768px)').matches && (
                  <p className="tap-hint">Tap again to visit</p>
                )}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MyProject;