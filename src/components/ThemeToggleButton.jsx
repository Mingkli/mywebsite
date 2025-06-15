import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggleButton.css';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle-btn" onClick={toggleTheme}>
      {theme === 'dark' ? '🌷 Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default ThemeToggleButton;