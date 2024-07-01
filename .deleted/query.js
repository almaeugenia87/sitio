// Soft4pilot
// Mecanismos (Hooks)
// Consultas
// José Esteva <josesteva@soft4pilot.net>

import { useContext, useState, useEffect } from 'react';
import { request } from 'graphql-request';

// Contexto de la aplicación
import { Context } from '../index';

// Hook
const useQuery = (query, defaultVars) => {

  // Utilizar el contexto de la aplicación
  const { context } = useContext(Context);

  const url = context.api + '/graphql';

  // Estado de la consulta
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  // Ejecutar la consulta
  // NOTA: Probablemente esta función deba exponerse como 'requery' pues a primera vez se ejecuta sola.
  const requery = (variables) => {

    setError(false);
    setLoading(true);

    // La expresión Object.values(response)[0] regresa el valor del primer elemento del objeto; es decir, el arreglo de datos.
    request(url, query, variables).then((response) => {

      // NOTA: Esta verificación no es correcta porque las consultas a veces regresan "objetos" y otras veces "arreglos"...
      // if (Object.values(response) && Array.isArray(Object.values(response)[0]))
      setData(response);

      // setData(response);

    }).catch(err => { setError(true); console.log(err); });

    setLoading(false);

  }

  // Ejecutar la consulta al crear el hook
  useEffect(() => {

    requery(defaultVars);

  }, []); // eslint-disable-line

  // Funciones y variables proporcionadas por el Hook
  return [ data, requery, { loading, error }];

}

export default useQuery;

// [lock-all/]
