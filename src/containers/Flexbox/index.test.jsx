// SD
// Retículas
// Flexbox (Caja flexible) - Pruebas
// José Esteva <josesteva@cic.unam.mx>

import { render } from '@testing-library/react';
import { Column, Row } from './index';

test('Componente <Flexbox/>', () => {
  render(<Column/>);
  render(<Row/>);
});
