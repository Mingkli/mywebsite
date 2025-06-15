import React, { createContext, useContext, useRef, useState } from 'react';
import { useTheme } from './ThemeContext';
import { useEffect } from 'react';


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

  const hoverAudio = new Audio('/src/assets/soundEffect/Flip.mp3');
  hoverAudio.volume = 0.3; // Adjust as needed

  const playHoverSound = () => {
    if (isPlaying) {
      hoverAudio.currentTime = 0; // Rewind if already playing
      hoverAudio.play().catch(err => console.error("Hover sound error:", err));
    }
  };

  const spinAudio = new Audio('/src/assets/soundEffect/needle.mp3');
  spinAudio.volume = 0.3; // Adjust as needed

  const playSpinSound = () => {
    if (isPlaying) {
      spinAudio.currentTime = 0; // Rewind if already playing
      spinAudio.play().catch(err => console.error("Spin sound error:", err));
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      const wasPlaying = isPlaying;

      // Set new source based on theme
      audioRef.current.pause();
      audioRef.current.src =
        theme === 'dark'
          ? '/src/assets/soundEffect/chime.mp3'
          : '/src/assets/soundEffect/background.mp3';

      audioRef.current.load();

      // Auto-play again if it was already playing
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