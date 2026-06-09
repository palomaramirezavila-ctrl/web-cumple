// src/interactivos/ContadorAmistad.jsx
import { useState, useEffect } from 'react';

export default function ContadorAmistad() {
  // 📅 CONFIGURACIÓN: Pon aquí la fecha aproximada en que comenzó su amistad (Año, Mes - 1, Día)
  // Ojo: En JavaScript los meses van de 0 a 11 (0 es Enero, 5 es Junio, 6 es Julio, etc.)
  // Ejemplo: New Date(2018, 4, 15) es el 15 de Mayo de 2018.
  const anio = 2024;
  const mes = 11; 
  const dia = 23;

  const [tiempo, setTiempo] = useState({
    anios: 0, meses: 0, dias: 0, horas: 0, minutos: 0, segundos: 0
  });

  useEffect(() => {
    const fechaInicio = new Date(anio, mes, dia, 0, 0, 0);

    const calcularExacto = () => {
      const ahora = new Date();
      
      let years = ahora.getFullYear() - fechaInicio.getFullYear();
      let months = ahora.getMonth() - fechaInicio.getMonth();
      let days = ahora.getDate() - fechaInicio.getDate();

      if (days < 0) {
        months--;
        days += new Date(ahora.getFullYear(), ahora.getMonth(), 0).getDate();
      }
      if (months < 0) {
        years--;
        months += 12;
      }

      setTiempo({
        anios: years,
        meses: months,
        dias: days,
        horas: ahora.getHours(),
        minutos: ahora.getMinutes(),
        segundos: ahora.getSeconds()
      });
    };

    calcularExacto();
    const intervalo = setInterval(calcularExacto, 1000);
    return () => clearInterval(intervalo);
  }, [anio, mes, dia]);

  return (
    <div style={{
      background: '#ffffff',
      border: '2px solid #ffcad4',
      borderRadius: '16px',
      padding: '30px 20px',
      maxWidth: '500px',
      margin: '40px auto',
      position: 'relative',
      boxShadow: '0 8px 20px rgba(255, 202, 212, 0.15)',
    }}>
      <div className="washi-tape-pink" style={{ width: '90px' }}></div>
      
      <h3 style={{ fontFamily: 'Caveat', fontSize: '2.4rem', color: '#ff85a1', marginTop: 0, marginBottom: '5px' }}>
        ⏳ Nuestro Tiempo Juntas
      </h3>
      <p style={{ color: '#888', fontSize: '0.85rem', margin: '0 0 25px 0' }}>Cada segundo a tu lado cuenta...</p>

      {/* Grid del Reloj de Amistad */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '15px',
        fontFamily: 'Quicksand',
        fontWeight: 'bold'
      }}>
        <div className="reloj-bloque">
          <span className="reloj-numero">{tiempo.anios}</span>
          <span className="reloj-etiqueta">Años</span>
        </div>
        <div className="reloj-bloque">
          <span className="reloj-numero">{tiempo.meses}</span>
          <span className="reloj-etiqueta">Meses</span>
        </div>
        <div className="reloj-bloque">
          <span className="reloj-numero">{tiempo.dias}</span>
          <span className="reloj-etiqueta">Días</span>
        </div>
        <div className="reloj-bloque">
          <span className="reloj-numero">{String(tiempo.horas).padStart(2, '0')}</span>
          <span className="reloj-etiqueta">Horas</span>
        </div>
        <div className="reloj-bloque">
          <span className="reloj-numero">{String(tiempo.minutos).padStart(2, '0')}</span>
          <span className="reloj-etiqueta">Minutos</span>
        </div>
        <div className="reloj-bloque" style={{ background: '#fff0f3', border: '1px solid #ffb3c6' }}>
          <span className="reloj-numero" style={{ color: '#ff85a1' }}>{String(tiempo.segundos).padStart(2, '0')}</span>
          <span className="reloj-etiqueta" style={{ color: '#ff85a1' }}>Segundos</span>
        </div>
      </div>

      <p style={{ fontFamily: 'Caveat', fontSize: '1.6rem', color: '#6c5a5a', marginTop: '25px', marginBottom: 0 }}>
       Vamos por menos! 🧸🍀★
      </p>
    </div>
  );
}