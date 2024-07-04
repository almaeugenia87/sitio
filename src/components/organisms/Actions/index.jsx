// SD
// Componentes
// Actions (Acciones)
// José Esteva <josesteva@soft4pilot.net>
// Basado en: https://www.upbeatcode.com/react/implement-floating-action-button-in-react/

// NOTA: Después podrían agregarse propiedes como color, posición y dirección.

import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

// Componentes
import Button from '../../atoms/Button';

// Recursos
import Plus from '../../../assets/icons/plus.svg?react';

// Estilos
import style from './style.module.css';

// Contexto del componente
const ActionsContext = createContext();

// Definición del componente
const Actions = props => {

  const {open = false, children, ...other} = props;       // Propiedades

  // Interfaz gráfica
  return (
    <ActionsContext.Provider value={ open }>
      <ul className={`${style.actions} ${style['open-' + open]}`} {...other}>
        <li>
          <Button icon={Plus} size="large" color="accent" />
        </li>
        { children }
      </ul>
    </ActionsContext.Provider>
  )
}

const Command = props => {

  const open = useContext(ActionsContext);  // Obtener el estado del componente

  const {icon, ...other} = props;

  return (
    <li className={`${style.command} ${style['open-' + open]}`}>
      <Button icon={icon} size="medium" color="secondary" {...other} />
    </li>
  )
}

// Parámetros
Actions.propTypes = {
  open: PropTypes.bool
}

export { Actions, Command };
