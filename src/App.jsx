import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import StaticBackground from './components/StaticBackground';
import CoverPage from './components/CoverPage';
import MainContent from './components/MainContent';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Initialize background audio
  useEffect(() => {
    // Beautiful, inspiring piano/acoustic royalty-free music (Canon in D)
    const audioUrl = '/maher-zein.mp3';
    audioRef.current = new Audio(audioUrl);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    // Add cover-active class to body by default (locks scroll)
    document.body.classList.add('cover-active');

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      document.body.classList.remove('cover-active');
    };
  }, []);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    setIsPlaying(true);
    
    // Unlock body scroll
    document.body.classList.remove('cover-active');

    // Attempt to play audio (handling potential browser restrictions)
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log('Audio autoplay prevented by browser. Waiting for guest interaction.', err);
        setIsPlaying(false);
      });
    }
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch((err) => console.log('Audio play error:', err));
      setIsPlaying(true);
    }
  };

  return (
    <div className="app-container">
      {/* Static cartoon background */}
      <StaticBackground />

      {/* Cover overlay screen */}
      <CoverPage isOpened={isOpened} onOpen={handleOpenInvitation} />

      {/* Main website contents (renders blurred underneath/behind cover, scrollable when opened) */}
      <MainContent isOpened={isOpened} />

      {/* Floating Audio Play/Pause Trigger */}
      {isOpened && (
        <button 
          className={`audio-player-btn ${isPlaying ? 'playing' : ''}`}
          onClick={toggleAudio}
          title={isPlaying ? 'Matikan Musik' : 'Putar Musik'}
          aria-label={isPlaying ? 'Matikan Musik' : 'Putar Musik'}
        >
          {isPlaying ? <Volume2 size={22} /> : <VolumeX size={22} />}
        </button>
      )}
    </div>
  );
}
