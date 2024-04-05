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
      <img className='foto_cerrar' src={cerrar} />
      <button className="btn btn-primary" onClick={handleVolverAlInicio}>
        <a className="btn-link text-white">
          Volver al inicio
        </a>
      </button>
    </div>
  );
}

export default Cerrar;