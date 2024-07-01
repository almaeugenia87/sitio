// Soft4pilot
// Registro de pilotos (Pruebas)
// José Esteva <josesteva@soft4pilot.net>


import React from 'react';
import ReactDOM from 'react-dom';
import Registro from './index';

it('Se genera correctamente la página <Registro />', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Registro />, div);
});
