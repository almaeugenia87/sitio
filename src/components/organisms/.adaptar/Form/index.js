// SD
// Organismos
// Form (Formulario)
// José Esteva <josesteva@cic.unam.mx>

// NOTA: Me gusatría que la propiedad "enabled" se pusiera sólo en el componente raíz y
//       se difundiera automáticamente a los subcomponentes. De esta manera, el mecanismo (hook)
//       para contrlar el formulario sería más sencillo. Con CSS sería algo así:
//       --
//       .disabled {
//         pointer-events: none;
//         cursor: default;
//         opacity: 0.6;
//       }

// NOTA: Utilizar el parámetro "layout" recibido en el subcoimponente <Field> para modificar
//       directamente sus propiedades (en lugar de utilizar la sintaxis de CSS: a > b)

import React from 'react';
import PropTypes from 'prop-types';

// Estilos
import style from './style.module.css';

// Definición del componente <Form>
const Form = props => {

  const {layout, children, ...other} = props;

  return (

    <form className={`${style.form} ${style[layout]}`} {...other}>
      {children}
    </form>

  );

}

// Definición del componente <Field>
const Field = props => {

  // Obtener propiedades
  const { children, ...other } = props;

  // Representación visual del componente
  return (
    <label className={style.field} {...other}>
      {children}
    </label>
  );

}

// Asignar los subcomponentes al componente principal
Form.Field = Field;

// Parámetros
Form.propTypes = {
  layout: PropTypes.string
}

// Valores predeterminados
Form.defaultProps = {
  layout: 'columns'
}

export default Form;
