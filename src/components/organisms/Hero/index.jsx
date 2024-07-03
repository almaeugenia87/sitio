// APW
// Interfaces
// Hero (Producto)
// José Esteva <josesteva@soft4pilot.net>
// México 2022

import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// Componentes y mecanismos del sistema de diseño
import {
  Box,
  Flexbox,
  Label,
  Title,
  useStuck } from '@soft4pilot/sd';

// Contexto de la aplicación
import { Context } from '../../../index';



// Estilos locales
import style from './style.module.css';

// Definición de la plantilla
const Hero = props => {

  // Parámetros
  const { version, callToAction, ...other } = props;

  // Utilizar el contexto de la aplicación
  const { context } = useContext(Context);

  // Propiedades de componente semi-fijo
  const [ stuck, stuckRef ] = useStuck();

  // Interfaz gráfica
  return (

    <div className={style.hero} ref={stuckRef} {...other}>
      <Box color="primary" space="large">
        <Flexbox direction="column" align="center" gap="medium">
          <Flexbox direction="column"align="center" style={{gap:'0'}}>
            <Title role="h1" size="huge" color="white">{context.name}</Title>
            { !stuck && <Title role="h2" size="medium" color="white" align="center">{context.slogan}</Title> }
          </Flexbox>
          { !stuck && callToAction }
          { !stuck && version && <Label size="small" color="white" style={{ marginTop: 'auto' }}>Versión {context.version}</Label> }
        </Flexbox>
      </Box>
    </div>

  );

}

// Parámetros
Hero.propTypes = {
  callToAction: PropTypes.element,
  version: PropTypes.bool
}

export default Hero;

// [lock-all/]