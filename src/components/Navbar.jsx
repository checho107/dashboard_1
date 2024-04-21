import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, useHistory } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import game2 from '../assets/img/game2.png';
import { IconContext } from 'react-icons';
import { Button } from 'react-bootstrap';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const history = useHistory();

  const handleCerrarSesion = () => {
    // Aquí especificas la ruta a la que quieres dirigir al usuario al cerrar sesión
    history.push('/login');
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Button className='nav-menu-cerrar' variant="primary" onClick={handleCerrarSesion}>Cerrar Sesión</Button>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} style={{ zIndex: 999 }}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                  {item.subMenu && (
                    <ul className='sub-menu'>
                      {item.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex} className={subItem.cName}>
                          <Link to={subItem.path}>
                            {subItem.icon}
                            <span>{subItem.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
