// src/interactivos/Pastel.jsx
import { useState } from 'react';
import Confetti from 'react-confetti';

function Pastel() {
  const [velasPrendidas, setVelasPrendidas] = useState(true);

  return (
    <div style={{ cursor: 'pointer', display: 'inline-block' }} onClick={() => setVelasPrendidas(false)}>
      {!velasPrendidas && (
        <Confetti 
          /* Paleta pastel: rosa, azul claro, amarillo suave y lila */
          colors={['#ffcad4', '#b5e2fa', '#fefae0', '#e8f0fe', '#ffb7b2']} 
          recycle={false} 
          numberOfPieces={150}
        />
      )}
      
      <div style={{ fontSize: '6rem', transition: 'transform 0.3s ease' }} className={velasPrendidas ? "" : "celebrate"}>
        {velasPrendidas ? '🧁✨' : '🧁🎈🍰'}
      </div>
      
      <p style={{ color: '#8a7a7a', marginTop: '15px', fontSize: '1rem' }}>
        {velasPrendidas ? 'Haz clic para soplar la velita... 💭' : '¡Que todos tus deseos se cumplan! 💘'}
      </p>
    </div>
  );
}

export default Pastel;