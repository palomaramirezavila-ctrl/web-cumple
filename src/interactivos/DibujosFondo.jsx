// src/interactivos/DibujosFondo.jsx
export default function DibujosFondo() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none', 
      zIndex: 1,
      opacity: 0.45 
    }}>
      
      {/* GARABATOS SUPERIORES (Corazones y Destellos) */}
      <svg style={{ position: 'absolute', top: '20px', left: '5%', width: '150px', height: '150px' }} viewBox="0 0 100 100">
        {/* Dos corazones entrelazados hechos a mano */}
        <path d="M 30 40 C 15 20, 5 45, 30 70 C 55 45, 45 20, 30 40 Z" fill="none" stroke="#ff85a1" strokeWidth="1.5" />
        <path d="M 45 50 C 35 35, 25 55, 45 75 C 65 55, 55 35, 45 50 Z" fill="none" stroke="#ffb3c6" strokeWidth="1.2" transform="rotate(15 45 50)" />
        {/* Rayitas de emoción de los corazones */}
        <path d="M 15 25 L 10 20 M 20 15 L 18 8 M 50 20 L 55 15" stroke="#ff85a1" strokeWidth="1" />
      </svg>

      <svg style={{ position: 'absolute', top: '100px', right: '5%', width: '100px', height: '100px' }} viewBox="0 0 100 100">
        {/* Estrellas garabateadas sin cerrar el trazo */}
        <path d="M 40 20 L 45 35 L 60 35 L 48 45 L 52 60 L 40 50 L 28 60 L 32 45 L 20 35 L 35 35 Z" fill="none" stroke="#79b4b7" strokeWidth="1.5" />
        <path d="M 75 60 L 77 67 L 85 67 L 79 72 L 81 80 L 75 75 L 69 80 L 71 72 L 65 67 L 73 67 Z" fill="none" stroke="#ff85a1" strokeWidth="1.2" />
      </svg>

      {/* EDIFICIOS EN LINE ART (Skyline estilo boceto en la parte inferior) */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '180px',
        overflow: 'hidden'
      }}>
        <svg width="100%" height="100%" viewBox="0 0 1000 150" preserveAspectRatio="none">
          {/* Silueta continua de casitas y edificios escolares dibujados con pluma fina */}
          <path d="
            M 0 150 
            L 0 90 L 30 70 L 60 90 
            L 60 110 L 110 110 L 110 50 L 140 30 L 170 50 L 170 150 
            M 170 120 L 230 120 L 230 70 L 270 40 L 310 70 L 310 150
            M 310 95 L 380 95 L 380 40 L 420 40 L 420 150
            M 420 110 L 490 80 L 530 110 L 530 150
            M 530 60 L 580 30 L 630 60 L 630 150
            M 630 100 L 700 100 L 700 45 L 750 20 L 800 45 L 800 150
            M 800 85 L 860 60 L 910 85 L 910 150
            M 910 105 L 1000 70 L 1000 150
          " fill="none" stroke="#d0def2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* Ventanitas sueltas y desalineadas tipo caricatura */}
          <rect x="25" y="95" width="10" height="15" fill="none" stroke="#d0def2" strokeWidth="1.2" />
          <rect x="130" y="60" width="12" height="12" fill="none" stroke="#d0def2" strokeWidth="1.2" />
          <rect x="250" y="85" width="15" height="20" fill="none" stroke="#d0def2" strokeWidth="1.2" />
          <circle cx="400" cy="60" r="6" fill="none" stroke="#d0def2" strokeWidth="1.2" />
          <rect x="655" y="60" width="10" height="15" fill="none" stroke="#d0def2" strokeWidth="1.2" />
          <rect x="675" y="60" width="10" height="15" fill="none" stroke="#d0def2" strokeWidth="1.2" />
          <rect x="825" y="90" width="15" height="15" fill="none" stroke="#d0def2" strokeWidth="1.2" />
        </svg>
      </div>

    </div>
  );
}