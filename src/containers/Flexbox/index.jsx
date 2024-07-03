// SD
// Retículas
// Flexbox (Caja flexible)
// José Esteva <josesteva@cic.unam.mx>

// NOTA: Este componente crea un contenedor Flexbox con las opciones básicas,
//       opciones más avanzadas pueden agregarse utilizando el parámetro style={}.
//       El componente regresa de forma predeterminada un elemento <div> pero esto
//       puede regresarse otro elemento utilizando el parámetro as="elemento"

import React from 'react';
import PropTypes from 'prop-types';

import style from './style.module.css'; // Tuve que cambiar el nombre del módulo CSS para que no choque con el parámetro 'style' del componente

// Componente
const Flexbox = props => {

  const {direction = 'row', justify = 'start', align = 'start', gap = 'medium', wrap, children, ...other} = props;

  const justifyClass = 'justify-' + justify;
  const alignClass = 'align-' + align;
  const gapClass = 'gap-' + gap;
  const wrapClass = 'wrap-' + wrap;

  return (
    <div className={`${style.container} ${style[direction]} ${style[justifyClass]} ${style[alignClass]} ${style[gapClass]} ${style[wrapClass]}`} {...other}>
      {children}
    </div>
  )

}

// // Variante del componete (Columna)
// const Column = props => {

//   const {justify, align, gap, wrap, children, ...other} = props;

//   return (
//     <Flexbox direction="column" justify={justify} align={align} gap={gap} wrap={wrap} {...other}>
//       {children}
//     </Flexbox>
//   )

// }

// // Variante del componete (Renglón)
// const Row = props => {

//   const {justify, align, gap, wrap, children, ...other} = props;

//   return (
//     <Flexbox direction="row" justify={justify} align={align} gap={gap} wrap={wrap} {...other}>
//       {children}
//     </Flexbox>
//   )

// }

// Parámetros
Flexbox.propTypes = {
  direction: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
  gap: PropTypes.string,
  wrap: PropTypes.bool
}

export default Flexbox;
