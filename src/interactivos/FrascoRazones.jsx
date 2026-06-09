// src/interactivos/FrascoRazones.jsx
import { useState } from 'react';

function FrascoRazones() {
  const razones = [
    "Porque siempre sabes qué decir cuando tengo un mal día 🧸",
    "Por que me obligas a descargarme juegos que ni jugamos.",
    "Porque estas vieja y debo hacer caridad. 🌸",
    "Por ser la Kitty de mi Lala y asi. 💖",
    "Porque contigo puedo ver Deescendientes.",
    "Por que contigo puedo decir lo que sea. 📱"
  ];

  const [nota, setNota] = useState("");

  const sacarPapelito = () => {
    const random = Math.floor(Math.random() * razones.length);
    setNota(razones[random]);
  };

  return (
    <div style={{
      background: '#ffffff',
      border: '1px solid #e2e8f0',
      backgroundImage: 'linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)',
      backgroundSize: '20px 20px', /* Fondo cuadriculado escolar */
      borderRadius: '16px',
      padding: '40px 20px',
      maxWidth: '450px',
      margin: '50px auto',
      position: 'relative',
      boxShadow: '0 8px 16px rgba(0,0,0,0.04)'
    }}>
      <div className="washi-tape-blue"></div>
      
      <h3 style={{ fontFamily: 'Caveat', fontSize: '2.2rem', color: '#64a6bd', marginTop: 0, marginBottom: '10px' }}>
        🍯 Notas de la Suerte
      </h3>
      <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 20px 0' }}>Razones de por qué eres mi mejor amiga</p>
      
      <div style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
        {nota ? (
          <div style={{
            background: '#fff9db', /* Papelito amarillo de recordatorio */
            border: '1px solid #fef3c7',
            padding: '15px',
            borderRadius: '2px',
            fontFamily: 'Caveat',
            fontSize: '1.6rem',
            boxShadow: '3px 3px 8px rgba(0,0,0,0.05)',
            transform: 'rotate(1deg)',
            width: '80%'
          }}>
            {nota}
          </div>
        ) : (
          <div style={{ fontSize: '3.5rem', filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.1))' }}>🍯✨</div>
        )}
      </div>

      <button onClick={sacarPapelito} className="scrapbook-btn" style={{ borderColor: '#64a6bd', color: '#64a6bd', boxShadow: '3px 3px 0px #64a6bd' }}>
        Sacar papelito ✉️
      </button>
    </div>
  );
}

export default FrascoRazones;