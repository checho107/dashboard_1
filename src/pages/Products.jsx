import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBlackTie } from '@fortawesome/free-brands-svg-icons';
import '../components/Home.css';

function Products() {


  return (

    <div className='producto' style={{ width: '80%', maxWidth: '1200px', margin: '0 1px' }}>
      <div class="tooltip-container">
      <span style={{ fontWeight: 'bold' }}>BIENVENIDOS! 👋</span>
      </div>

      <br></br>
      <div className="row justify-content-between">
        <div className="col-md-3">
          <Card style={{ width: '18rem', border: '1px solid white', boxShadow: '5px 5px 5px grey' }}>
            <img src="https://http2.mlstatic.com/D_NQ_NP_785588-MLU73109363362_122023-O.webp" width="260" height="169" />
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                Portatil Asus E1504fa-nj474 Ryzen 5-7520u Ram 16gb Ssd 512gb Color Negro</Card.Title>
              <div className="d-flex justify-content-center mt-4">
                <Button variant="success" className="mr-6">
                  <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                  {" "} Comprar
                </Button><span></span>
                <Button variant="primary">
                  <FontAwesomeIcon icon={faHeart} className="mr-2" />
                  {" "} Favorito
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card style={{ width: '18rem', border: '1px solid white', boxShadow: '5px 5px 5px grey' }}>
            <img src="https://http2.mlstatic.com/D_NQ_NP_841802-MCO69857460760_062023-O.webp" width="260" height="169" />
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                Portatil Asus Ryzen 5 7520u Ram 16gb Ssd 512gb Fhd Wifi+6</Card.Title>
              <div className="d-flex justify-content-center mt-4">
                <Button variant="success" className="mr-6">
                  <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                  {" "} Comprar
                </Button><span></span>
                <Button variant="primary">
                  <FontAwesomeIcon icon={faHeart} className="mr-2" />
                  {" "} Favorito
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card style={{ width: '18rem', border: '1px solid white', boxShadow: '5px 5px 5px grey' }}>
            <img src="https://http2.mlstatic.com/D_NQ_NP_935455-MLA73565691895_122023-O.webp" width="260" height="169" />
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                Laptop Gamer Hp Victus Ryzen 5 7535hs 8 Ram 512 Ssd Rtx 2050 </Card.Title>
              <div className="d-flex justify-content-center mt-4">
                <Button variant="success" className="mr-6">
                  <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                  {" "} Comprar
                </Button><span></span>
                <Button variant="primary">
                  <FontAwesomeIcon icon={faHeart} className="mr-2" />
                  {" "} Favorito
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card style={{ width: '18rem', border: '1px solid white', boxShadow: '5px 5px 5px grey' }}>
            <img src="https://http2.mlstatic.com/D_NQ_NP_789614-MCO54804162208_042023-O.webp" width="260" height="169" />
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                Portátil Acer Nitro5 Gamer I5 Ram16gb, 256ssd+1trhdd Rtx3060 </Card.Title>
              <div className="d-flex justify-content-center mt-4">
                <Button variant="success" className="mr-6">
                  <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                  {" "} Comprar
                </Button><span></span>
                <Button variant="primary">
                  <FontAwesomeIcon icon={faHeart} className="mr-2" />
                  {" "} Favorito
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      <br></br>
      {/* empieza otra fila */}
      <div className="row">
        <div className="col-md-3">
          <Card style={{ width: '18rem', border: '1px solid white', boxShadow: '5px 5px 5px grey' }}>
            <img src="https://http2.mlstatic.com/D_NQ_NP_668197-MLU73885094429_012024-O.webp" width="260" height="169" />
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                Portatil Gamer Asus Tuf Intel I7 12700h Rtx 4070 16 Gb 144hz</Card.Title>
              <div className="d-flex justify-content-center mt-4">
                <Button variant="success" className="mr-6">
                  <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                  {" "} Comprar
                </Button><span></span>
                <Button variant="primary">
                  <FontAwesomeIcon icon={faHeart} className="mr-2" />
                  {" "} Favorito
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card style={{ width: '18rem', border: '1px solid white', boxShadow: '5px 5px 5px grey' }}>
            <img src="https://http2.mlstatic.com/D_NQ_NP_740860-MCO48539483315_122021-O.webp" width="260" height="169" />
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                Portátil Asus Gamer Tuf Dash Corei7 11gn 16gb 512gb Ssd 3060</Card.Title>
              <div className="d-flex justify-content-center mt-4">
                <Button variant="success" className="mr-6">
                  <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                  {" "} Comprar
                </Button><span></span>
                <Button variant="primary">
                  <FontAwesomeIcon icon={faHeart} className="mr-2" />
                  {" "} Favorito
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card style={{ width: '18rem', border: '1px solid white', boxShadow: '5px 5px 5px grey' }}>
            <img src="https://http2.mlstatic.com/D_NQ_NP_765951-MCO71370316054_082023-O.webp" width="260" height="169" />
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                Portatil Lenovo Ryzen 3 5300u Ram 20gb Solido 512gb Fhd </Card.Title>
              <div className="d-flex justify-content-center mt-4">
                <Button variant="success" className="mr-6">
                  <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                  {" "} Comprar
                </Button><span></span>
                <Button variant="primary">
                  <FontAwesomeIcon icon={faHeart} className="mr-2" />
                  {" "} Favorito
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card style={{ width: '18rem', border: '1px solid white', boxShadow: '5px 5px 5px grey' }}>
            <img src="https://http2.mlstatic.com/D_NQ_NP_795029-MCO71605315433_092023-O.webp" width="260" height="169" />
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                Portátil HP 14-fq1004la plateada natural 14", AMD Ryzen 3 5300U 8GB</Card.Title>
              <div className="d-flex justify-content-center mt-4">
                <Button variant="success" className="mr-6">
                  <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                  {" "} Comprar
                </Button><span></span>
                <Button variant="primary">
                  <FontAwesomeIcon icon={faHeart} className="mr-2" />
                  {" "} Favorito
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      {/* empieza otra fila */}
      <br></br>
      <div className="row">
        <div className="col-md-3">
          <Card style={{ width: '18rem', border: '1px solid white', boxShadow: '5px 5px 5px grey' }}>
            <img className='mt-4' src="https://http2.mlstatic.com/D_NQ_NP_941537-MLU74192183779_012024-O.webp" width="260" height="109" />
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                Combo Gamer 4en1 Xtrike Me Teclado Mouse Audífonos Alfombra Color del teclado</Card.Title>
              <div className="d-flex justify-content-center mt-4">
                <Button variant="success" className="mr-6">
                  <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                  {" "} Comprar
                </Button><span></span>
                <Button variant="primary">
                  <FontAwesomeIcon icon={faHeart} className="mr-2" />
                  {" "} Favorito
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card style={{ width: '18rem', border: '1px solid white', boxShadow: '5px 5px 5px grey' }}>
            <img className='mt-4 mx-auto d-block' src="https://http2.mlstatic.com/D_NQ_NP_755743-MLA41523503764_042020-O.webp" width="140" height="109" />
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                Audífonos gamer inalámbricos Astro A50 939-0016 negro y gold</Card.Title>
              <div className="d-flex justify-content-center mt-4">
                <Button variant="success" className="mr-6">
                  <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                  {" "} Comprar
                </Button><span></span>
                <Button variant="primary">
                  <FontAwesomeIcon icon={faHeart} className="mr-2" />
                  {" "} Favorito
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card style={{ width: '18rem', border: '1px solid white', boxShadow: '5px 5px 5px grey' }}>
            <img className='mt-4 mx-auto d-block' src="https://http2.mlstatic.com/D_NQ_NP_947651-MLU72857044884_112023-O.webp" width="180" height="109" />
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                Portatil Lenovo Ryzen 3 5300u Ram 20gb Solido 512gb Fhd </Card.Title>
              <div className="d-flex justify-content-center mt-4">
                <Button variant="success" className="mr-6">
                  <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                  {" "} Comprar
                </Button><span></span>
                <Button variant="primary">
                  <FontAwesomeIcon icon={faHeart} className="mr-2" />
                  {" "} Favorito
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card style={{ width: '18rem', border: '1px solid white', boxShadow: '5px 5px 5px grey' }}>
            <img className='mt-4 mx-auto d-block' src="https://http2.mlstatic.com/D_NQ_NP_646326-MLA54265061388_032023-O.webp" width="120" height="109" />
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                Silla Gamer Escritorio Ergonomica Giratoria Ajustable 180° Pc Gaming </Card.Title>
              <div className="d-flex justify-content-center mt-4">
                <Button variant="success" className="mr-6">
                  <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                  {" "} Comprar
                </Button><span></span>
                <Button variant="primary">
                  <FontAwesomeIcon icon={faHeart} className="mr-2" />
                  {" "} Favorito
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      <br></br>
    </div>

  );
}

export default Products;
