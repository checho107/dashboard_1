import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Carousel, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../components/Home.css';
import Footer from './Footer';

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>

      <Container>
        <Carousel>
          <Carousel.Item>
            <img src="https://img.freepik.com/vector-gratis/composicion-cyber-monday-diseno-plano_23-2147943668.jpg?t=st=1713323004~exp=1713326604~hmac=4725c6e0abf63893f78144a88b6d7ab7e5a3b8a1c69b3923b8c6c6705533c934&w=740" alt="Descripción de la imagen" />
            <Carousel.Caption>
              <h3>Venta de portatiles</h3>
              <p>Lunes de descuentos, Compra rapidez y redimiento.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://img.freepik.com/vector-gratis/composicion-moderna-cyber-monday-diseno-plano_23-2147945981.jpg?t=st=1713323029~exp=1713326629~hmac=4d634bb164e3b17ccaf992e41aaf586436c39da0860fa165df81e46cea2a6e6c&w=740" alt="Descripción de la imagen" />
            <Carousel.Caption>
              <h3>Accesorios Tecnologicos</h3>
              <p> Venta de audifonos, teclados, mouse gamer.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://img.freepik.com/vector-gratis/diseno-inicio-sesion-corporativo_23-2148279480.jpg?t=st=1713323710~exp=1713327310~hmac=c4957f7664af1cfca74c58ce3ae1effcd6abc4391f21b99c4db9d6ba4bb5d7b0&w=740" />
            <Carousel.Caption>
              <h3>Compra Online</h3>
              <p>
                Compara desde la comodida de tu casa y tomate un refresco.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
          <Accordion.Header style={{ fontWeight: 'bold' }}>¿QUIENES SOMOS?</Accordion.Header>
            <Accordion.Body>
              Gamechecho Online es una plataforma de comercio electrónico completa y versátil diseñada para la operación eficiente de la tienda virtual "Gamechecho". Esta tienda se
              especializa en la venta de una amplia gama de productos tecnológicos y accesorios, ofreciendo una experiencia de compra única y conveniente para los clientes en la ciudad de Cúcuta
              y sus alrededores. Con Gamechecho Online, los clientes pueden explorar un extenso catálogo de productos, realizar pedidos de manera segura y disfrutar de envíos gratuitos dentro de la ciudad, todo desde la comodidad de sus hogares.

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>MISIÓN</Accordion.Header>
            <Accordion.Body>
              En Gamechecho, nuestra misión es transformar la experiencia de compra de productos tecnológicos y accesorios, brindando a nuestros clientes una plataforma de comercio electrónico confiable y fácil de usar. Nos comprometemos a ofrecer productos de la más alta calidad, respaldados por un servicio al cliente excepcional que supere las expectativas.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>VISIÓN</Accordion.Header>
            <Accordion.Body>
              En un plazo de 5 años, Gamechecho se consolidará como la principal opción para la compra de tecnología y accesorios en la ciudad de Cúcuta y sus alrededores. Nuestra visión es ser reconocidos como líderes en el mercado local, ofreciendo una amplia gama de productos de alta calidad, una experiencia de compra excepcional y un servicio al cliente insuperable. Nos esforzaremos por expandir nuestra presencia en la región y convertirnos en un referente en el sector de comercio electrónico, manteniendo siempre nuestro compromiso con la innovación, la eficiencia operativa y la satisfacción del cliente.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
     <Footer></Footer>

    </div>
  );
};

export default Home;
