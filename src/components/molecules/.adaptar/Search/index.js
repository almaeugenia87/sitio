// SD
// Plantillas
// Search (Búsqueda)

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import style from './style.module.css';

import Icon from '../../atoms/Icon';
import Input from '../../atoms/Input';

// Definición del componente
const Search = props => {

  const {color, placeholder, fold, ...other} = props;

  const [foldClass, setFoldClass] = useState('fold-' + fold);

  return (
    <section role="search" className={`${style.container} ${style[color]} ${style[foldClass]}`} {...other}>
      <Icon type="search" color={color} size="small" onClick={() => setFoldClass(foldClass === 'fold-true' ? 'fold-false' : 'fold-true')} />
      { foldClass === 'fold-false' && <Input color={color} placeholder={placeholder} border={false} type="search" /> }
    </section>
  );

}

// Parámetros
Search.propTypes = {
  color: PropTypes.string,
  placeholder: PropTypes.string,
  fold: PropTypes.bool
}

// Valores predeterminados
Search.defaultProps = {
  color: 'black',
  fold: true
}

export default Search;
