// SD
// Átomos
// Select (Lista de selección)

// NOTA: Quité el parámetro border pero éste todavía puede ocultarse por medio del parámetro "style="

import React from 'react';
import PropTypes from 'prop-types';

// Estilos
import style from './style.module.css';

// Componentes
import Icon from '../Icon';

// Definición del componente
const Select = props => {

  const {color, disabled, placeholder, children, ...other} = props;

  const disabledClass = 'disabled-' + disabled;

  return (
    <div className={`${style.control} ${style[color]} ${style[disabledClass]}`} {...other}>
      <select className={style.select} disabled={disabled} required {...other}>
        { placeholder && <option value="">{placeholder}</option> }
        { children }
      </select>
      <Icon type="angle-down" size="tiny" color={color} style={{position:'absolute',top:'8px',right:'8px'}}/>
    </div>
  )
}

const Option = props => {

  const {value, children, ...other} = props;

  return <option value={value} {...other}>{ children }</option>;

}

// Asignar los subcomponentes al componente principal
Select.Option = Option;

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

// Valores predeterminados
Select.defaultProps = {
  disabled: false
}

export default Select;
