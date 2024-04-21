import React from 'react';
import { Card } from 'react-bootstrap';
import astro1 from '../assets/img/astro1.png';
import astro2 from '../assets/img/astro2.png';
import astro3 from '../assets/img/astro3.png';

function Soporte() {
  return (
    <div className='soporte' style={{ height: '100vh', overflow: 'hidden', position: 'relative' }}>
      <div>
        {/* Capa para el desenfoque y el fondo */}
        <div
          style={{
            width: '1220px',
            height: '580px',
            backgroundImage: `linear-gradient(to right, rgba(99, 95, 95, 0), rgba(99, 95, 95, 0)), url('https://i.pinimg.com/564x/ef/0e/c0/ef0ec01c7557dd985607a99dbbeda51a.jpg')`,
             backgroundSize: 'contain',
            filter: 'blur(2px)',
            position: 'absolute',
            top: '0',
            left: '0',
            zIndex: '0', // Asegurar que esta capa esté detrás de las cards
            borderRadius: '40px',
            boxShadow: '20px 6px 20px rgba(0.616, 0.616, 0.0.616, 0.616)', // Aquí agregamos la sombra
            opacity: '0.5'
          }}
        ></div>

        {/* Contenido de las cards */}
        <fieldset className="border p-5" style={{ width: '1100px', height: '500px', marginLeft: '40px', transform: 'translate(10px, 25px)', position: 'center', zIndex: '1' }}>
        <legend className="w-auto" style={{ fontSize: '30px', color: 'whitesmoke', fontWeight: 'bold', fontFamily: 'Georgia, Times New Roman, Times, serif', }}>PREGUNTAS FRECUENTES</legend>
          <Card border="Secondary" style={{ width: '18rem', height: '18rem', color: 'green', textAlign: 'center', fontFamily: 'Georgia, Times New Roman, Times, serif', }}>
            <Card.Header>Conozca más</Card.Header>
            <Card.Body>
              <Card.Title>¿Quienes somos?</Card.Title>
              <Card.Text>
                Somos una plataforma de comercio electrónico
                especializada en la venta de una amplia gama de productos tecnológicos.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="primary" style={{ width: '18rem', height: '18rem', textAlign: 'center', color: 'blue', transform: 'translate(450px, -150px)' }}>
            <Card.Header>2</Card.Header>
            <Card.Body>
              <Card.Title>¿Quieres ser miembro VIP?</Card.Title>
              <Card.Text>
                A nuestro miembros mas fieles les otorgamos descuentos especiales en todos los productos de nuestra tienda.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="Secondary " style={{ width: '18rem', height: '18rem', textAlign: 'center', color: 'gray', transform: 'translate(800px, -532px)' }}>
            <Card.Header>3</Card.Header>
            <Card.Body>
              <Card.Title>
                Tienes dudas o preguntas
              </Card.Title>
              <Card.Text>
                <ul style={{textAlign:'left' }}>
                  <li>Contactenos</li>
                  <li>+57 3228721932</li>
                  <li>checho@example.com</li>
                  <li>@gamechecho</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
          <img src={astro1}  style={{  transform: 'translate(500px, -890px)',}} width="200" height="170"/>
          <img src={astro2}  style={{  transform: 'translate(650px, -990px)',}} width="200" height="170" />
          <img src={astro3}  style={{  transform: 'translate(-520px, -638px)',}} width="280" height="250" />
        </fieldset>
      </div>
    </div>
  );
}

export default Soporte;
