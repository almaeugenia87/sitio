// SD
// Átomos
// Checkbox (Casilla de verificación)
// José Esteva <josesteva@soft4pilot.net>

// NOTA: Sustituir la molécula <Link> por una etiqueta HTML <label>.

import React from 'react';
import PropTypes from 'prop-types';

// Recursos
import Check from '../../../assets/icons/check.svg?react';

// Componentes
// import Icon from '../Icon';
import Link from '../../molecules/Link';

// Estilos
import style from './style.module.css';

// Definición del componente
const Checkbox = props => {

  const {color = 'primary', children, disabled, ...other} = props;

  const disabledClass = 'disabled-' + disabled;

  return (
    <label className={style.container}>
      <span className={`${style.control} ${style[color]} ${style[disabledClass]}`}>
        <input className={style.input} type="checkbox" disabled={disabled} {...other}/>
        <Check className={`${style.icon} ${style[color]}`} />
      </span>
      <Link size="medium" color="black">{children}</Link>
    </label>
  )
}

// Parámetros
Checkbox.propTypes = {
  color: PropTypes.string
}

export default Checkbox;
