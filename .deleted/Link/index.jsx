// SD
// Componentes
// Link (Enlace)
// José Esteva <josesteva@soft4pilot.net>
//

// NOTA: Este componente es un efecto; debería estar en otra sección o incluirse como estilo predeterminado. 

import React from 'react';
import PropTypes from 'prop-types';

import style from './style.module.css';

// Componente
const Link = props => {

  const {color = 'primary', hue, children, ...other} = props;

  return (
    <a className={`${style.link} ${style[color]} ${style[hue]}`} {...other}>{children}</a>
  );

}

// Parámetros
Link.propTypes = {
  color: PropTypes.string,
  hue: PropTypes.string
}

export default Link;
