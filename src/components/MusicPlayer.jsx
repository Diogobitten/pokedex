import { useRef, useState, forwardRef, useImperativeHandle } from 'react';
import './MusicPlayer.css';
import music from '../assets/audio.m4a';

const MusicPlayer = forwardRef((props, ref) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useImperativeHandle(ref, () => ({
    startMusic: () => {
      const audio = audioRef.current;
      audio.volume = 0.3;
      audio.muted = false;
      audio.play().then(() => setPlaying(true));
    },
    pauseMusic: () => {
      audioRef.current.pause();
      setPlaying(false);
    }
  }));

  const togglePlay = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="music-player" onClick={togglePlay} title="Clique para pausar ou tocar">
      <audio ref={audioRef} src={music} loop muted />
      {[...Array(5)].map((_, i) => (
        <div key={i} className={`bar ${playing ? 'active' : ''}`} />
      ))}
    </div>
  );
});

export default MusicPlayer;
