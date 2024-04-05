import React from 'react';
import text from '../assets/img/text.png';

function Mensajes() {
const mensajes = [
{ remitente: 'Juan', contenido: 'Hola, ¿cómo estás hoy?' },
{ remitente: 'María', contenido: 'Bien, gracias por preguntar. ¿Y tú?' },
{ remitente: 'Pedro', contenido: 'Estoy un poco cansado, pero bien en general.' },
{ remitente: 'Ana', contenido: '¿Quieres tomar un café más tarde?' },
{ remitente: 'Carlos', contenido: 'Me encantaría, ¿a qué hora?' },
];

return (
<div className='mensaje'>
<img className='foto_text' src={text} />
<ul>
{mensajes.map((mensaje, index) => (
<p key={index}>
<h3>{mensaje.remitente}</h3>
<p>{mensaje.contenido}</p>
</p>
))}
</ul>
</div>
);
}

export default Mensajes;