// Soft4pilot
// Página principal 
// Pruebas automatizadas
// José Esteva <josesteva@soft4pilot.net>


import React from 'react';
import ReactDOM from 'react-dom';
import Inicio from './index';

it('Se genera correctamente la página <Inicio />', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Inicio />, div);
});
