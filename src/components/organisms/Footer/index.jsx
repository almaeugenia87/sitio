// APW
// Interfaces
// Footer (Pie de página)
// José Esteva <josesteva@soft4pilot.net>
// México 2022

import React from 'react';
import PropTypes from 'prop-types';

// Componentes
import Label from '../../atoms/Label';

// Estilo
import style from './style.module.css';

// Definición del componente
const Footer = props => {

  const {brand = false, color = 'primary', hue, children, ...other} = props;

  const brandClass = 'brand-' + (brand ? 'true' : 'false');
  const textColor = (hue === 'light') ? 'neutral' : 'white';

  return (
    <footer className={`${style.footer} ${style[brandClass]} ${style[color]} ${style[hue]}`} {...other}>
      {children}
      { brand && <Label size="tiny" color={textColor} style={{bottom:'0'}}>&copy; Soft4pilot {new Date().getFullYear()}</Label> }
    </footer>
  );

}

// Parámetros
Footer.propTypes = {
  brand: PropTypes.bool,
  color: PropTypes.string,
  hue: PropTypes.string
}

export default Footer;

// [lock-all/]
