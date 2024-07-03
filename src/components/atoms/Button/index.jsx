// SD
// Componentes
// Button (Botón)
// José Esteva <josesteva@soft4pilot.net>
//

import React from 'react';
import PropTypes from 'prop-types';

import style from './style.module.css';

import Label from '../../atoms/Label';

// Definición del componente
const Button = props => {

  const {icon, size = 'medium', color = 'primary', children, ...other} = props;

  const padding = children ? (icon ? 'padding-complete' : 'padding-text') : 'padding-icon';

  return (
    <button className={`${style.button} ${style[size]} ${style[color]} ${style[padding]}`} {...other}>
      <Label icon={icon} color="white" size={size} bold>{children}</Label>
    </button>
  )

}

// Parámetros
Button.propTypes = {
  icon: PropTypes.func,
  size: PropTypes.string,
  color: PropTypes.string
}

export default Button;
