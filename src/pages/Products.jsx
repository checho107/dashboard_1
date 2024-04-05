import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import productos from '../assets/img/productos.png';
import etiqueta from '../assets/img/etiqueta.png';

function Products() {
  const products = [
    { id: 1, name: 'Relojes Rolex', price: 9.99 },
    { id: 2, name: 'Carros Kia', price: 19.99 },
    { id: 3, name: 'Condominios', price: 29.99 },
    { id: 4, name: 'Motos Honda', price: 39.99 }
  ];

  return (
   
    <div className='producto'>
      <img className='foto_productos' src={productos} />
      <h2>Productos</h2>
      <br></br>
     
    </div>
  );
}

export default Products;
