// src/interactivos/GalletaFortuna.jsx
import { useState } from 'react';

export default function GalletaFortuna() {
  const deseos = [
    "✨ Haras mas amigas en tu uni, posyaque .✨",
    "🔮 El destino dice que me regales una sudadera, andale w ya no tengo.🔮",
    "🌟 Este año vas a al fin conseguir chamba. ",
    "🧸 Te ganas un abrazo porque dinero no tengo.🧸",
    "🍀 Seras un poco menos onichan.🍀",
    "🎀 Al fin iremos a pintar alcancias.🎀 "
  ];

  const [frase, setFrase] = useState("");
  const [abierta, setAbierta] = useState(false);

  const abrirGalleta = () => {
    if (abierta) {
      // Si ya está abierta, la reinicia para que saque otra
      setAbierta(false);
      setFrase("");
    } else {
      setAbierta(true);
      const random = Math.floor(Math.random() * deseos.length);
      setFrase(deseos[random]);
    }
  };

  return (
    <div style={{
      background: '#ffffff',
      border: '2px dashed #ffb3c6',
      borderRadius: '16px',
      padding: '35px 20px',
      maxWidth: '480px',
      margin: '50px auto',
      position: 'relative',
      boxShadow: '0 8px 16px rgba(0,0,0,0.02)',
      overflow: 'hidden'
    }}>
      <div className="washi-tape-pink" style={{ width: '100px' }}></div>
      
      <h3 style={{ fontFamily: 'Caveat', fontSize: '2.4rem', color: '#ff85a1', marginTop: 0, marginBottom: '5px' }}>
        🥠 Galleta de la Fortuna
      </h3>
      <p style={{ color: '#888', fontSize: '0.85rem', margin: '0 0 25px 0' }}>Dale un clic para romperla y ver tu deseo de cumpleaños</p>

      <div style={{ minHeight: '130px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* El dibujo o emoji de la galleta cambiando según el estado */}
        <div 
          onClick={abrirGalleta}
          style={{ 
            fontSize: abierta ? '4.5rem' : '5rem', 
            cursor: 'pointer',
            transition: 'transform 0.2s',
            userSelect: 'none',
            transform: abierta ? 'scale(0.95)' : 'hover:scale(1.05)'
          }}
          className={abierta ? "" : "bounce-animation"}
        >
          {abierta ? '💥🥠💥' : '🥠'}
        </div>

        {/* El papelito que sale de la galleta */}
        {abierta && (
          <div style={{
            background: '#fff',
            border: '1px dashed #ff85a1',
            padding: '15px',
            marginTop: '20px',
            borderRadius: '4px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
            fontFamily: 'Caveat',
            fontSize: '1.6rem',
            color: '#4a3f3f',
            animation: 'slideUp 0.3s ease-out',
            lineHeight: '1.3'
          }}>
            {frase}
            <p style={{ fontSize: '0.8rem', color: '#ff85a1', margin: '8px 0 0 0', fontFamily: 'Quicksand', fontWeight: 'bold' }}>
              (Haz clic en la galleta otra vez para sacar otra)
            </p>
          </div>
        )}
      </div>
    </div>
  );
}