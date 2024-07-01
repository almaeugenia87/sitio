// APW
// Página interna 
// Pruebas automatizadas
// José Esteva <josesteva@soft4pilot.net>


import React from 'react';
import ReactDOM from 'react-dom';
import Manual from './index';

it('Se genera correctamente la página <Manual />', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Manual />, div);
});
