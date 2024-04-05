import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../components/Home.css';

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <div className='home'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/vector-premium/plantilla-banner-realista-diseno-plano_23-2150102691.jpg?w=900"
              alt="Laptops"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/vector-premium/banner-venta-viernes-negro-hombre-dando-mujer-caja-actual-traves-tableta-digital_48369-19021.jpg?w=826"
              alt="Smartphones"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/vector-premium/cyber-monday-sale-banner-tabletas-digitales-sobre-fondo-descuento-compras-linea-poster_48369-14523.jpg?w=740"
              alt="Tablets"
            />
          </Carousel.Item>
        </Carousel>
    
      </div>
    </Container>
  )
}

export default Home;