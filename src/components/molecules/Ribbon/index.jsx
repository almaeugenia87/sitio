// SD
// Composición
// Ribbon (Cinta)
// José Esteva <josesteva@soft4pilot.net>
// México

import React from 'react';
import PropTypes from 'prop-types';

import style from './style.module.css';

// Componente
const Ribbon = props => {

  const {color = 'primary', children, ...other} = props;

  return (
    <aside className={`${style.ribbon} ${style[color]}`} {...other}>
      {children}
    </aside>
  );

}

// Parámetros
Ribbon.propTypes = {
  color: PropTypes.string
}

export default Ribbon;
