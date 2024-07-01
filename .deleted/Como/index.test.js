// Soft4pilot
// Pruebas
// ¿A quién está dirigido?
// Pruebas automatizadas
// José Esteva <josesteva@soft4pilot.net>

import React from 'react';
import ReactDOM from 'react-dom';
import Como from './index';

it('Se genera correctamente la página <Como />', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Como />, div);
});
