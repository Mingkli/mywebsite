import React, { useState, useEffect, useRef } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cursorRef = useRef(null);
  const menuRef = useRef(null);
  
  // Toggle menu open/closed
  const handleNavClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Custom cursor effect
  const handleMouseMove = (e) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    }
  };

  // Add event listener for cursor when menu is open
  useEffect(() => {
    const menuElement = menuRef.current;
    
    if (isMenuOpen && menuElement) {
      menuElement.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (menuElement) {
        menuElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [isMenuOpen]);

  return (
    <div className="navigation-container">
      <div className="navigation" onClick={handleNavClick}>
        <span></span>
      </div>
      
      <div 
        ref={menuRef}
        className={`nav-menu ${isMenuOpen ? 'show-menu' : ''}`}
      >
        <div ref={cursorRef} id="cursor"></div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutMe">About Me</Link></li>
          <li><Link to="/projects">My Projects</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
