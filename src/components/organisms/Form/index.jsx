// SD
// Organismos
// Form (Formulario)
// José Esteva <josesteva@cic.unam.mx>

// NOTA: Aunque en esta versión del formulario no sea necesaria la técnica de "contexto"
//       la mantuve para no perder lo que estudiamos.

import React, { forwardRef } from 'react';
// import PropTypes from 'prop-types';

// Estilos
import style from './style.module.css';

// Definición del componente <Form>
const Form = forwardRef((props, ref) => {

  const {children, ...other} = props;

  return (

    <form ref={ref} className={style.form} {...other}>
      {children}
    </form>

  );

});

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

export { Form, Field };
