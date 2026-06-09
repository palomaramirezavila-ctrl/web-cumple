// src/interactivos/Carta.jsx
function Carta() {
  return (
    <div style={{
      background: '#ffffff',
      /* Crea las líneas del cuaderno */
      backgroundImage: 'linear-gradient(#e8e8e8 1px, transparent 1px)',
      backgroundSize: '100% 2.2rem',
      padding: '50px 30px 30px 50px',
      borderRadius: '4px',
      maxWidth: '550px',
      margin: '40px auto',
      position: 'relative',
      boxShadow: '0 10px 20px rgba(0,0,0,0.05), inset 4px 0 0 #ff85a1', /* Margen rosa izquierdo */
      border: '1px solid #e0e0e0'
    }}>
      <div className="washi-tape-pink"></div>
      
      <h3 style={{ 
        fontFamily: 'Caveat', 
        cursive: true, 
        fontSize: '2.5rem', 
        color: '#ff85a1', 
        marginTop: 0,
        marginBottom: '20px'
      }}>
        Hola tontaa... 💌
      </h3>
      
      <p style={{ 
        fontFamily: 'Caveat', 
        cursive: true, 
        fontSize: '1.8rem', 
        textAlign: 'left', 
        color: '#2b2b2b', 
        lineHeight: '2.2rem',
        margin: 0,
        whiteSpace: 'pre-line'
      }}>
      
        Primero que nada feliz cumpleaños tonta, espero que sepas lo mucho que te quiero y lo especial que eres
        en mi vida, si me hubieran dicho que a la werka que mire ese dia en esa tienda fea y que me daba pinta
        de bellakita se iba a convertir en mi mejor amiga la verdad no me lo hubiera creido, pero ahora no lo hubiera querido
        de otra forma, pues ya no me veo sin ti. Eres una persona increible y aunque si eres medio bastardita creo que todo lo
        demas lo compensas con tu manera de ser, y tu linda personalidad, aunque me de cosa decirtelo. 

        Eres y siempre seras mi mejor amiga, porque cuando mas te necesitaba llegaste a mi vida y ahora quiero estar en la
        tuya cada que tu lo necesites. Espero que estos proximos años que vengan sean los mejores para ti, porque aunque
        ya no volveremos a tener 16-17 y a vivir sin responsabilidades, se que eres capaz de lograr lo que sea. 
         ★
      </p>

      <div style={{ textAlign: 'right', marginTop: '30px', fontSize: '2rem' }}>
        🧸🎈
      </div>
    </div>
  );
}

export default Carta;