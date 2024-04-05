import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaSignInAlt } from 'react-icons/fa';

export const SidebarData = [
  {
    title: 'Inicio',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Reportes',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Productos',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Grupos',
    path: '/grupos',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Mensajes',
    path: '/mensajes',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Soporte',
    path: '/soporte',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },

  {
    title: 'Cerrar',
    path: '/cerrar',
    icon: <IoIosArrowDroprightCircle />,
    cName: 'nav-text'
  },

];
