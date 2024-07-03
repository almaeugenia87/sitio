// SD
// Componentes
// Header (Encabezado)
// José Esteva <josesteva@soft4pilot.net>

// NOTA: El ícono puede ser un parámetro para poder poner algo diferente de un menú como contenido.

import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Recursos
import Logo from '../../../assets/icons/soft4pilot.svg?react';
import Icon from '../../../assets/icons/menu.svg?react';

// Componentes
import { Menu } from '../../organisms/Menu';

// Mecanismos
import useWindow from '../../../hooks/window';

// Estilos locales
import style from './style.module.css';

// Componente exportado
const Header = props => {

  const {onLogoClick, children, ...other} = props;

  const [state, setState] = useState('close');

  const width = useWindow();

  const toggleContent = () => {

    if (state === 'open') setState('close');
    else setState('open');

  };

  // Interfaz gráfica
  return (
    <header className={`${style.header} ${style[state]}`} {...other}>
      <div className={style.links}>
        <Logo className={style.logo} onClick={() => {if (typeof onLogoClick === 'function') onLogoClick()}}/>
        <span onClick={toggleContent}>
          <Icon className={style.icon} />
        </span>
      </div>
      <div className={`${style.content} ${style[state]}`} onClick={toggleContent}>
        <Menu color="white" direction={width >= 1024 ? 'row' : 'column' }>
          {children}
        </Menu>
      </div>
    </header>
  );

}

// Parámetros
Header.propTypes = {
  onLogoClick: PropTypes.func
}

export default Header;
