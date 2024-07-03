// SD
// Moléculas - Pruebas
// Pagination (Paginación)

import { render } from '@testing-library/react';
import Pagination from './index';

test('Componente <Pagination/>', () => {
  render(<Pagination value={1} count={10} />);
});
