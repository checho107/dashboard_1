import React from 'react';
import './Login.css';
import game from '../assets/img/game.png';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Login = ({ onLogin }) => {
  const history = useHistory();

  const validateCredentials = (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
   
    if (username.trim() === '' || password.trim() === '') {
      alert('Por favor, complete ambos campos');
    } else if (username === 'sergio' && password === '123456') {
        onLogin(); 
        history.push('/home'); 
    } else {
        alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      <form className="form-box animated fadeInUp" onSubmit={validateCredentials}>
        <div className="image-container">
          <img className='logoTienda' src={game} alt="Imagen de fondo" />
        </div>
        <div className='inputs-form'>
          <FontAwesomeIcon className='icon-user' icon={faUser} size="xl" />
          <input type="text" id="username" placeholder="Usuario" />
          <input type="password" id="password" placeholder="Clave" />
          <button type="submit"> Iniciar Sesión </button>
        </div>
        <ul className="socail-media">
          <li>
            <a href="#">
               <svg viewBox="0 0 10.712 20" height="20" width="10.712" xmlns="http://www.w3.org/2000/svg">
                  <path transform="translate(-22.89)" d="M32.9,11.25l.555-3.62H29.982V5.282a1.81,1.81,0,0,1,2.041-1.955H33.6V.245A19.255,19.255,0,0,0,30.8,0c-2.86,0-4.73,1.734-4.73,4.872V7.63H22.89v3.62h3.179V20h3.913V11.25Z" id="facebook"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg viewBox="0 0 20 20" height="20" width="20" xmlns="http://www.w3.org/2000/svg" id="_x31_0.Linkedin">
                <path fill="#000" transform="translate(-31.438 -29.201)" d="M51.438,49.2V41.755c0-3.659-.788-6.455-5.057-6.455a4.413,4.413,0,0,0-3.99,2.186h-.051V35.63H38.3V49.2h4.219V42.466c0-1.779.33-3.482,2.516-3.482,2.16,0,2.186,2.008,2.186,3.583v6.607h4.219Z" data-name="Path 1" id="Path_1"></path>
                <path fill="#000" transform="translate(-10.97 -30.17)" d="M11.3,36.6h4.219V50.17H11.3Z" data-name="Path 2" id="Path_2"></path>
                <path fill="#000" transform="translate(-10 -10)" d="M12.44,10a2.452,2.452,0,1,0,2.44,2.44A2.44,2.44,0,0,0,12.44,10Z" data-name="Path 3" id="Path_3"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
               <svg viewBox="0 0 23.06 18" height="18" width="23.06" xmlns="http://www.w3.org/2000/svg">
                <path fill="#000" transform="translate(0 -48.082)" d="M20.69,52.568c.015.2.015.394.015.591A13.085,13.085,0,0,1,7.258,66.082,13.752,13.752,0,0,1,0,64.043a10.168,10.168,0,0,0,1.141.056,9.712,9.712,0,0,0,5.868-1.941,4.715,4.715,0,0,1-4.419-3.15,6.2,6.2,0,0,0,.893.07,5.189,5.189,0,0,0,1.244-.155,4.592,4.592,0,0,1-3.79-4.458V54.41a4.907,4.907,0,0,0,2.136.577A4.5,4.5,0,0,1,.966,51.2a4.375,4.375,0,0,1,.644-2.292,13.621,13.621,0,0,0,9.745,4.753,4.936,4.936,0,0,1-.117-1.041,4.635,4.635,0,0,1,4.726-4.542,4.806,4.806,0,0,1,3.453,1.434,9.538,9.538,0,0,0,3-1.1,4.567,4.567,0,0,1-2.078,2.5,9.779,9.779,0,0,0,2.722-.7A9.953,9.953,0,0,1,20.69,52.568Z" id="twitter"></path>
              </svg>
            </a>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Login;
