// SD
// Átomos
// Textarea (Área de texto)
// José Esteva <josesteva@soft4pilot.net>

import React from 'react';
import PropTypes from 'prop-types';

// Estilos
import style from './style.module.css';

// Definición del componente
const Textarea = props => {

  const {color = 'primary', border = true, ...other} = props;

  const borderClass = 'border-' + border;

  return (
    <textarea className={`${style.control} ${style[props.color]} ${style[borderClass]}`} {...other}/>
  )
}

// Parámetros
Textarea.propTypes = {
  color: PropTypes.string, //.oneOf(['black','neutral','white']),
  border: PropTypes.bool
}

export default Textarea;
