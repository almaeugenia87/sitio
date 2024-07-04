// SD
// Componentes
// Image (Imagen)
// José Esteva <josesteva@soft4pilot.net>

// NOTA: Los filtros podrían separarse en distintos parámetros (blur, brightness, contrast, etc.) para poder combinarlos.

import React from 'react';
import PropTypes from 'prop-types';


import style from './style.module.css';

// Componente
const Image = props => {

  const { src, text, fit, filter, ...other } = props; // La variable "other" contiene las propiedades HTML que queremos pasar al componente

  return (
      <img src={src} className={`${style.image} ${style[fit]} ${style[filter]}`} alt={text} {...other}/>
  );
}

// Parámetros

Image.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string,
  fit: PropTypes.oneOf(['fill','contain','cover','']),
  filter: PropTypes.oneOf(['blur','bright','contrast','grayscale','huerotate','invert','transparent','saturate','sepia'])
}

export default Image;
