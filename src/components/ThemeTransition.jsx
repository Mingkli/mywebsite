import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import './ThemeTransition.css';

const ThemeTransition = ({ children }) => {
  const { theme } = useTheme();
  const [transitioning, setTransitioning] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
    // If theme changed
    if (theme !== currentTheme) {
      setTransitioning(true);
      
      
      // After the transition completes, update the current theme
      const timer = setTimeout(() => {
        setCurrentTheme(theme);
        setTransitioning(false);
      }, 800); // Match this to your transition duration
      
      return () => clearTimeout(timer);
    }
  }, [theme, currentTheme]);

  return (
    <div className={`theme-transition ${transitioning ? 'fade' : ''}`}>
      {children}
    </div>
  );
};

export default ThemeTransition;