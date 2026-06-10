// src/interactivos/Pastel.jsx
import { useState } from 'react';
import Confetti from 'react-confetti';

function Pastel() {
  const [velasPrendidas, setVelasPrendidas] = useState(true);

  return (
    <div 
      className="card-pastel" 
      style={{ 
        cursor: 'pointer', 
        position: 'relative', 
        maxWidth: '460px', 
        margin: '40px auto',
        background: '#fff0f3',
        // Renglones de cuaderno rosa
        backgroundImage: 'linear-gradient(#ffccd5 1px, transparent 1px)',
        backgroundSize: '100% 2.4rem',
        padding: '50px 30px 30px 30px',
        border: '1.5px solid #ffccd5',
        borderRadius: '4px',
        transform: 'rotate(-1deg)',
        boxShadow: '5px 5px 0px rgba(255, 204, 213, 0.5)',
        overflow: 'hidden'
      }} 
      onClick={() => setVelasPrendidas(false)}
    >
      {/* CINTA ADHESIVA ARRIBA */}
      <div className="washi-tape-pink" style={{ width: '100px', transform: 'translateX(-50%) rotate(2deg)' }}></div>

      {/* 🎨 GARABATOS HECHOS A MANO (SVGs) */}
      <svg style={{ position: 'absolute', top: '15px', left: '15px', width: '60px', height: '60px', pointerEvents: 'none' }} viewBox="0 0 50 50">
        {/* Corazón flechado rápido */}
        <path d="M 15 20 C 5 10, 0 25, 15 35 C 30 25, 25 10, 15 20 Z" fill="none" stroke="#ff85a1" strokeWidth="1.5" />
        <path d="M 5 35 L 28 12 M 28 12 L 22 12 M 28 12 L 28 18" fill="none" stroke="#ff85a1" strokeWidth="1.5" />
      </svg>

      <svg style={{ position: 'absolute', bottom: '15px', right: '15px', width: '70px', height: '70px', pointerEvents: 'none' }} viewBox="0 0 50 50">
        {/* Espiral / Garabato aburrido de clase */}
        <path d="M 25 25 Q 30 20, 25 15 Q 15 15, 15 25 Q 15 35, 25 35 Q 40 35, 40 20 Q 40 5, 20 5" fill="none" stroke="#b5e2fa" strokeWidth="1.5" strokeLinecap="round" />
        {/* Destellos */}
        <path d="M 42 30 L 42 40 M 37 35 L 47 35" stroke="#ff85a1" strokeWidth="1" />
      </svg>

      {/* CONTENIDO */}
      {!velasPrendidas && (
        <Confetti 
          colors={['#ffcad4', '#b5e2fa', '#fefae0', '#e8f0fe', '#ffb7b2']} 
          recycle={false} 
          numberOfPieces={150}
        />
      )}
      
      <div style={{ fontSize: '5.5rem', transition: 'transform 0.3s ease', zIndex: 5, position: 'relative' }} className={velasPrendidas ? "" : "celebrate"}>
        {velasPrendidas ? '🧁✨' : '🧁🎈🍰'}
      </div>
      
      <p style={{ 
        fontFamily: 'Caveat', 
        fontSize: '1.8rem', 
        color: '#6c5a5a', 
        marginTop: '20px', 
        marginBottom: 0,
        position: 'relative',
        zIndex: 5,
        lineHeight: '2.2rem'
      }}>
        {velasPrendidas ? 'Haz clic para soplar la velita... 💭' : '¡Que todos tus deseos se cumplan! 💘'}
      </p>
    </div>
  );
}

export default Pastel;