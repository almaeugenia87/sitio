// SD
// Organismos
// Pagination (Paginación)

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// import '../../../styles/tokens.css';
import style from './style.module.css';

// Componentes
import Icon from '../../atoms/Icon';
import Label from '../../atoms/Label';

// Definición del componente
const Pagination = props => {

  const pages = [];

  const {value, count, size, color, onChange, ...other} = props;

  // Crear el estado del componente
  const [first, setFirst] = useState(1);

  // Poblar el arreglo de páginas
  for (let p=1; p <= count; p++) pages.push(p);

  // Seleccionar una página del grupo
  const changePage = page => {

    if (typeof onChange === 'function') {

      onChange(page);

    }

  }

  // Seleccionar el grupo anterior
  const priorGroup = () => {

    if (typeof onChange === 'function') {

      if (value - size > 1) onChange( value - size )
      else onChange( 1 );

    }

  }

  // Seleccionar el siguiente grupo
  const nextGroup = () => {

    if (typeof onChange === 'function') {

      if (value + size < pages.length) onChange( value + size );
      else onChange( pages.length );

    }

  }

  // Recalcular el primer elemento del grupo
  useEffect(() => {

    if (value < first) setFirst(first - size);
    if (value > first + size - 1) setFirst(first + size);

  }, [value, first]); // eslint-disable-line react-hooks/exhaustive-deps

  return (

    <nav className={`${style.pagination}`} {...other}>

    { (value > size) &&  <Icon type='angle-left' size='small' onClick={priorGroup} /> }

    { pages.slice(first - 1, first + size - 1).map((page, i) => (

      <div key={i} className={`${style.page} ${style[(page === value) ? 'selected' : '']} ${style[color]}`} onClick={() => changePage(page)}>
        <Label size='medium'>{page}</Label>
      </div>

    ))}

    { (first + size - 1 < pages.length) &&  <Icon type='angle-right' size='small' onClick={nextGroup} /> }

    </nav>
  );

}

// Parámetros
Pagination.propTypes = {
  value: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  onChange: PropTypes.func
}

// Valores predeterminados
Pagination.defaultProps = {
  size: 5,
  color: 'primary'
}

export default Pagination;
