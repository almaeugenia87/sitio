// APW
// Templates
// Tabs Component
// Raúl Salinsd <raul.teo.salinas@cic.unam.mx>
// José Esteva <josesteva@cic.unam.mx>

import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

// Estilos locales
import style from './style.module.css';

// Componentes
import Label from '../../atoms/Label';

// Contexto del componente
const TabsContext = createContext();

// Definición del componente
const Tabs = ({ value, onChange, children, ...other }) => {

  // Evento: Cambio de la ruta seleccionada
  const sendPathChange = path => {

    if (typeof onChange === 'function') onChange(path);

  }

  // Interfaz gráfica
  return (
    <TabsContext.Provider value={{ value, sendPathChange }}>
      <nav className={style.tabs} {...other}>
        {children}
      </nav>
    </TabsContext.Provider>
  )
}

// Definición del subcomponente
const Item = ({ path, children, ...other }) => {

  // Obtener parámetros del contexto del componente
  const { value, sendPathChange } = useContext(TabsContext);

  // Interfaz gráfica
  return (

    <button
      onClick={() => sendPathChange(path)}
      className={`${style.item} ${value === path && style.selected}`}
      {...other}
    >
      <Label bold={value === path} color="black">{children}</Label>
    </button>

  );

};

// Asignar los subcomponentes al componente principal
Tabs.Item = Item;

// Propiedades
Tabs.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}

// Propiedades
Tabs.Item.propTypes = {
  path: PropTypes.string
}

export default Tabs;
