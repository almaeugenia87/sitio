// Soft4pilot
// Mecanismos (Hooks)
// Mutaciones
// José Esteva <josesteva@soft4pilot.net>

import { useContext } from 'react';
import { request } from 'graphql-request';

// Contexto de la aplicación
import { Context } from '../index';

// Hook
const useMutation = (query) => {

  // Utilizar el contexto de la aplicación
  const { context } = useContext(Context);

  // URL de la API
  const url = context.api + '/graphql';

  // // Estado de la mutación
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  // const [data, setData] = useState();

  // Función para ejecutar la mutación (en el momento en que lo requiera el propgramador)
  const execute = (variables) => {

    // setError(false);
    // setLoading(true);

    // La expresión Object.values(data)[0] regresa el valor del primer elemento del objeto; es decir los datos.
    return request(url, query, variables);

    // .then((response) => {
    //   // NOTA: Verificar aquí que se trate de los datos...
    //   setData(Object.values(response)[0]);
    //
    // }).catch(e => { setError(true); console.log(e); });

    // setLoading(false);

  }

  // Funciones y variables proporcionadas por el Hook
  return execute;

}

export default useMutation;

// [lock-all/]
