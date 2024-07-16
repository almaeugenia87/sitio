// SD
// Componentes
// Link (Enlace)
// José Esteva <josesteva@soft4pilot.net>

import React from 'react';
import PropTypes from 'prop-types';

// Estilos
import style from './style.module.css';

// Componente
const Link = props => {

  const {icon, size = 'medium', color = 'black', bold = false, children, ...other} = props;

  const boldClass = 'bold-' + bold;

  const Icon = icon;

  return (
    <span className={`${style.link} ${style[color]} ${style[size]} ${style[boldClass]}`} {...other}>
      {icon && <Icon />} {children}
    </span>
  )
};

// Parámetros
Link.propTypes = {
  icon: PropTypes.func,
  size: PropTypes.string,
  color: PropTypes.string,
  bold: PropTypes.bool
}

export default Link;
