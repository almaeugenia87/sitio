// SD
// Pruebas
//Select (Lista de selección)

import { render } from '@testing-library/react';
import Select from './index';

test('Componente <Select/>', () => {
  render(<Select><Select.Option/></Select>);
});
