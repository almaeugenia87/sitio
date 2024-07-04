// SD
// Átomos
// Select (Lista de selección)

// NOTA: Quité el parámetro border pero éste todavía puede ocultarse por medio del parámetro "style="

import React from 'react';
import PropTypes from 'prop-types';

// Recursos
import Arrow from '../../../assets/icons/chevron-down.svg?react';

// Estilos
import style from './style.module.css';

// Definición del componente
const Select = props => {

  const {color = 'primary', disabled = false, placeholder, children, ...other} = props;

  const disabledClass = 'disabled-' + disabled;

  // NOTA: Falta ajustar el tomo de la flechita del color 'neutral'; debe ser 'dark'.

  return (
    <div className={`${style.control} ${style[color]} ${style[disabledClass]}`} {...other}>
      <select className={style.select} disabled={disabled} required {...other}>
        { placeholder && <option value="">{placeholder}</option> }
        { children }
      </select>
      <Arrow />
    </div>
  )
}

const Option = props => {

  const {value, children, ...other} = props;

  return <option value={value} {...other}>{children}</option>;

}

// Parámetros
Select.propTypes = {
  color: PropTypes.string,
  // size: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string
}

Option.propTypes = {
  value: PropTypes.string
}

export { Select, Option };
