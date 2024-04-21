import React from 'react';
import '../components/Home.css';
import Footer from './Footer';

function Grupos() {


  return (
    <div className='containergrupo'>
      <h1 style={{
        fontSize: '48px',
        fontFamily: 'Georgia, Times New Roman, Times, serif',
        transform: 'translate(50px, 20px)',
        color: 'black',
      }}>
        Contactanos para brindarte una excelente accesoria
      </h1>
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <div className="card__img">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%">
                <rect fill="#ffffff" width="540" height="450" />
                <defs>
                  <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2="100%" gradientTransform="rotate(222,648,379)">
                    <stop offset="0" stopColor="#482285" />
                    <stop offset="1" stopColor="#6ea3e9" />
                  </linearGradient>
                  <pattern patternUnits="userSpaceOnUse" id="b" width="300" height="250" x="0" y="0" viewBox="0 0 1080 900">
                    <g fillOpacity="0.5">
                      {/* Add the polygon elements here */}
                    </g>
                  </pattern>
                </defs>
                <rect x="0" y="0" fill="url(#a)" width="100%" height="100%" />
                <rect x="0" y="0" fill="url(#b)" width="100%" height="100%" />
              </svg>
            </div>
            <div className="card__avatar">
              <img src="https://i.pinimg.com/564x/7c/2b/ac/7c2bacf83a09e8390eb6802a57d22c88.jpg" width="160" height="119" />
              {/* Add the circle, path, and ellipse elements here */}

            </div>
            <div className="card__title">Catriona Grey</div>
            <div className="card__subtitle">Marketing Digital</div>
            <div className="card__wrapper">
              <button className="card__btn">Llamar</button> {" "}
              <button className="card__btn card__btn-solid">Chat</button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card__img">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%">
                <rect fill="#ffffff" width="540" height="450" />
                <defs>
                  <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2="100%" gradientTransform="rotate(222,648,379)">
                    <stop offset="0" stopColor="#482285" />
                    <stop offset="1" stopColor="#6ea3e9" />
                  </linearGradient>
                  <pattern patternUnits="userSpaceOnUse" id="b" width="300" height="250" x="0" y="0" viewBox="0 0 1080 900">
                    <g fillOpacity="0.5">
                      {/* Add the polygon elements here */}
                    </g>
                  </pattern>
                </defs>
                <rect x="0" y="0" fill="url(#a)" width="100%" height="100%" />
                <rect x="0" y="0" fill="url(#b)" width="100%" height="100%" />
              </svg>
            </div>
            <div className="card__avatar">
              <img src="https://i.pinimg.com/564x/11/38/f0/1138f0ce82a5e6d1c505aa423bc8f819.jpg" width="160" height="119" />
              {/* Add the circle, path, and ellipse elements here */}

            </div>
            <div className="card__title">Cameron Williamson</div>
            <div className="card__subtitle">Administrador</div>
            <div className="card__wrapper">
              <button className="card__btn">llamar</button> {" "}
              <button className="card__btn card__btn-solid">Chat</button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card__img">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%">
                <rect fill="#ffffff" width="540" height="450" />
                <defs>
                  <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2="100%" gradientTransform="rotate(222,648,379)">
                    <stop offset="0" stopColor="#482285" />
                    <stop offset="1" stopColor="#6ea3e9" />
                  </linearGradient>
                  <pattern patternUnits="userSpaceOnUse" id="b" width="300" height="250" x="0" y="0" viewBox="0 0 1080 900">
                    <g fillOpacity="0.5">
                      {/* Add the polygon elements here */}
                    </g>
                  </pattern>
                </defs>
                <rect x="0" y="0" fill="url(#a)" width="100%" height="100%" />
                <rect x="0" y="0" fill="url(#b)" width="100%" height="100%" />
              </svg>
            </div>
            <div className="card__avatar">
              <img src="https://i.pinimg.com/564x/88/34/aa/8834aae6a4186b26103cfe0c39bc9ccf.jpg" width="170" height="119" />
              {/* Add the circle, path, and ellipse elements here */}

            </div>
            <div className="card__title">Andres Villamizar</div>
            <div className="card__subtitle">Desarrollador web</div>
            <div className="card__wrapper">
              <button className="card__btn">llamar</button> {" "}
              <button className="card__btn card__btn-solid">Chat</button>
            </div>
          </div>
        </div>
     <Footer></Footer>
      </div>
    </div>
  );
}

export default Grupos;