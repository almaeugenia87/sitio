// SD
// Retículas
// Box (Caja)
// José Esteva <josesteva@soft4pilot.net>

// NOTA: Este componente abtrae las propiedades el Box Model de CSS.

import React from 'react';
import PropTypes from 'prop-types';

import style from './style.module.css';

// Componente
const Box = props => {

  const {space, color, hue, children, ...other} = props;

  // Generar las clases de margen interno (padding):
  const padParts = space.split(' ');

  let vPadClass = 'padding-vertical-';
  let hPadClass = 'padding-horizontal-';

  vPadClass = padParts.length > 0 ? vPadClass + padParts[0] : 'none';
  hPadClass = padParts.length > 1 ? hPadClass + padParts[1] : vPadClass.replace('vertical', 'horizontal');

  return (
    <div className={`${style.box} ${style[vPadClass]} ${style[hPadClass]} ${style[color]} ${style[hue]}`} {...other}>
      {children}
    </div>
  )

}

// Parámetros
Box.propTypes = {
  space: PropTypes.string,
  color: PropTypes.string,
  hue: PropTypes.string
}

export default Box;
