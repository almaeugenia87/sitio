// SD
// Átomos
// Input (Entrada de texto)

import React from 'react';
import PropTypes from 'prop-types';

import style from './style.module.css';

// Definición del componente
const Input = props => {

  const {type = 'text', color = 'primary', ...other} = props;

  return (
    <input type={type} className={`${style.input} ${style[color]}`} {...other} />
  )
}

// Parámetros
Input.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string
}

export default Input;