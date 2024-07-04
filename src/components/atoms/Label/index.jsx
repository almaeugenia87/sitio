// SD
// Componentes
// Label (Etiqueta)
// José Esteva <josesteva@soft4pilot.net>

import React from 'react';
import PropTypes from 'prop-types';

// Estilos
import style from './style.module.css';

// Componente
const Label = props => {

  const {icon, size = 'medium', color = 'black', bold = false, children, ...other} = props;

  const boldClass = 'bold-' + bold;

  const Icon = icon;

  return (
    <span className={`${style.label} ${style[color]} ${style[size]} ${style[boldClass]}`} {...other}>
      {icon && <Icon />} {children}
    </span>
  )
};

// Parámetros
Label.propTypes = {
  icon: PropTypes.func,
  size: PropTypes.string,
  color: PropTypes.string,
  bold: PropTypes.bool
}

export default Label;
