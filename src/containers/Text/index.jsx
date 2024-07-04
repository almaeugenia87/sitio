// SD
// Componentes
// Text (Texto)
// José Esteva <josesteva@soft4pilot.net>
//

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import PropTypes from 'prop-types';

import style from './style.module.css';

// Componente
const Text = props => {

  const {align = 'left', size = 'medium', color = 'black', children, ...other} = props;

  const markup = ReactDOMServer.renderToStaticMarkup(children);

  return (
    // <p className={`${style.text} ${style[align]} ${style[size]} ${style[color]}`} {...other}>{children}</p>
    <p className={`${style.text} ${style[align]} ${style[size]} ${style[color]}`} dangerouslySetInnerHTML={{ __html: markup }} {...other} />
  )

};

// Parámetros
Text.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  align: PropTypes.string
}

export default Text;
