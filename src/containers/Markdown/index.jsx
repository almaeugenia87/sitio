// SD
// Retículas
// Markdown (Contenido dinámico)
// José Esteva <josesteva@soft4pilot.net>

/*
  NOTA: Hay dos formas de implementar este componente, asignando estilos
  globales a todos los elementos HTML que pueda regresar 'markdown-to-jsx'
  o utilizando la opción overrides de la misma librería.
  ¡Pero el override no funciona!
*/

import React from 'react';
import PropTypes from 'prop-types';
import Parser from 'markdown-to-jsx';

import style from './style.module.css';

// Componente
const Markdown = props => {

  const {role = 'div', children, ...other} = props;

  return (
    <Parser className={style.markdown} options={{ wrapper: role }} {...other}>
      {children}
    </Parser>
  )

}

// Parámetros
Markdown.propTypes = {
  role: PropTypes.string
}

export default Markdown;
