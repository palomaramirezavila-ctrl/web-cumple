// src/interactivos/MusicaFondo.jsx
import { useEffect, useRef } from 'react';
import cancion from '../assets/euphoria-bg.mp3';

function MusicaFondo() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Sonido ambiente suave tipo película de romance
      audioRef.current.play().catch(err => console.log("Permiso de audio listo al hacer clic:", err));
    }
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: '25px', right: '25px', zIndex: 100 }}>
      <audio 
        ref={audioRef} 
        src={cancion} 
        loop 
        controls 
        style={{ 
          opacity: 0.8, 
          borderRadius: '20px',
          boxShadow: '0 4px 12px rgba(255, 183, 178, 0.3)'
        }} 
      />
    </div>
  );
}

export default MusicaFondo;