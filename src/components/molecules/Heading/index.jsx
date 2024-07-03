// SD
// Composición
// Heading (Encabezado)
// José Esteva <josesteva@soft4pilot.net>
// México

import React from 'react';
import PropTypes from 'prop-types';

import Box from '../../../containers/Box';
import Flexbox from '../../../containers/Flexbox';

// import style from './style.module.css';

// Componente
const Heading = props => {

  const {justify = 'center', space = 'medium', color = 'primary', hue, children, ...other} = props;

  return (
    <Box space={space} color={color} hue={hue} {...other}>
      <Flexbox direction="row" justify={justify} align="center">
        {children}
      </Flexbox>
    </Box>
  );

}

// Parámetros
Heading.propTypes = {
  justify: PropTypes.string,
  space: PropTypes.string,
  color: PropTypes.string,
  hue: PropTypes.string
}

export default Heading;
