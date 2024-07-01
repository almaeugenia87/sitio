// Soft4pilot
// ¿A quién está dirigido? (Pruebas)
// José Esteva <josesteva@soft4pilot.net>

import React from 'react';
import ReactDOM from 'react-dom';
import Quien from './index';

it('Se genera correctamente la página <Quien />', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Quien />, div);
});
