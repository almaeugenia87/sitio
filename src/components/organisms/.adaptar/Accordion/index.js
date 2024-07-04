// SD
// Organismos
// Accordion (Acordión)
// Raúl Salinas <raul.teo.salinas@cic.unam.mx>
// José Esteva <josesteva@cic.unam.mx> (Revisión)


import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Componentes
import Icon from '../../atoms/Icon';
import Label from '../../atoms/Label';

// Estilos locales
import style from './style.module.css';

// Contexto del componente
const AccordionContext = createContext();

//rootPath sirve para indicar la ruta raiz donde está el acordeon tendra un valor por defecto '' si no es pasado
const Accordion = ({ defaultPath, onChange, rootPath = '', children, other }) => {

  // Ruta seleccionada
  const [selected, setSelected] = useState(defaultPath);

  // Ejecutar la función de retorno (callback) cada vez que cambie la ruta seleccionada
  useEffect(() => {

    if (typeof onChange === 'function') onChange(selected);

  }, [selected]); // eslint-disable-line

  return (
    <AccordionContext.Provider value={{ selected, setSelected, rootPath }}>
      <div className={style.accordion} {...other}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
};

const Item = ({ path, title, children, other }) => {

  // Obtener parámetros del contexto del componente
  const { selected, setSelected, rootPath } = useContext(AccordionContext);

  const changeSelected = (path) => {
    // Si damos click nuevamente al acordeón abierto te lleva a rootPath
    if (selected === path) {

      setSelected(rootPath)

    } else {

      setSelected(path)

    }

  }

  return (

    <details className={style.item} open {...other}>

      <summary
        onClick={(e) => { e.preventDefault(); changeSelected(path); }}
        className={`${style.summary} ${path !== selected ? style['summary-active'] : ''}`}>
        <Label color={path === selected ? "black" : ""} bold={path === selected ? true : false}>{title}</Label>
        <Icon size="small" type="angle-down" color="primary" style={{
          transform: path === selected ? "scaleY(-1)" : "scaleY(1)",
          transition: "transform 0.3s ease"
        }} />
      </summary>

      <div className={`${style.collapse}  ${selected === path && style.active}`} {...other}>
        {children}
      </div>

    </details>
  )

}

// Asignar los subcomponentes al componente principal
Accordion.Item = Item;

// Propiedades
Accordion.prototype = {
  defaultPath: PropTypes.string,
  onChange: PropTypes.func,
  rootPath: PropTypes.string
}

Accordion.Item.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string
}

export default Accordion;
