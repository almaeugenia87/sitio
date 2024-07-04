// SD
// Interfaces
// Tabla (Table)
// José Esteva <josesteva@cic.unam.mx>

// NOTA: Puse temporalmente el gestor de eventos onRowClick en el componente <TableData> para
// evitar que se emita este evento al seleccionar/deseleccionar registros.

import React from 'react';
import PropTypes from 'prop-types';

// Estilos
import style from './style.module.css';

// Componentes
import Checkbox from '../../atoms/Checkbox';
import Icon from '../../atoms/Icon';
import Label from '../../atoms/Label';

const Table = ({children, ...other}) => {

  // ...

  return (
    <table className={style.table} {...other}>{children}</table>
  )

}

// Elementos agrupadores
const TableHead = ({children, ...other}) => <thead {...other}>{children}</thead>
const TableBody = ({children, ...other}) => <tbody {...other}>{children}</tbody>
const TableFoot = ({children, ...other}) => <tfoot {...other}>{children}</tfoot>

// Renglón
const TableRow = ({children, ...other}) => <tr {...other}>{children}</tr>

// Etiqueta de encabezado
const TableLabel = ({empty, children, ...other}) => (
  <th {...other}>
    { !empty && <Label size="medium" bold>{children}</Label> }
  </th>
)

// Datos
const TableData = ({empty, children, ...other}) => (
  <td {...other}>
    { !empty && <Label size="medium">{children}</Label> }
  </td>
)

// Acción sobre el renglón
const TableAction = ({icon, doAction, children, ...other}) => {

  // Función de retorno (callback) al que se envía el renglón que se desea borrar.
  const sendDoAction = e => {

    e.stopPropagation();

    if (typeof doAction === 'function') {
      doAction(e.target.closest('tr'));
    }

  }

  return (
    <td className={style.action} onClick={e => sendDoAction(e)}>
      <Icon type={icon} size="tiny" />
    </td>
  )

}

// Selector de registro
const TableSelector = ({selector, toogleSelect, children, ...other}) => {

  // Función de retorno (callback) que se ejecuta al selecionar/deseleccionar un renglón.
  const sendToogleSelect = (e) => {

    e.stopPropagation();

    if (typeof toogleSelect === 'function') {
      toogleSelect(e.target.closest('tr'), e.target.checked);
    }

  }

  return (
    <td className={style.selector}>
      <Checkbox onClick={sendToogleSelect}></Checkbox>
    </td>
  );

}

// Asignar los subcomponentes al componente principal
Table.Head = TableHead;
Table.Body = TableBody;
Table.Foot = TableFoot;
Table.Row = TableRow;
Table.Label = TableLabel;
Table.Data = TableData;
Table.Action = TableAction;
Table.Selector = TableSelector

// // Parámetros <Table.Label>
// TableLabel.propTypes = {
//   empty: PropTypes.bool
// }
//
// // Valores predeterminados <Table.Label>
// TableLabel.defaultProps = {
//   empty: false
// }
//
// // Parámetros <Table.Data>
// TableData.propTypes = {
//   empty: PropTypes.bool
// }
//
// // Valores predeterminados <Table.Data>
// TableData.defaultProps = {
//   empty: false
// }

// Parámetros <Table.Action>
TableAction.propTypes = {
  icon: PropTypes.string,
  doAction: PropTypes.func
}

// Parámetros <Table.Selector>
TableSelector.propTypes = {
  selector: PropTypes.bool,
  doSelect: PropTypes.func
}

// Valores predeterminados <Table.Selector>
TableSelector.defaultProps = {
  selector: false
}

export default Table;
