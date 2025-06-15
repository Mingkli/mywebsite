import React, { createContext, useContext, useRef, useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';

// Import audio files correctly for Vite
import chimeAudio from '../assets/soundEffect/chime.mp3';
import backgroundAudio from '../assets/soundEffect/background.mp3';
import flipAudio from '../assets/soundEffect/Flip.mp3';
import needleAudio from '../assets/soundEffect/needle.mp3';

// Create a context
const AudioContext = createContext();

// Create a provider component
export const AudioProvider = ({ children }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const { theme } = useTheme();

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setShowPopup(false);
        })
        .catch(err => {
          console.error("Play music error:", err);
          alert('Could not play audio. Please try again.');
        });
    }
  };

  const pauseMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const togglePopup = (show) => {
    setShowPopup(show);
  };

  // Create hover and spin audio instances after importing
  const hoverAudio = useRef(new Audio(flipAudio));
  hoverAudio.current.volume = 0.3;

  const playHoverSound = () => {
    if (isPlaying) {
      hoverAudio.current.currentTime = 0;
      hoverAudio.current.play().catch(err => console.error("Hover sound error:", err));
    }
  };

  const spinAudio = useRef(new Audio(needleAudio));
  spinAudio.current.volume = 0.3;

  const playSpinSound = () => {
    if (isPlaying) {
      spinAudio.current.currentTime = 0;
      spinAudio.current.play().catch(err => console.error("Spin sound error:", err));
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      const wasPlaying = isPlaying;

      // Set new source based on theme
      audioRef.current.pause();
      audioRef.current.src = theme === 'dark' ? chimeAudio : backgroundAudio;
      audioRef.current.load();

      if (wasPlaying) {
        audioRef.current.play().catch(err =>
          console.error("Playback error after theme switch:", err)
        );
      }
    }
  }, [theme]);

  const value = {
    audioRef,
    isPlaying,
    showPopup,
    playMusic,
    pauseMusic,
    togglePopup,
    playHoverSound,
    playSpinSound
  };

  return (
    <AudioContext.Provider value={value}>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onError={(e) => console.error("Audio loading error:", e)}
      />
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
