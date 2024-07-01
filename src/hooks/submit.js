// APW
// Hooks
// Control de formularios

// IMPORTANTE: En esta versión del Hook se presupone que las subconsultas se
// relacionan siempre utilizando el campo 'id' y no se incluyen otros campos.

// NOTA: Me gustaría incluir en este hook los controladores de evento que por ahora
// estoy poniendo en lso formularios. Esto implicaría detectar el nombre de la colección
// para personalizar los llamados.

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';

import { objectUpdate } from '../utils.js';

// Definición del hook
const useSubmit = (collection, structure) => {

  // Hisoria de navegación
  const navigate = useNavigate();

  // Estado del formulario
  const [values, setValues] = useState(structure); // Estructura de datos asociada al formulario

  // Crear las mutaciones para gestionar el formulario
  const createQuery = gql`mutation ($data: create_${collection}_input = {}) {
    create_${collection}_item (data: $data)
  }`;

  // Mutaciones
  const [ create ] = useMutation(createQuery);

  // Actualizar la estructura de datos (cuando cambien los datos del formulario)
  const handleChange = (e) => {

    const name = e.target.name;
    const value = e.target.type === 'checkbox' ? (e.target.checked ? true : false) : e.target.value;

    setValues(objectUpdate(values, name, value));

  }

  // Borrar el registro actual
  const submitForm = () => {

    create({ data: values }).then(() => console.log('Soft4pilot: El registro se envió correctamente.')).catch(e => console.log('Soft4pilot: Error al enviar el registro.' + e));

    navigate('/', { replace: true });

  }

  return { values, submitForm, handleChange };

}

export default useSubmit;

// [lock-all/]
