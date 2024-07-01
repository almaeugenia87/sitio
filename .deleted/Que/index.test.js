// Soft4pilot
// ¿Qué es? (Pruebas)
// José Esteva <josesteva@soft4pilot.net>


import React from 'react';
import ReactDOM from 'react-dom';
import Que from './index';

it('Se genera correctamente la página <Que />', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Que />, div);
});
