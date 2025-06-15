import React from 'react';
import '../components/MusicPlayer.css';
import { useAudio } from '../context/AudioContext';

const MusicPlayer = () => {
  const { isPlaying, showPopup, playMusic, pauseMusic, togglePopup } = useAudio();

  const handleMusicIconClick = () => {
    if (isPlaying) {
      pauseMusic();
    } else {
      togglePopup(true);
    }
  };

  return (
    <>
      <div 
        className={`music ${isPlaying ? 'playing' : ''}`}
        onClick={handleMusicIconClick} 
      ></div>

      {showPopup && (
        <div className="music-popup">
          <div className="popup-content">
            <p>Do you want to play background music?</p>
            <button onClick={playMusic}>Yes</button>
            <button onClick={() => togglePopup(false)}>No</button>
          </div>
        </div>
      )}
    </>
  );
};

export default MusicPlayer;
