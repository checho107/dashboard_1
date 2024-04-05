import React from 'react';
import sopor from '../assets/img/sopor.png';
import sopor_1 from '../assets/img/sopor_1.png';

function Soporte() {
  const soporte = [
    { remitente: 'Preguntas Frecuentes' },
    { remitente: '1', contenido: '¿Quienes somos?' },
    { remitente: '2', contenido: '¿Que productos ofrecemos?' },
    { remitente: '3', contenido: '¿Quieres ser miembro premiun?' },
    { remitente: '4', contenido: '¿Que beneficios tiene nuestros productos' },
    ];
    
    return (
    <div className='soporte'>
    <img className='foto_sopor' src={sopor} />
    <img className='foto_sopor_1' src={sopor_1} />
    <ul>
    {soporte.map((soporte, index) => (
    <p key={index}>
    <h3>{soporte.remitente}</h3>
    <p>{soporte.contenido}</p>
    </p>
    ))}
    </ul>
    </div>
    );
    }

export default Soporte;