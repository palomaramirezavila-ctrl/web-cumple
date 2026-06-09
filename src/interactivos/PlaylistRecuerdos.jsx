// src/interactivos/PlaylistRecuerdos.jsx
function PlaylistRecuerdos() {
  const canciones = [
    {
      titulo: "Beginning, Middle, End.",
      artista: "Leah Nobel",
      nota: "Pq te crees Lara Jean 🚙",
      // PON AQUÍ EL LINK DE GOOGLE IMAGES O PINTEREST QUE QUIERAS
      cover: "https://i.scdn.co/image/ab67616d0000b273575984ef8f9a9c3aebb7957a" 
    },
    {
      titulo: "Right Here",
      artista: "Lil Peep",
      nota: "Azies",
      cover: "https://akamai.sscdn.co/uploadfile/letras/albuns/8/e/6/2/2106321706615429.jpg"
    },
    {
      titulo: "Timeless",
      artista: "Taylor Swift",
      nota: "Nuestra canciooon 🎧",
      cover: "https://i1.sndcdn.com/artworks-XWZpIfyZc4NO-0-t500x500.jpg"
    },
    {
      titulo: "Venus",
      artista: "Zoe",
      nota: "3:27 specially",
      cover: "https://i.scdn.co/image/ab67616d0000b2731eada1495a082da8a6c3e516"
    },
    {
      titulo: "Limon y Sal",
      artista: "Julieta Venegas",
      nota: "tu eres la sal, siempre fregandola 🙄",
      cover: "https://i.scdn.co/image/ab67616d0000b273f4c7ab5936bb957554aeb2ca"
    },
  ];

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto' }}>
      <h3 style={{ fontFamily: 'Caveat', fontSize: '2.5rem', color: '#ff85a1', marginBottom: '30px' }}>
        🎧 Canciones que me recuerdan a ti
      </h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '35px', alignItems: 'center' }}>
        {canciones.map((cancion, index) => (
          <div key={index} style={{
            background: '#ffffff',
            padding: '12px 12px 24px 12px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
            borderRadius: '2px',
            width: '240px',
            position: 'relative',
            transform: index % 2 === 0 ? 'rotate(-2deg)' : 'rotate(3deg)',
            border: '1px solid #f0f0f0'
          }}>
            {/* Cinta washi pegando la foto */}
            <div className="washi-tape-pink" style={{ width: '70px', height: '22px', top: '-10px' }}></div>
            
            <img 
              src={cancion.cover} 
              alt="Portada" 
              style={{ width: '100%', height: '216px', objectFit: 'cover', borderRadius: '2px' }} 
            />
            
            <div style={{ marginTop: '15px', textAlign: 'left' }}>
              <h4 style={{ margin: '0 0 2px 0', fontSize: '1rem', color: '#3d3434' }}>{cancion.titulo}</h4>
              <p style={{ margin: '0 0 10px 0', fontSize: '0.8rem', color: '#a0aec0' }}>{cancion.artista}</p>
              <p style={{ 
                margin: 0, 
                fontFamily: 'Caveat', 
                fontSize: '1.4rem', 
                color: '#ff85a1',
                lineHeight: '1.2' 
              }}>
                "{cancion.nota}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlaylistRecuerdos;