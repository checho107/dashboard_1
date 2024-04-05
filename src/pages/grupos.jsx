import React from 'react';
import hat from '../assets/img/hat.png';
import hat_1 from '../assets/img/hat_1.png';
import hat_2 from '../assets/img/hat_2.png';
import hat_3 from '../assets/img/hat_3.png';
import hat_4 from '../assets/img/hat_4.png';

function Grupos() {
const amigos = [
{ nombre: 'Juan', telefono: 3228452631, ciudad: 'Madrid' },
{ nombre: 'María', telefono: 3014523124, ciudad: 'Barcelona' },
{ nombre: 'Pedro', telefono: 3104236987, ciudad: 'Valencia' },
{ nombre: 'Ana', telefono: 3124568423, ciudad: 'Sevilla' },
];

return (
<div className='grupo'>
  <img className='foto_hat' src={hat} />
  <img className='foto_hat_1' src={hat_1} />
  <img className='foto_hat_2' src={hat_2} />
  <img className='foto_hat_3' src={hat_3} />
  <img className='foto_hat_4' src={hat_4} />

<h1>Contactanos para brindarte una excelente accesoria</h1>
<br></br>
<ul>
{amigos.map((amigo, index) => (
<li key={index}>
<h3>{amigo.nombre}</h3>
  <p>Telefono: {amigo.telefono}</p>
  <p>Ciudad: {amigo.ciudad}</p>
</li>
))}
</ul>
</div>
);
}

export default Grupos;