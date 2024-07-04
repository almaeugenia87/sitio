// SD
// Moléculas
// Menu (Menú)

// NOTA: Tomar los valores de tamaños, colores y espaciados del archivo
//       de diseño (Figma) y asignarlos a valores abstractos como:
//       size={small|medium|large}
//       color={primary|secondary|neutral}

// NOTA: Si en el diseño no se requieren menús horizontales entonces no es necesario
//       incluir el parámetro "direction". No es recomndable implementar funcionalidades
//       que "podrían ser útiles después", es mejor limitarnos a los casos de uso existentes.

import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import Label from '../../atoms/Label';

import style from './style.module.css';

// Contexto del menú
const MenuContext = createContext();

// Definición del componente
const Menu = props => {

  const { direction = 'row', size = 'medium', color = 'black', children, ...other} = props;

  return (
    <MenuContext.Provider value={{ size, color }}>
      <ul className={`${style.menu} ${style[direction]} ${style[size]}`} {...other}>
        {children}
      </ul>
    </MenuContext.Provider>
  )

}

const Item = props => {

  const {icon, aside = false, children, ...other} = props;
  
  const { size, color } = useContext(MenuContext);  // Obtener los parámetros del menú

  const asideClass = 'aside-' + aside.toString();

  return (
    <li className={`${style.item} ${style[asideClass]}`} {...other}>
      <Label icon={icon} size={size} color={color}>{children}</Label>
    </li>
  )
}

// Parámetros
Menu.propTypes = {
  direction: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string
}

Item.propTypes = {
  icon: PropTypes.func,
  aside: PropTypes.bool
}

export { Menu, Item };
