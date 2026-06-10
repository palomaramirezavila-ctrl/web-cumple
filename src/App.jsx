// src/App.jsx
import { useState } from 'react';
import './App.css';
import MusicaFondo from './interactivos/MusicaFondo';
import Pastel from './interactivos/Pastel';
import ContadorAmistad from './interactivos/ContadorAmistad';
import Carta from './interactivos/Carta';
import FrascoRazones from './interactivos/FrascoRazones';
import PlaylistRecuerdos from './interactivos/PlaylistRecuerdos';
import TriviaAmistad from './interactivos/TriviaAmistad';
import GalletaFortuna from './interactivos/GalletaFortuna';
import DibujosFondo from './interactivos/DibujosFondo'; // 👈 IMPORTAMOS EL LINE ART

function App() {
  const [comenzar, setComenzar] = useState(false);

  return (
    <div className="app-container">
      {/* El Line Art va aquí arriba para que sirva de fondo de pantalla interactivo */}
      <DibujosFondo />
      
      {!comenzar ? (
        <div style={{ textAlign: 'center', marginTop: '17vh', position: 'relative', zIndex: 5 }}>
          <span style={{ fontSize: '3rem' }}>💌🌸✨</span>
          <h1 className="handwritten-title">Hola mekilla...</h1>
          <p style={{ color: '#8898aa', marginBottom: '30px', fontSize: '1.2rem', letterSpacing: '2px' }}>26/07/26</p>
          <button className="scrapbook-btn" onClick={() => setComenzar(true)}>
            Abrir diario 📖
          </button>
        </div>
      ) : (
        <div style={{ width: '100%', maxWidth: '700px', textAlign: 'center', padding: '20px 0', position: 'relative', zIndex: 5 }}>
          <MusicaFondo />
          
          <h1 className="handwritten-title" style={{ fontSize: '4rem' }}>¡Feliz Cumpleaños! 🎂</h1>
          <p style={{ color: '#718096', marginTop: '-10px', fontSize: '1.1rem' }}>Hoy al fin eres legal</p>
          
          <section style={{ margin: '50px 0' }}><Pastel /></section>
          <section style={{ margin: '40px 0' }}><ContadorAmistad /></section>
          <section style={{ margin: '40px 0' }}><Carta /></section>
          <section style={{ margin: '40px 0' }}><FrascoRazones /></section>
          <section style={{ margin: '40px 0' }}><PlaylistRecuerdos /></section>
          <section style={{ margin: '40px 0' }}><TriviaAmistad /></section>
          <section style={{ margin: '40px 0' }}><GalletaFortuna /></section>
        </div>
      )}
    </div>
  );
}

export default App;