// src/interactivos/ToquesEuphoria.jsx
function ToquesEuphoria() {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      pointerEvents: 'none', 
      /* Brillo suave color durazno/amarillo pastel en los bordes */
      boxShadow: 'inset 0 0 100px rgba(255, 229, 180, 0.4)', 
      zIndex: 99 
    }} />
  );
}

export default ToquesEuphoria;