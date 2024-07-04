// SD
// Pruebas
//Select (Lista de selección)

import { render } from '@testing-library/react';
import { Select, Option } from './index';

test('Componente <Select/>', () => {
  render(<Select><Option/></Select>);
});
