// APW
// Mecanismos (hooks)
// Gestión de registros

// NOTA: Encontrar una forma estándar de organizar constantes, métodos y llamados a métodes (por ejemplo, useEffect) 

import { useState, useEffect, useReducer } from 'react';
import { gql, useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { mergeWith, set } from 'lodash';

// Definición del hook
const useForm = (id, type) => {

  // Estado del formulario
  const [values, setValues] = useState({});  
  const [attributes, setAttributes] = useState('');

  // Obtener los metadatos del tipo
  const { data: metadata  } = useQuery(gql`
    {
      __type(name: "${type}") {
        name
        fields {
          name
          type {
            name
            kind
          }
        }
      }
    }`
  );

  // Obtener los datos del formulario
  const [ read, { data }] = useLazyQuery(gql`
    query ($id: ID) {
      ${type.toLowerCase()} (id: $id) {
      data {
        id
        ${attributes && `
          attributes {
            ${attributes}
          }`
        }
      }
    }
  }`, { variables: { id }});


  // Si hay metadatos, crear la lista de atributos y la estructura de datos (buffer)
  useEffect(() => {

    if (metadata) {

      getAttributes();
      resetValues();
      
    }

  }, [ metadata ]);  // eslint-disable-line
  
  // Actualizar la estructura de datos:
  useEffect(() => {

    // Sólo actualizar la estructura de datos si se proporciona un ID válido  
    if (id > 0) {

      // Actualizar la estrutura de datos (buffer) con los datos obtenidos de la consulta
      if ( data && Object.values(data)[0]) {

        let newValues = mergeWith (
          values, Object.values(data)[0].data.attributes,
          (a, b) => b === null ? a : undefined
        )
        
        setValues({ ...newValues });

      }

    };

  }, [ id, data ]); // eslint-disable-line

  // Obtener la lista de atributos del tipo
  const getAttributes = () => {

    let newAttributes = '';
    
    metadata['__type'].fields.map((field) => {

      if (field.type.kind === 'SCALAR' || field.type.kind === 'ENUM') { // No porcesar subobjetos

        if (!['createdAt', 'updatedAt', 'publishedAt'].includes(field.name)) { // No inlcuir campos de control
          
          newAttributes += field.name + '\n';
          
        }
      }
      
    });

    setAttributes(newAttributes);

  }

  const resetValues = () => {

    let newValues = {};
      
    metadata['__type'].fields.map((field) => {

      if (field.type.kind === 'SCALAR' || field.type.kind === 'ENUM') { // No porcesar subobjetos

        if (!['createdAt', 'updatedAt', 'publishedAt'].includes(field.name)) { // No inlcuir campos de control

          let defaultValue;

          switch (field.type.name) {
            case 'Boolean': 
              defaultValue = false;
              break;
            case 'Integer':   
              defaultValue = 0;
              break;
            default:
              defaultValue = '';
          }

          // Agregar un elemento a la estructura de datos
          newValues = { ...newValues, [field.name]: defaultValue };
          
        }
      }

    });

    setValues(newValues);

  }

   // Gestor de evento: Aplicar un cambio a la estructura de datos
   const changeValue = (e) => {

    // Obtener el nombre, tipo y valor del control
    const fieldName = e.target.name;
    const filedType = e.target.type;
    const fieldValue = filedType === 'checkbox' ? e.target.checked : e.target.value;

    // Determinar el tipo de dato (texto o número) que debe utilizarse
    const dataValue = (typeof values[fieldName] === 'string' || values[fieldName] instanceof String) ? fieldValue : typeof values[fieldName] === 'boolean' ? Boolean(fieldValue) : Number(fieldValue);

    setValues({ ...set( values, fieldName, dataValue )});

  }

  // Mutación: Crear un registro nuevo
  const [ create ] = useMutation(gql`mutation ($data: ${type}Input = {}) {
    create${type.charAt(0).toUpperCase() + type.toLowerCase().slice(1)} (data: $data)  {
      data { id }
    }
  }`, { variables: { data: values }});

  // Mutación: Actualizar un registro
  const [ update ] = useMutation(gql`mutation ($data: ${type}Input = {}, $id: ID = "") {
    update${type.charAt(0).toUpperCase() + type.toLowerCase().slice(1)}(data: $data, id: $id) {
      data { id }
    }
  }`, { variables: { data: values, id }});

  // Mutación: Eliminar un registro
  const [ remove ] = useMutation(gql`mutation ($id: ID = "") {
    delete${type.charAt(0).toUpperCase() + type.toLowerCase().slice(1)}(id: $id) {
      data { id }
    }
  }`, { variables: { id }});

  // Regresar datos, acciones, estado y gestores
  return { values, send: { create, update, remove, read }, changeValue, resetValues };

}

export default useForm;

// [lock-all/]
