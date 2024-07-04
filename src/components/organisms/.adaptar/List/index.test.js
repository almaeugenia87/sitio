// APW
// Plantillas
// Lista de usuarios
// Pruebas

import { render } from '@testing-library/react';
import List from './index';

test('Componente <List items={[]} />', () => {
  render(<List />);
});
