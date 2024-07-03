// SD
// Pruebas
// Radio (Selección de opción)

import { render } from '@testing-library/react';
import Radio from './index';

const options = [
  { value: '1', label: 'Uno' },
  { value: '2', label: 'Dos' },
  { value: '3', label: 'Tres' }
];

test('Componente <Radio/>', () => {
  render(<Radio options={options} />);
});
