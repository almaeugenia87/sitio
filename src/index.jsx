// Soft4pilot
// Aplicación principal
// José Esteva <josesteva@soft4pilot.net>

// Libreías
import React, { createContext, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { set } from 'lodash';

// Configuración
import config from './config.json';

// Mecanismos
import useWindow from './hooks/window';

// Estilos
import './styles.css';

// Plantilla
import Template from './pages';

// Configuración del acceso a los datos
const client = new ApolloClient({

  uri: import.meta.env.LPDM_API_URL + '/graphql',
  cache: new InMemoryCache()

});

// Contexto de la aplicación
export const Context = createContext();

// Función para actualizar el estado
const reducer = (context, action) => {

  return { ...set(context, action.key, action.value) }

};

// Aplicación principal
const App = () => {

  const width = useWindow();

  // Actualizar el valor del ancho de la ventana
  useEffect(() => {

    setContext({ key: 'currentWidth', value: width });

  }, [ width ]);  // eslint-disable-line

  const [context, setContext] = useReducer(reducer, config);

  return (
    <ApolloProvider client={client}>
      <Context.Provider value={{ context, setContext }}>
        <HashRouter>
          <Template/>
        </HashRouter>
      </Context.Provider>
    </ApolloProvider>
  );

};

// Desplegar aplicación principal
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// [lock-all/]
