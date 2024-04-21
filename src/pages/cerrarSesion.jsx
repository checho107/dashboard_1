import React from 'react';
import { useHistory } from 'react-router-dom';
import cerrar from '../assets/img/cerrar.png';

function Cerrar() {
  const history = useHistory();

  const handleVolverAlInicio = () => {
    history.push('/login');
  };

  return (
    <div className='cerrar'>
      <img className='foto_cerrar' src={cerrar} width="260" height="169" />
      <button
        onClick={handleVolverAlInicio}
        style={{
          position: 'relative',
          padding: '10px 20px',
          borderRadius: '7px',
          border: '1px solid rgb(61, 106, 255)',
          fontSize: '14px',
          textTransform: 'uppercase',
          fontWeight: '600',
          letterSpacing: '2px',
          background: 'transparent',
          color: '#000000',
          overflow: 'hidden',
          boxShadow: '0 0 10px 5px rgba(56, 140, 179, 0.5)',
          transition: 'all 0.2s ease-in',
        }}
      >
        Cerrar Sesión
      </button>

    </div >
  );
}

export default Cerrar;