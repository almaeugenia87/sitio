// SD
// Organismos
// List (Lista editable)

// NOTA: Luego agregar funciones para editar elementos, ordenar la lista, etc.

import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

// Componentes
import Table from '../Table';

// import style from './style.module.css';

// Contexto del menú
const ListContext = createContext();

// Definición de la plantilla
const List = ({ disabled, children, ...other }) =>  (

  <ListContext.Provider value={{ disabled }}>
    <Table style={{ width:'100%' }} {...other}>
      { children }
    </Table>
  </ListContext.Provider>

);

// Encabezado de la lista
const ListHead = ({children, ...other}) => {

  const { disabled } = useContext(ListContext);  // Obtener datos del contexto del componente

  return (
    <Table.Head>
      <Table.Row>
        {children}
        { !disabled && <Table.Label empty /> }
      </Table.Row>
    </Table.Head>
  );

}

const ListLabel = ({children, ...other}) => <Table.Label {...other}>{children}</Table.Label>
const ListBody = ({children, ...other}) => <Table.Body {...other}>{children}</Table.Body>

const ListItem = ({deleteItem, children, ...other}) => {

  const { disabled } = useContext(ListContext);  // Obtener datos del contexto del componente

  // Ejecutar la funciones de retorno (callback)
  const sendDeleteItem = (tr) => {

    if (typeof deleteItem === 'function') deleteItem(tr);

  }

  // Interfaz gráfica
  return (
    <Table.Row {...other}>
      {children}
      { !disabled && <Table.Action icon="times" doAction={sendDeleteItem} /> }
    </Table.Row>
  );

}

const ListData = ({children, ...other}) => <Table.Data {...other}>{children}</Table.Data>

const ListInput = ({addItem, children, ...other}) => {

  const { disabled } = useContext(ListContext);  // Obtener datos del contexto del componente

  // Ejecutar la funciones de retorno (callback)
  const sendAddItem = (tr) => {

    if (typeof addItem === 'function') addItem();

  }

  return (
    <Table.Foot {...other}>

    { !disabled && 
      <Table.Row>
        {children}
        <Table.Action icon="plus" doAction={sendAddItem} />
      </Table.Row>
    }
    </Table.Foot>
  );

}

const ListField = ({children, ...other}) => <Table.Data {...other}>{children}</Table.Data>

// Enlzar los subcomponentes al componente principal
List.Head = ListHead;
List.Label = ListLabel;
List.Body = ListBody;
List.Item = ListItem;
List.Data = ListData;
List.Input = ListInput;
List.Field = ListField;

// Parámetros <List.Item>
List.propTypes = {
  disabled: PropTypes.bool
}

// Parámetros <List.Item>
ListItem.propTypes = {
  deleteItem: PropTypes.func
}

// Parámetros <List.Input>
ListInput.propTypes = {
  addItem: PropTypes.func
}

export default List;
