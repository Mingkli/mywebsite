import { createContext, useContext, useState } from 'react';
import './ThemeContext.css'
import ThemeTransition from '../components/ThemeTransition'

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      < ThemeTransition>
            {children}
        </ThemeTransition>
        </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
