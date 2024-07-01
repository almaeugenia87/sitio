// APW
// Mecanismos (hooks)
// useSubdata (Gestión de documentos)

import { useState, useEffect } from 'react';
import { gql, useLazyQuery, useMutation, useQuery } from '@apollo/client';

import useFiles from './files';

// Definición del hook
const useSubdata = (id, collection) => {

  // Acceso a los archivos del repositorio
  const files = useFiles(collection);

  // Estado del mecanismo
  const [ items, setItems ] = useState([]);

  // Consulta para obtener la lista de datos asociados
  const { data, refetch } = useQuery (
    gql`query {
      ${collection}_documentos (filter: {id_${collection}: {id: {_eq: ${id === 'nuevo' ? '-1' : id}}}}) {
        id
        id_personas {
          id
          nombre
        }
        id_documentos {
          id
          nombre
        }
        pdf { id }
      }
    }`
  );

  // Consulta para buscar una persona
  const [ findPersona ] = useLazyQuery (
    gql`query ($id: ID = "") {
      persona: personas_by_id (id: $id) {
        id
        nombre
      }
    }`
  );

  // Consulta para buscar un documento
  const [ findDocumento ] = useLazyQuery (
    gql`query ($id: ID = "") {
      documento: documentos_by_id (id: $id) {
        id
        nombre
      }
    }`
  );

  // Mutación para eliminar multiples registros asociados
  const [ deleteItems ] = useMutation(gql`mutation ($ids: [ID]!) {
    delete_${collection}_documentos_items(ids: $ids) {
      ids
    }
  }`);

  // Mutacion para agregar multiples registros asociados
  const [ createItems ] = useMutation(gql`mutation ($data: [create_${collection}_documentos_input!]) {
    create_${collection}_documentos_items (data: $data)  {
      id
    }
  }`);

  // Mutacion para actualizar un registro asociado (utilizado para registrar los archivos enviados)
  const [ updateItem ] = useMutation(gql`mutation ($data: update_${collection}_documentos_input = {}, $id: ID! = "") {
    update_${collection}_documentos_item (data: $data, id: $id)  {
      id
    }
  }`);

  // Gestor de evento: Agregar un elemento a la lista
  const addItem = async (id_personas, id_documentos, pdf) => {

    // Obtener los datos completos del elemento que se va a agregar
    const { data: { persona } } = await findPersona({ variables: { id: id_personas || -1 } });
    const { data: { documento } } = await findDocumento({ variables: { id: id_documentos || -1 } });

    // Actualizar la lista de datos asociados
    if ( persona && documento ) setItems([ ...items, { id: null, id_personas: { id: persona.id, nombre: persona.nombre }, id_documentos: { id: documento.id, nombre: documento.nombre }, pdf } ]);

  }

  // Gestor de evento: Eliminar un elemento de la lista
  const deleteItem= tr => {

    // Marcar el elemento como eliminado
    const newItems = items.map((item, index) => {

      if (index === parseInt(tr.dataset.index)) {
        // Clonar el objeto para asegurarse de que sea una copia profunda
        return { ...item, deleted: true };
      }

      return item;

    });

    // Actaulizar la lista de elementos
    setItems(newItems);

  }

  const saveItems = async ( useId ) => {

    // Si no hay un ID válido, no hacer nada.
    if (id === 'nuevo' && !useId ) return;

    // Separar los elementos que deben eliminarse
    let forDelete = items.filter(item => {
      return item.id && item.deleted;
    });

    // Generar los ID utilizados por la mutación
    forDelete = forDelete.map(item => {
      return parseInt(item.id);
    });

    // Eliminar elementos marcados
    if (forDelete.length > 0) deleteItems({ variables: { ids: forDelete }}).then(() => refetch()).catch(e => console.log(e));

    // Separar los elementos que deben agregarse
    let forCreate = items.filter(item => {
      return !item.id && !item.deleted;
    });

    // Generar los objetos utilizados por la mutación
    let forCreateData = forCreate.map(item => {
      return { id_productos: { id: useId ? useId : id }, id_personas: { id: item.id_personas.id }, id_documentos: { id: item.id_documentos.id }};
    });

    // Agregar elementos nuevos
    if (forCreateData.length > 0) createItems({ variables: { data: forCreateData }}).then(response => {

      // Subir al repositorio los archivos seleccionados
      response.data[`create_${collection}_documentos_items`].forEach((item, i) => {

        if (forCreate[i].pdf) {

          files.uploadFile(forCreate[i].pdf) //, `${id}_${i + 1}.${item.pdf.name.split('.').pop()}`)
          .then(
            uuid => updateItem({ variables: { data: { pdf: { id: uuid, folder: { id: files.getFolder } } }, id: item.id }})
            .then (
              () => refetch() // Actualizar la lista
          ));
        }

      });

    }).catch(e => console.log(e));

  }

  const resetItems = () => {

    // Eliminar elementos agregados
    let newItems = items.filter(item => item.id !== null);

    // Restablecer elementos eliminados
    newItems = newItems.map((item, index) => {

      // Eliminar marca de borrado
      if ( item.deleted ) return { ...item, deleted: false };

      return item;

    });

    // Actaulizar la lista de elementos
    setItems([ ...newItems ]);

  }

  // Si hay datos, agregarlos al estado del formulario:
  useEffect(() => {

    if (data) setItems([ ...data[`${collection}_documentos`] ]);

  }, [ data ]); // eslint-disable-line

  // Regresar datos, acciones, estado y gestores
  return { items, addItem, deleteItem, saveItems, resetItems, reloadItems: refetch };

}

export default useSubdata;

// [lock-all/]
