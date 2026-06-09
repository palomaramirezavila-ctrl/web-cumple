// src/App.jsx
import { useState } from 'react';
import './App.css';
import MusicaFondo from './interactivos/MusicaFondo';
import Pastel from './interactivos/Pastel';
import ContadorAmistad from './interactivos/ContadorAmistad';
import Carta from './interactivos/Carta';
import FrascoRazones from './interactivos/FrascoRazones';
import PlaylistRecuerdos from './interactivos/PlaylistRecuerdos';
import TriviaAmistad from './interactivos/TriviaAmistad'; // 👈 AGREGAMOS ESTE IMPORT
import GalletaFortuna from './interactivos/GalletaFortuna'; // 👈 Y ESTE IMPORT

function App() {
  const [comenzar, setComenzar] = useState(false);

  return (
    <div className="app-container">
      {!comenzar ? (
        /* PANTALLA DE BIENVENIDA AESTHETIC */
        <div style={{ textAlign: 'center', marginTop: '15vh' }}>
          <span style={{ fontSize: '3rem' }}>💌🌸✨</span>
          <h1 className="handwritten-title">Feliz cumple...</h1>
          <p style={{ color: '#8898aa', marginBottom: '30px', fontSize: '1.2rem', letterSpacing: '2px' }}>26/07/26</p>
          <button className="scrapbook-btn" onClick={() => setComenzar(true)}>
            Abrir diario 📖
          </button>
        </div>
      ) : (
        /* PANTALLA PRINCIPAL: EL DIARIO DE RECUERDOS */
        <div style={{ width: '100%', maxWidth: '700px', textAlign: 'center', padding: '20px 0' }}>
          <MusicaFondo />
          
          <h1 className="handwritten-title" style={{ fontSize: '4rem' }}>¡Feliz Cumpleaños! 🎂</h1>
          <p style={{ color: '#718096', marginTop: '-10px', fontSize: '1.1rem' }}>Hoy se festeja a mi persona favorita</p>
          
          {/* 1. El pastel para soplar las velas */}
          <section style={{ margin: '50px 0' }}>
            <Pastel />
          </section>

          {/* 2. El reloj dinámico que cuenta su tiempo juntas */}
          <section style={{ margin: '40px 0' }}>
            <ContadorAmistad />
          </section>

          {/* 3. Tu carta escrita a mano */}
          <section style={{ margin: '40px 0' }}>
            <Carta />
          </section>

          {/* 4. El frasquito de los papelitos de la suerte */}
          <section style={{ margin: '40px 0' }}>
            <FrascoRazones />
          </section>

          {/* 5. Tus canciones y las portadas estilo Polaroid */}
          <section style={{ margin: '40px 0' }}>
            <PlaylistRecuerdos />
          </section>

          {/* 6. El juego de preguntas de telepatía */}
          <section style={{ margin: '40px 0' }}>
            <TriviaAmistad />
          </section>

          {/* 7. La galletita de la fortuna para cerrar */}
          <section style={{ margin: '40px 0' }}>
            <GalletaFortuna />
          </section>
        </div>
      )}
    </div>
  );
}

export default App;