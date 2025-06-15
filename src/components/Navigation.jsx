import React, { useState, useEffect, useRef } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cursorRef = useRef(null);
  const menuRef = useRef(null);
  const navButtonRef = useRef(null);
  
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

  // Close menu if click outside
  const handleClickOutside = (e) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target) &&
      navButtonRef.current &&
      !navButtonRef.current.contains(e.target)
    ) {
      setIsMenuOpen(false);
    }
  };

  // Attach global click/touch listener when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Custom cursor listener inside menu
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
      <div className="navigation" onClick={handleNavClick} ref={navButtonRef}>
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
