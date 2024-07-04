// SD
// Componentes
// Title (Titulo)
// José Esteva <josesteva@soft4pilot.net>
//

import React from 'react';
import PropTypes from 'prop-types';


import style from './style.module.css';

// Componente
const Title = props => {

  const {role = 'h1', color = 'black', size = 'medium', children, ...other} = props;

  return (
    <div as={`${role}`} className={`${style.title} ${style[color]} ${style[size]}`} {...other}>
        {children}
    </div>
  )
};

// Parámetros
Title.propTypes = {
  role: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string
}

export default Title;
