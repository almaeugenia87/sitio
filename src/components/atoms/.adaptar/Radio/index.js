// SD
// Átomos
// Radio (Selección de opción)

// NOTA: Este componente debe recibir desde fuenra ya sea: Una propiedad 'defaultValue' o una propiedad 'value' y un método 'onChange'.

import React from 'react';
import PropTypes from 'prop-types';

// Estilos
import '../../../styles/tokens.css';
import style from './style.module.css';

// Componentes
import Label from '../Label';

// Definición del componente
const Radio = props => {

  const {size, color, disabled, children, ...other} = props;

  const disabledClass = 'disabled-' + disabled;

  return (
    <div className={style.container}>
      <label className={style.option}>
    	  <div className={`${style.control} ${style[size]} ${style[color]} ${style[disabledClass]}`}>
          <input type="radio" disabled={disabled} {...other}/>
    	    <span></span>
    	  </div>
    	  <Label size={size} color="black">{children}</Label>
    	</label>
    </div>
  )
}

// Parámetros
Radio.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool
}

// Valores predeterminados
Radio.defaultProps = {
  size: 'medium',
  color: 'neutral'
}

export default Radio;
