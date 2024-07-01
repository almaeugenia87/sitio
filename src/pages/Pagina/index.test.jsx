// APW
// Página interna 
// Pruebas automatizadas
// José Esteva <josesteva@soft4pilot.net>


import React from 'react';
import ReactDOM from 'react-dom';
import Pagina from './index';

it('Se genera correctamente la página <Pagina />', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pagina />, div);
});
