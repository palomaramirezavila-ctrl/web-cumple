// src/interactivos/TriviaAmistad.jsx
import { useState } from 'react';

function TriviaAmistad() {
  const preguntas = [
    {
      pregunta: "1. ¿Cuál es la primer cosa que me dijiste",
      opciones: ["Hola amiga!", "¿Me tengo que mover para alla?", "Mira, asi le hace Gisell.", "¿Tienes una bolsa?"],
      correcta: 2 // Cambia el número (0, 1, 2 o 3) según cuál sea la respuesta real de ustedes
    },
    {
      pregunta: "2. ¿Que sabor era el jugo que siempre tomabamos?",
      opciones: ["Sandia", "Piña", "Manzana", "Mango"],
      correcta: 3
    }
  ];

  const [progreso, setProgreso] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [completado, setCompletado] = useState(false);

  const revisarRespuesta = (indexSeleccionado) => {
    if (indexSeleccionado === preguntas[progreso].correcta) {
      setFeedback("¡Mas te valia tonta, 🌸✨");
      setTimeout(() => {
        setFeedback("");
        if (progreso + 1 < preguntas.length) {
          setProgreso(progreso + 1);
        } else {
          setCompletado(true);
        }
      }, 1500);
    } else {
      setFeedback("No, ¿Acaso me odias?");
    }
  };

  return (
    <div style={{
      background: '#ffffff',
      border: '2px dashed #9dd9d2', /* Bordes color menta suave */
      borderRadius: '12px',
      padding: '30px 20px',
      maxWidth: '480px',
      margin: '50px auto',
      position: 'relative',
      boxShadow: '0 8px 16px rgba(0,0,0,0.03)'
    }}>
      <div className="washi-tape-blue" style={{ background: 'rgba(157, 217, 210, 0.7)', top: '-12px' }}></div>
      
      <h3 style={{ fontFamily: 'Caveat', fontSize: '2.3rem', color: '#79b4b7', marginTop: 0, marginBottom: '5px' }}>
        ✏️ Test de Telepatía BFF
      </h3>
      <p style={{ color: '#888', fontSize: '0.85rem', margin: '0 0 20px 0' }}>¿Qué tan aka eres?</p>

      {!completado ? (
        <div>
          <p style={{ fontStyle: 'italic', fontSize: '1.1rem', color: '#4a5568', marginBottom: '20px' }}>
            {preguntas[progreso].pregunta}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {preguntas[progreso].opciones.map((opcion, idx) => (
              <button 
                key={idx} 
                onClick={() => revisarRespuesta(idx)}
                className="trivia-option-btn"
              >
                {opcion}
              </button>
            ))}
          </div>
          {feedback && (
            <p style={{ fontFamily: 'Caveat', fontSize: '1.5rem', color: '#ff85a1', marginTop: '15px' }}>
              {feedback}
            </p>
          )}
        </div>
      ) : (
        <div>
          <p style={{ fontSize: '3rem', margin: '10px 0' }}>🏆✨🥳</p>
          <p style={{ fontFamily: 'Caveat', fontSize: '2rem', color: '#ff85a1', margin: 0 }}>
            ¡100%! 
          </p>
        </div>
      )}
    </div>
  );
}

export default TriviaAmistad;